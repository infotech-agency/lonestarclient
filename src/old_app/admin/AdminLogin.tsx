// "use client";
// import { useState } from "react";
// import { motion } from "motion/react";
// import { LogIn, Eye, EyeOff } from "lucide-react";
// import { BASE_URL } from "../../../utils/baseUrl";

// interface Props { onLogin: (token: string) => void; }

// export default function AdminLogin({ onLogin }: Props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPw, setShowPw] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError("");
//   //   try {
//   //     const res = await fetch(`${BASE_URL}/api/auth/login`, 
//   //     // const res = await fetch("https://slategrey-worm-160018.hostingersite.com/api/auth/login", 
//   //       {
//   //       method: "POST", headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ email, password })
//   //     });
//   //     console.log(res)
//   //     const data = await res.json();
//   //     if (!res.ok) throw new Error(data.error || "Login failed");
//   //     localStorage.setItem("admin_token", data.token);
//   //     onLogin(data.token);
//   //   } catch (err: any) {
//   //     setError(err.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoading(true);
//   setError("");

//   try {
//     // Fixed credentials
//     const fixedEmail = "admin@lonestar.in";
//     const fixedPassword = "lonestar@academy.in";

//     // Check credentials
//     if (email === fixedEmail && password === fixedPassword) {
//       const fakeToken = "lonestar_admin_token";

//       localStorage.setItem("admin_token", fakeToken);
//       onLogin(fakeToken);
//     } else {
//       throw new Error("Invalid email or password");
//     }
//   } catch (err: any) {
//     setError(err.message);
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
//       <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
//         <div className="text-center mb-8">
//           <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//             <LogIn size={28} className="text-white" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
//           <p className="text-gray-500 text-sm mt-1">Lone Star Academy Dashboard</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
//               // className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"/>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <div className="relative">
//               <input type={showPw ? "text" : "password"} required value={password} onChange={e => setPassword(e.target.value)}
//                 // className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12" placeholder=" " />
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"/>
//               <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                 {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <button type="submit" disabled={loading}
//             className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 transition">
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
        
//       </motion.div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LogIn, Eye, EyeOff } from "lucide-react";
import { BASE_URL } from "../../../utils/baseUrl";

interface Props { onLogin: (token: string) => void; }

// --- Config ---
// Obfuscated (base64) — NOT real security, just avoids plaintext view-source.
const ENC_EMAIL = "YWRtaW5AbG9uZXN0YXIuaW4="; // admin@lonestar.in
const ENC_PASSWORD = "bG9uZXN0YXJAYWNhZGVteS5pbg=="; // lonestar@academy.in

// Bump this manually every time you "change the password" in code,
// so old sessions everywhere get invalidated immediately.
const PASSWORD_VERSION = 1;

const SESSION_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours

function decode(b64: string) {
  try {
    return atob(b64);
  } catch {
    return "";
  }
}

function buildToken() {
  const payload = {
    v: PASSWORD_VERSION,
    exp: Date.now() + SESSION_DURATION_MS,
  };
  return btoa(JSON.stringify(payload));
}

// Exported so your dashboard/layout guard can reuse the same check.
export function isValidAdminToken(token: string | null): boolean {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token));
    if (payload.v !== PASSWORD_VERSION) return false; // invalidated by version bump
    if (Date.now() > payload.exp) return false; // expired
    return true;
  } catch {
    return false;
  }
}

export default function AdminLogin({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  // One-time cleanup: kill any old localStorage token from previous version
  if (localStorage.getItem("admin_token")) {
    localStorage.removeItem("admin_token");
  }

  const token = sessionStorage.getItem("admin_token");
  if (!isValidAdminToken(token)) {
    sessionStorage.removeItem("admin_token");
    // redirect to login / show login screen
  }
}, []);
  // Auto-check existing session on mount (e.g. page refresh)
  useEffect(() => {
    const existing = sessionStorage.getItem("admin_token");
    if (existing && isValidAdminToken(existing)) {
      onLogin(existing);
    } else if (existing) {
      sessionStorage.removeItem("admin_token"); // clean up stale/expired token
    }
  }, [onLogin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const fixedEmail = decode(ENC_EMAIL);
      const fixedPassword = decode(ENC_PASSWORD);

      if (email === fixedEmail && password === fixedPassword) {
        const token = buildToken();
        sessionStorage.setItem("admin_token", token);
        onLogin(token);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LogIn size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1">Lone Star Academy Dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input type={showPw ? "text" : "password"} required value={password} onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"/>
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 transition">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}