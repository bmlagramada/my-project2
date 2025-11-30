"use client";
import { usePathname } from "next/navigation";
import { FaUser, FaCode, FaReact, FaHeart } from 'react-icons/fa';

export default function About() {
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
          Get to know me
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-5 border border-gray-200">
        <h2 className="text-3xl font-bold text-black mb-5 text-center flex items-center justify-center gap-3">
          <FaUser className="text-blue-600" />
          ABOUT ME
        </h2>
        <p className="text-black leading-relaxed flex items-center gap-2">
          Hi, I'm Betty Mae Lagramada
        </p>
        <p className="text-black leading-relaxed mt-4 flex items-start gap-2">
          I'm a beginner web developer and I am creating simple but functional websites.  I'm using React and ShadCN tailwind, and I love experimenting with new ideas to improve my skills.
        </p>
    
      </div>

    </div>
  );
}