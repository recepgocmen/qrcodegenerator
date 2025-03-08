"use client";

import { useState, ChangeEvent, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState<number>(30);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  // Example QR code data
  const exampleQRData = {
    url: "https://example.com",
    logoUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTggMTRzMS41IDIgNCAyIDQtMiA0LTIiLz48bGluZSB4MT0iOSIgeTE9IjkiIHgyPSI5LjAxIiB5Mj0iOSIvPjxsaW5lIHgxPSIxNSIgeTE9IjkiIHgyPSIxNS4wMSIgeTI9IjkiLz48L3N2Zz4=", // Simple smiley face SVG as base64
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogo(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogoSize(Number(e.target.value));
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoSize(30);
  };

  // Format the input value for QR code
  const getQRValue = (value: string) => {
    // Check if it looks like a URL (contains domain-like pattern)
    const urlPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}|localhost/;
    if (urlPattern.test(value) && !value.startsWith("http")) {
      return `https://${value}`;
    }
    return value;
  };

  const handleDownload = () => {
    if (!qrCodeRef.current || !inputValue) return;

    const svg = qrCodeRef.current.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `qrcode-${inputValue.substring(0, 20)}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 space-y-12">
      {/* Input Section */}
      <div className="space-y-2 group">
        <label
          htmlFor="url-input"
          className="block text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          Enter URL or Text
        </label>
        <input
          id="url-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="example.com or any text"
          className="w-full px-4 py-3 border-2 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            border-gray-200 hover:border-blue-300
            dark:border-gray-600 dark:hover:border-blue-700
            dark:bg-gray-800/80 dark:text-white
            bg-white/80 backdrop-blur-sm
            transition-all duration-200 ease-in-out text-base
            placeholder:text-gray-400 dark:placeholder:text-gray-500"
          aria-label="Enter URL or text to generate QR code"
        />
      </div>

      {/* Logo Upload Section with Example */}
      <div
        className="space-y-4 rounded-xl border border-gray-100/80 dark:border-gray-700/50 
        bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm
        p-5 hover:border-blue-100 dark:hover:border-blue-900/40 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="logo-upload"
                className="block text-base font-medium text-gray-700 dark:text-gray-200"
              >
                Add Logo (Optional)
              </label>
              {logo && (
                <button
                  onClick={handleRemoveLogo}
                  className="text-sm text-red-500 hover:text-red-600 dark:text-red-400
                    px-2 py-0.5 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20
                    transition-all duration-200"
                  aria-label="Remove logo"
                >
                  Remove Logo
                </button>
              )}
            </div>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="block w-full text-xs text-gray-600 dark:text-gray-300
                file:mr-3 file:py-1.5 file:px-3
                file:rounded-lg file:border-0
                file:text-xs file:font-semibold
                file:bg-blue-50 file:text-blue-600
                hover:file:bg-blue-100 hover:file:text-blue-700
                dark:file:bg-blue-900/40 dark:file:text-blue-300
                dark:hover:file:bg-blue-900/50 dark:hover:file:text-blue-200
                dark:file:border dark:file:border-blue-800
                cursor-pointer transition-all duration-200"
              aria-label="Upload logo for QR code"
            />
            {logo && (
              <div className="space-y-1.5">
                <label
                  htmlFor="logo-size"
                  className="block text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                  Logo Size: {logoSize}px
                </label>
                <input
                  id="logo-size"
                  type="range"
                  min="20"
                  max="40"
                  value={logoSize}
                  onChange={handleLogoSizeChange}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer
                    dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
                    transition-colors"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Maximum size is limited to 40px
                </p>
              </div>
            )}
          </div>

          {/* Small Example */}
          <div className="w-20 flex flex-col items-center space-y-1.5">
            <div
              className="bg-white p-1.5 rounded-lg shadow-md dark:bg-gray-800 
              hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <QRCodeSVG
                value={exampleQRData.url}
                size={50}
                level="H"
                imageSettings={{
                  src: exampleQRData.logoUrl,
                  height: 12,
                  width: 12,
                  excavate: true,
                }}
              />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Example
            </span>
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div>
        <div
          className="flex flex-col items-center p-8 
            bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
            rounded-xl shadow-lg hover:shadow-xl 
            border border-transparent hover:border-blue-100 dark:hover:border-blue-900/40
            transition-all duration-300 ease-in-out
            space-y-6"
          aria-live="polite"
        >
          {inputValue ? (
            <>
              <div
                ref={qrCodeRef}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <QRCodeSVG
                  value={getQRValue(inputValue)}
                  size={200}
                  level="H"
                  aria-label={`QR Code for ${inputValue}`}
                  imageSettings={
                    logo
                      ? {
                          src: logo,
                          height: logoSize,
                          width: logoSize,
                          excavate: true,
                        }
                      : undefined
                  }
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600 transition-colors duration-200 text-base
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Download QR Code"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </button>
              </div>
            </>
          ) : (
            <div className="text-base text-gray-400 dark:text-gray-500 text-center">
              Enter a URL or text to generate QR code
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
