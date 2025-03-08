import QRCodeGenerator from "@/components/QRCodeGenerator";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 
      selection:bg-blue-200 dark:selection:bg-blue-800"
    >
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl font-bold text-center bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-indigo-600 
          dark:from-blue-400 dark:to-indigo-400 
          mb-2 tracking-tight"
        >
          QR Code Generator
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 tracking-wide">
          Generate QR codes with custom logos instantly
        </p>
        <QRCodeGenerator />
      </div>
    </main>
  );
}
