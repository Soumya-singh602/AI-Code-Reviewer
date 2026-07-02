import { useState } from "react";
import { reviewCode } from "../api";

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await reviewCode(code);
    setResult(res.data.result);
  };

  return (
    <div>
      <textarea rows="10" cols="70"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleSubmit}>Review</button>

      <pre>{result}</pre>
    </div>
  );
}