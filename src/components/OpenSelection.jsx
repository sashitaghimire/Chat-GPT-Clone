import React from "react";
import { useNavigate } from "react-router-dom";

function OpenSelection({ arrayItems, setOption }) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn" onClick={() => navigate("/open-ai")}>
          Open AI
        </button>
      </div>
      <h1 className="heading">React AI APP</h1>

      <div className="grid-main">
        {arrayItems?.map((item) => {
          return (
            <div
              key={item?.id}
              className="grid-child"
              onClick={() => setOption(item?.option)}
            >
              <h4>{item?.name}</h4>
              <p>{item?.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OpenSelection;
