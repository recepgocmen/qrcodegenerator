import QRCodeGenerator from "@/components/QRCodeGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          QR Code Generator
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Generate QR codes with custom logos instantly
        </p>
        <QRCodeGenerator />
      </div>
    </main>
  );
}
