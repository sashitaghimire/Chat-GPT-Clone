import { useState } from "react";
import OpenSelection from "./components/OpenSelection";
import GenerateImage from "./pages/GenerateImage";
import { arrayItems } from "./AIOptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Translation from "./components/Translation";

function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = () => {
    setOption({ ...option, prompt: input });
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
                      selectOption={selectOption}
                    />
                  ) : (
                    <Translation setInput={setInput} doStuff={doStuff} />
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
