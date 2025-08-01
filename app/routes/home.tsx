import ShortenerForm from "../../src/components/ShortenerForm";

export function meta() {
  return [
    { title: "URL Shortener" },
    { name: "description", content: "URL Shortener with Logging Middleware" },
  ];
}

export default function Home() {
  return <ShortenerForm />;
}
