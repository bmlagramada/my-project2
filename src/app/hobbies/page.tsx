"use client";
import { usePathname } from "next/navigation";
import { FaTv, FaBook, FaGamepad, FaGraduationCap, FaHeart, FaMusic } from 'react-icons/fa';

export default function Tester() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-bold underline"
      : "text-black hover:text-blue-500";

  const hobbies = [
    {
      name: "Watching Anime",
      icon: <FaTv className="text-3xl text-red-500" />,
      description: "Enjoy exploring different genres from action-packed shonen to thought-provoking slice-of-life series. Always looking for new recommendations!",
      examples: ["Bungou Stray Dogs", "Made in Abyss", "Sanda", "Studio Ghibli films"],
      color: "bg-red-50 border-red-200"
    },
    {
      name: "Listening to Music",
      icon: <FaMusic className="text-3xl text-pink-500" />,
      description: "Love discovering new music across various genres. Music helps me focus while coding and relax during breaks.",
      examples: ["J-Pop", "Lo-fi",],
      color: "bg-pink-50 border-pink-200"
    },
    {
      name: "Learning New Things",
      icon: <FaGraduationCap className="text-3xl text-blue-500" />,
      description: "Passionate about continuous learning and self-improvement. Always curious about new technologies, skills, and knowledge areas.",
      examples: ["Web Development", "Programming Languages", "Design Principles", "New Frameworks"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Playing Games",
      icon: <FaGamepad className="text-3xl text-green-500" />,
      description: "Love playing both video and board games. Enjoy the challenge, strategy, and social aspects of gaming.",
      examples: ["Mobile Games", "PC Games"],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Reading",
      icon: <FaBook className="text-3xl text-purple-500" />,
      description: "Avid reader who enjoys getting lost in different worlds through books. Prefers fiction but also reads educational materials.",
      examples: ["Light Novels", "Tech Articles", "Manga"],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const favoriteAnime = [
    { title: "Bungou Stray Dogs", genre: "Action, Supernatural, Mystery", rating: "10/10" },
    { title: "Made in Abyss", genre: "Fantasy, Adventure", rating: "9/10" },
    { title: "Sanda", genre: "Action, Mystery, Drama", rating: "9/10" },
    { title: "Howl's Moving Castle", genre: "Fantasy, Adventure", rating: "10/10" }
  ];

  const favoriteMusic = [
    { artist: "Yoasobi, Official Hige Dandism", genre: "J-Pop", favorite: "Japanese Pop Music" },
    { artist: "Various Artists", genre: "Lo-fi", favorite: "Study and Chill Beats" }
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
          What makes me busy
        </div>
      </div>

      {/* HOBBIES GRID */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 flex items-center gap-3 justify-center">
          <FaHeart className="text-red-500" />
          MY HOBBIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hobbies.map((hobby, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${hobby.color} hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex items-center gap-4 mb-4">
                {hobby.icon}
                <h3 className="text-xl font-bold text-gray-800">{hobby.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{hobby.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Examples:</h4>
                <div className="flex flex-wrap gap-2">
                  {hobby.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAVORITE ANIME SECTION */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaTv className="text-red-500" />
            Favorite Anime & Ratings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favoriteAnime.map((anime, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{anime.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">
                    {anime.rating}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{anime.genre}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAVORITE MUSIC SECTION */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaMusic className="text-pink-500" />
            Favorite Music Genres
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favoriteMusic.map((music, index) => (
              <div key={index} className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{music.genre}</h3>
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm font-bold">
                    Favorite
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{music.artist}</p>
                <p className="text-gray-500 text-xs mt-1">{music.favorite}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CURRENTLY LEARNING */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-blue-500" />
            Currently Learning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-500 font-bold text-lg mb-2">Frontend</div>
              <p className="text-gray-600">React patterns</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-green-500 font-bold text-lg mb-2">Backend</div>
              <p className="text-gray-600">Node.js optimization</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-purple-500 font-bold text-lg mb-2">Tools</div>
              <p className="text-gray-600">Git advanced workflows</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "The things you are passionate about are not random, they are your calling."
          </p>
          <p className="text-gray-500 text-sm mt-2">- Fabienne Fredrickson</p>
        </div>
      </div>

    </div>
  );
}