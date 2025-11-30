"use client";
import { usePathname } from "next/navigation";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

export default function Education() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-bold underline"
      : "text-black hover:text-blue-500";

  const educationData = [
    {
      level: "Bachelor of Science in Computer Science" ,
      school: "Naga College Foundation, Inc.",
      location: "MT Villanueva Avenue, Naga City",
      period: "2025 - today",
      description: "Specialized in Web Development and Machine Learning."
    },
    {
      level: "Senior High School",
      school: "Binanuaanan High School",
      location: "New Binanuaanan, Pili, Camarines Sur",
      period: "2022 - 2023",
      strand: "GAS - General Academic Strand"
    },
    {
      level: "Junior High School",
      school: "Pili Capital College Inc.",
      location: "San Isidro, Pili, Camarines Sur",
      period: "2019 - 2020"
    }
  ];

  const certifications = [
    {
      name: "Microsoft office Specialist - Word Associate (Microsoft 365 Apps)",
      issuer: "Microsoft - Certiport",
      date: "2023",
      description: "Validated skills in creating, formatting, and managing documents using Microsoft Word."
    },
   
  ];

  return (
    <div className="bg-zinc-100 min-h-screen">

      <header className="flex justify-between items-center p-6">

        <h1 className="text-3xl font-extrabold text-black">
          FIRST PROJECT
        </h1>

        <nav className="space-x-6 text-xl">
          <a href="/" className={linkClass("/")}>HOME</a>
          <a href="/about" className={linkClass("/about")}>ABOUT</a>
          <a href="/education" className={linkClass("/education")}>EDUCATION</a>
          <a href="/hobbies" className={linkClass("/hobbies")}>HOBBIES</a>
          <a href="/contact" className={linkClass("/contact")}>CONTACT</a>
        </nav>

      </header>

      <div className="flex flex-col items-center justify-center text-center mt-12">
        <div className="text-blue-800 text-lg font-medium mb-5 underline">
          Academic Journey & Certifications
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 flex items-center gap-3">
          <FaGraduationCap className="text-blue-600" />
          EDUCATION BACKGROUND
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.level}</h3>
                  <p className="text-lg text-gray-600">{edu.school}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-blue-600 font-semibold">{edu.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-sm" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-600">{edu.description}</p>
              )}

              {edu.strand && (
                <p className="text-gray-600 font-medium">{edu.strand}</p>
              )}
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-12 flex items-center gap-3">
          <FaCertificate className="text-green-600" />
          Certifications
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{cert.name}</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {cert.date}
                </span>
              </div>

              <p className="text-gray-600 font-semibold mb-2">{cert.issuer}</p>
              
              <p className="text-gray-600 text-sm">{cert.description}</p>

              <div className="mt-4 flex items-center gap-2 text-blue-600">
                <FaAward className="text-yellow-500" />
                <span className="text-sm font-semibold">Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS SUMMARY */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Frontend</h3>
              <div className="space-y-2">
                {['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'].map((skill, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{skill}</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${80 + index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Backend</h3>
              <div className="space-y-2">
                {['Node.js'].map((skill, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{skill}</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${75}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Tools</h3>
              <div className="space-y-2">
                {['Git/GitHub', 'VS Code', 'Figma'].map((skill, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{skill}</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${70 + index * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}