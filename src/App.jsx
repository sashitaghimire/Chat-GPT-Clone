import { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 1,
      size: "1024x1024",
    });
    console.log(res.data.data[0]?.url);
  };

  return (
    <div>
      <button onClick={generateImage}>Generate an imahge</button>
    </div>
  );
}

export default App;
