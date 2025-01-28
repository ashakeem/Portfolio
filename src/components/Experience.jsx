const Experience = () => {
    return (
      <div
        name="experience"
        className="w-full h-screen bg-[#161616] text-gray-300 relative z-0"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#c54848]">
              Work Experience
            </p>
            <p className="py-4">Here is a timeline of my Internships.</p>
          </div>
  
          <div className="relative border-l border-gray-700 mt-8">
            {/* Amazon */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#c54848] rounded-full -left-3 ring-8"></span>
              <h3 className="text-xl font-semibold text-gray-100">Amazon</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Fall 2025 (Incoming)
              </time>
              <p className="text-gray-400">
                Developing and improving web applications using web technologies
                such as React and JavaScript.
              </p>
            </div>
  
            {/* Atlassian */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#c54848] rounded-full -left-3 ring-8 ring-black"></span>
              <h3 className="text-xl font-semibold text-gray-100">Atlassian</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Summer 2025 (Incoming)
              </time>
              <p className="text-gray-400">
                Working on innovative software solutions empowering global
                collaboration using Java, Python, and C++.
              </p>
            </div>
  
            {/* Capital One */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#c54848] rounded-full -left-3 ring-8 ring-black"></span>
              <h3 className="text-xl font-semibold text-gray-100">Capital One</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Jun 2024 – Aug 2024
              </time>
              <p className="text-gray-400">
                Collaborated on building an automated alert monitoring system
                with AWS and Golang, saving 42.4% of manual effort. Analyzed over
                77,000 alerts using Python.
              </p>
            </div>
  
            {/* Above and Beyond Studios */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#c54848] rounded-full -left-3 ring-8 ring-black"></span>
              <h3 className="text-xl font-semibold text-gray-100">
                Above and Beyond Studios
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                May 2023 – Aug 2023
              </time>
              <p className="text-gray-400">
                Improved load times by 5% with lazy loading and enhanced
                navigation by developing an interactive carousel using React.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  