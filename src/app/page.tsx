"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-bold underline"
      : "text-black hover:text-blue-500";

  return (
    <div className="bg-zinc-50 min-h-screen font-sans text-gray-800">
      {/* TOP NAVIGATION */}
      <header className="flex justify-end items-center p-6">
        <nav className="space-x-6 text-xl">
          <a href="/" className={linkClass("/")}>HOME</a>
          <a href="/about" className={linkClass("/about")}>ABOUT</a>
          <a href="/education" className={linkClass("/education")}>EDUCATION</a>
          <a href="/hobbies" className={linkClass("/hobbies")}>HOBBIES</a>
          <a href="/contact" className={linkClass("/contact")}>CONTACT</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex flex-col min-h-[calc(100vh-100px)] items-center justify-center p-6 gap-8">
        {/* IMAGE SECTION */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-200 shadow-lg">
            <Image
              src="/bmlagramada.png" // Path from public folder
              alt="Betty Mae Lagramada"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Welcome to My Project
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
           I'm <span className="font-semibold text-indigo-600">Betty,</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            This is my first personal website using React with Tailwind CSS for styling.
          </p>
          <div className="mt-8">
            <a 
              href="/about" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}