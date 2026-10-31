export function AuthorCard() {
  return (
    <div className="mt-12 flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white md:flex-row">
      {/* Image: full height on the left */}
      <div className="relative h-64 w-full shrink-0 md:h-auto md:w-44">
        <img
          src="/mentors/neeraj.jpg"
          alt="Neeraj Sharma"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-xl font-semibold leading-tight text-[#1A3B8B] md:text-2xl">
          Neeraj Sharma
        </h3>
        <p className="mt-1 text-sm font-bold text-gray-900">Author</p>

        <p className="mt-1.5 text-justify text-sm leading-relaxed text-gray-600 md:text-[15px]">
          Neeraj has 10+ years of experience in Digital Marketing, SEO &amp; Performance Marketing.
          He holds a B.Tech (Computer Science) from Panjab University, Chandigarh, and has worked
          as a Digital Marketing Strategist at Techmagnate and a Digital Marketing Trainer at
          Unacademy. His specialization covers Digital Marketing Strategy, SEO, SEM, SMM, Local SEO
          and AI Tools for Marketing. 
          His skills include Email Marketing, Content Writing, WordPress, Google Analytics 4,
          Canva, and ChatGPT &amp; AI Marketing Tools.
        </p>
      </div>
    </div>
  );
}