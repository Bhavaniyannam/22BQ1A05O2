import { useEffect } from "react";
import { useParams } from "react-router";
import { logEvent } from "../../src/utils/loggerMiddleware";

export default function ShortcodeRedirect() {
  const { shortcode } = useParams();

  useEffect(() => {
    async function fetchOriginalUrl() {
      logEvent("info", "User accessed shortcode", { shortcode });

      // Simulate fetching original URL from backend
      // Replace this with actual API call
      const originalUrl: string = await new Promise((resolve) =>
        setTimeout(() => resolve("https://example.com"), 500)
      );

      if (originalUrl) {
        window.location.href = originalUrl;
      } else {
        // Handle not found case
        alert("Shortcode not found");
      }
    }

    fetchOriginalUrl();
  }, [shortcode]);

  return <p>Redirecting...</p>;
}
