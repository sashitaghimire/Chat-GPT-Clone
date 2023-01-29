import { useState } from "react";
import OpenSelection from "./components/OpenSelection";
import GenerateImage from "./pages/GenerateImage";
import { arrayItems } from "./AIOptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Translation from "./components/Translation";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  {Object.values(option)?.length === 0 ? (
                    <OpenSelection
                      arrayItems={arrayItems}
                      setOption={setOption}
                    />
                  ) : (
                    <Translation
                      setInput={setInput}
                      doStuff={doStuff}
                      result={result}
                    />
                  )}
                </>
              }
            />

            <Route path="/open-ai" element={<GenerateImage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
