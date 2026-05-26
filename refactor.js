import fs from 'fs';
import path from 'path';

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk('./src/old_app');

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (!content.includes('"use client"') && !content.includes("'use client'")) {
    content = '"use client";\n' + content;
    changed = true;
  }

  if (content.includes('react-router-dom')) {
    // Replace Link
    content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]react-router-dom['"]/g, (match, p1) => {
      let imports = p1.split(',').map(s => s.trim());
      let nextNavigationImports = [];
      let nextLink = false;
      
      let filtered = [];
      imports.forEach(imp => {
        if (imp === 'Link') nextLink = true;
        else if (imp === 'useNavigate') nextNavigationImports.push('useRouter');
        else if (imp === 'useParams') nextNavigationImports.push('useParams');
        else if (imp === 'useLocation') nextNavigationImports.push('usePathname');
        else if (imp !== 'Navigate') filtered.push(imp); // Navigate is removed usually
      });

      let res = '';
      if (nextLink) {
        res += `import Link from "next/link";\n`;
      }
      if (nextNavigationImports.length > 0) {
        res += `import { ${nextNavigationImports.join(', ')} } from "next/navigation";\n`;
      }
      if (filtered.length > 0) {
        res += `// Warning: unhandled react-router-dom imports: ${filtered.join(', ')}\n`;
      }
      return res;
    });
    changed = true;
  }

  // Replace useNavigate() with useRouter()
  if (content.includes('useNavigate(')) {
    content = content.replace(/useNavigate\(/g, 'useRouter(');
    changed = true;
  }

  // Replace useLocation() with usePathname()
  if (content.includes('useLocation(')) {
    content = content.replace(/useLocation\(/g, 'usePathname(');
    changed = true;
  }

  // Next.js Link uses href instead of to
  if (content.includes('<Link ')) {
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    changed = true;
  }

  // Remove Helmet
  if (content.includes('react-helmet-async')) {
    content = content.replace(/import\s+{?\s*Helmet\s*}?\s+from\s+['"]react-helmet-async['"];?/g, '');
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
