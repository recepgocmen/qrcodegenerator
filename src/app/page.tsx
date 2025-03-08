import QRCodeGenerator from "@/components/QRCodeGenerator";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 
      selection:bg-blue-200 dark:selection:bg-blue-800"
    >
      <div className="container mx-auto px-4 flex-grow pt-12">
        <h1
          className="text-4xl font-bold text-center bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-indigo-600 
          dark:from-blue-400 dark:to-indigo-400 
          mb-3 tracking-tight pt-6"
        >
          QR Code Generator
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 tracking-wide text-base">
          Generate QR codes with custom logos instantly
        </p>
        <QRCodeGenerator />
      </div>

      {/* Footer Section */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-4">
              {/* Other Apps Section */}
              <div className="flex flex-col items-center">
                <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Try Our Other Apps
                </h2>
                <a
                  href="https://hangiparfum.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                    rounded-lg border border-gray-100/80 dark:border-gray-700/50
                    hover:border-blue-200 dark:hover:border-blue-900/40
                    transition-all duration-300 text-gray-600 dark:text-gray-300
                    hover:text-blue-600 dark:hover:text-blue-400 text-sm
                    hover:shadow-md"
                >
                  Hangi Parfüm
                </a>
              </div>

              {/* Buy Me a Coffee Section */}
            </div>

            <div className="flex items-center justify-center">
              <a
                href="https://github.com/recepgocmen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400
                  hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  />
                </svg>
                <span className="font-medium">@recepgocmen</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
