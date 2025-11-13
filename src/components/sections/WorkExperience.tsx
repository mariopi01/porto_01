import React from 'react';

// Data dari App.jsx baris 41-46
type WorkItem = {
  company: string;
  logo: string;
  date: string;
  image: string;
};

const workExperience: WorkItem[] = [
  { company: 'Adobe', logo: 'adobe', date: '2025 - Present', image: 'https://api.builder.io/api/v1/image/assets/TEMP/52f89c0835eb821f0d15f344ca55d84bbaa22828?width=650' },
  { company: 'Dribbble', logo: 'dribbble', date: '2025 - Present', image: 'https://api.builder.io/api/v1/image/assets/TEMP/21642a2af1f98b6b6d1fc3051788529c13a916cb?width=650' },
  { company: 'Dropbox', logo: 'dropbox', date: '2025 - Present', image: 'https://api.builder.io/api/v1/image/assets/TEMP/02b98dc260aea69018454c47d7d51c22ab45ffa0?width=650' },
  { company: 'PayPal', logo: 'paypal', date: '2025 - Present', image: 'https://api.builder.io/api/v1/image/assets/TEMP/988029e0479388637eb32cef2bfd701d947ebceb?width=650' }
];

// Ikon dari App.jsx baris 496
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7 4.018C6.46 4.041 6.072 4.092 5.729 4.208C5.14238 4.40442 4.60932 4.73422 4.17171 5.17148C3.73411 5.60874 3.40388 6.14154 3.207 6.728C3 7.349 3 8.115 3 9.649C3 9.744 3 9.792 3.013 9.83C3.02528 9.86679 3.04594 9.90021 3.07337 9.92763C3.10079 9.95506 3.13421 9.97572 3.171 9.988C3.209 10.001 3.257 10.001 3.353 10.001H20.647C20.743 10.001 20.791 10.001 20.829 9.988C20.8658 9.97572 20.8992 9.95506 20.9266 9.92763C20.9541 9.90021 20.9747 9.86679 20.987 9.83C21 9.791 21 9.743 21 9.647C21 8.114 21 7.347 20.793 6.729C20.5964 6.14217 20.2663 5.60897 19.8287 5.17135C19.391 4.73372 18.8578 4.40362 18.271 4.207C17.928 4.092 17.539 4.041 17 4.018V6.5C17 6.89782 16.842 7.27936 16.5607 7.56066C16.2794 7.84196 15.8978 8 15.5 8C15.1022 8 14.7206 7.84196 14.4393 7.56066C14.158 7.27936 14 6.89782 14 6.5V4H10V6.5C10 6.89782 9.84196 7.27936 9.56066 7.56066C9.27936 7.84196 8.89782 8 8.5 8C8.10218 8 7.72064 7.84196 7.43934 7.56066C7.15804 7.27936 7 6.89782 7 6.5V4.018Z"/>
    <path d="M3 11.5C3 11.264 3 11.146 3.073 11.073C3.146 11 3.264 11 3.5 11H20.5C20.736 11 20.854 11 20.927 11.073C21 11.146 21 11.264 21 11.5V12C21 15.771 21 17.657 19.828 18.828C18.656 19.999 16.771 20 13 20H11C7.229 20 5.343 20 4.172 18.828C3.001 17.656 3 15.771 3 12V11.5Z" fillOpacity="0.25"/>
  </svg>
);

export default function WorkExperience() {
  return (
    // JSX dari App.jsx baris 471-520
    <section className="py-12 md:py-16 px-4 bg-white relative">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 px-4">
            A timeline of companies and roles that helped shape my skills.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-300 md:left-1/2"></div>

          <div className="space-y-6">
            {workExperience.map((job, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                {/* Timeline Dot */}
                <div className={`w-6 h-6 rounded-full flex-shrink-0 ${idx === 0 ? 'bg-blue-300' : 'bg-gray-300'} border-4 ${idx === 0 ? 'border-primary' : 'border-gray-400'}`}></div>

                {/* Card */}
                <div className="flex-1">
                  <img 
                    src={job.image} 
                    alt={job.company}
                    className="w-full h-44 object-cover rounded-t-3xl"
                  />
                  <div className="bg-white rounded-b-3xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BriefcaseIcon />
                      <span className="text-sm font-bold text-gray-900">{job.date}</span>
                    </div>
                    <div className="h-9 mb-3"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Fronted Developer</h3>
                    <p className="text-sm text-gray-900 font-medium">
                      Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}