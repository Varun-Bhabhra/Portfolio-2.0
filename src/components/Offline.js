import { useState, useEffect } from "react";
import { Instagram, Mail, Loader2 } from "lucide-react";

const Offline = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate loading
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Fade in content after loading
    const visibleTimer = setTimeout(() => {
      setVisible(true);
    }, 2300);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(visibleTimer);
    };
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Loading state */}
      {loading ? (
        <div className="flex flex-col items-center justify-center z-10">
          <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
          <p className="text-purple-300 text-lg animate-pulse">Loading</p>
        </div>
      ) : (
        <div
          className={`max-w-md mx-auto px-6 transition-all duration-1000 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                alt="Digital abstract"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-white font-bold text-xl animate-pulse">
                  Site Offline
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-300 mb-6">
                I'm currently crafting a new portfolio experience for 2025.
                Please check back soon to see the finished result.
              </p>

              <div className="flex space-x-4 mb-6 justify-center">
                <a
                  href="https://instagram.com/developedbyvarun"
                  className="group"
                  aria-label="Instagram"
                >
                  <div className="bg-gray-700 p-3 rounded-full transition-all duration-300 group-hover:bg-pink-600 group-hover:scale-110">
                    <Instagram size={20} className="text-white" />
                  </div>
                </a>
                <a
                  href="mailto:bhabhravarun@gmail.com"
                  className="group"
                  aria-label="Email"
                >
                  <div className="bg-gray-700 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                    <Mail size={20} className="text-white" />
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Expected return</span>
                  <span className="text-sm font-semibold text-purple-400">
                    May 2025
                  </span>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1.5 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-8 text-center">
            <a
              href="https://yourwebsite.com/old-portfolio"
              className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              View Previous Work
            </a>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Offline;
