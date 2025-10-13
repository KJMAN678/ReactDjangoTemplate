import "./style.css";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {

  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
    .then((res) => res.json()).then(setData)
    .catch(err => console.error(err));
  }, []);
  const result = data?.result
  return (
    <div className="min-h-screen bg-gray-50 py-4">
      {result ? (
        <h1 className="text-3xl font-bold underline">{result}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
