"use client";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-bold underline"
      : "text-black hover:text-blue-500";

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
          Get in touch
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">CONTACT DETAILS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
              <FaGithub className="text-gray-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a href="#" className="font-semibold hover:text-gray-600 transition-colors">
                  github.com/bmlagramada
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <FaEnvelope className="text-blue-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">bmlagramada@gbox.ncf.edu.ph</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-blue-100 rounded-lg">
              <FaFacebook className="text-blue-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Facebook</p>
                <a href="#" className="font-semibold hover:text-blue-600 transition-colors">
                  facebook.com/bettyyymaeee.lagramadaaa
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-blue-100 rounded-lg">
              <FaLinkedin className="text-blue-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a href="#" className="font-semibold hover:text-blue-600 transition-colors">
                  linkedin.com/in/bettymae
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <FaPhone className="text-green-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold">09513954227</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Availability</h3>
          <p className="text-gray-600">
            I'm currently available for freelance projects and full-time opportunities. 
            Feel free to reach out via email or social media for collaborations!
          </p>
        </div>
      </div>

    </div>
  );
}