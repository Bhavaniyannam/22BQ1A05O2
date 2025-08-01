import { useState } from "react";
import { logEvent } from "../utils/loggerMiddleware";

function ShortenerForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  function validateUrl(value) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setShortenedUrl("");

    if (!validateUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    const payload = {
      url
    };

    logEvent("info", "User submitted URL for shortening", payload);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate shortened URL generation
    const generatedShortcode = Math.random().toString(36).substring(2, 8);
    const shortened = `${window.location.origin}/s/${generatedShortcode}`;

    setShortenedUrl(shortened);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded max-w-md mx-auto">
      <label htmlFor="url" className="block text-sm font-medium text-gray-700">
        Enter URL to shorten
      </label>
      <input
        id="url"
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={e => setUrl(e.target.value)}
        required
        className="input border border-gray-300 rounded px-3 py-2 w-full"
        disabled={loading}
      />
      <button
        type="submit"
        className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Shortening..." : "Shorten"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {shortenedUrl && (
        <p className="text-green-600">
          Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="underline">{shortenedUrl}</a>
        </p>
      )}
    </form>
  );
}

export default ShortenerForm;
