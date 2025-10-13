import "./style.css";
import { useEffect, useState, useCallback } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [result, setResult] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/hello`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
