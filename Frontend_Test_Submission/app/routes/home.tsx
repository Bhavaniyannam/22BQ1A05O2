import React, { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = () => {
    setError("");
    setShortenedUrl("");
    if (!url) {
      setError("Please enter a URL to shorten.");
      return;
    }
    try {
      // Basic URL validation
      new URL(url);
    } catch {
      setError("Invalid URL format.");
      return;
    }
    // Mock shortening function - returns a dummy shortened URL
    const dummyShortUrl = "https://short.url/" + Math.random().toString(36).substring(2, 8);
    setShortenedUrl(dummyShortUrl);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Enter URL to shorten
        </h2>
        <input
          id="urlInput"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleShorten}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          Shorten
        </button>
        {error && <p className="text-red-600 mt-3">{error}</p>}
        {shortenedUrl && (
          <div className="mt-4 p-3 bg-gray-100 rounded border border-gray-300 break-all">
            Shortened URL:{" "}
            <a
              href={shortenedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {shortenedUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
