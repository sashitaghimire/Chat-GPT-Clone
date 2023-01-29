import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    setLoader(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    if (res) {
      setLoader(false);
      setImageUrl(res?.data?.data[0]?.url);
    }
  };

  return (
    <div className="app-main">
      <h3>Generate Image using Open AI</h3>
      <input
        className="app-input"
        placeholder="Type something to Generate an image"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate an image</button>
      {imageUrl?.length > 0 ? (
        <img src={imageUrl} alt={prompt} className="result-image" />
      ) : (
        <></>
      )}
      {loader ? ":Loading..." : ""}
    </div>
  );
}

export default GenerateImage;
