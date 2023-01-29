import React from "react";

function Translation({ doStuff, setInput }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={50}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        DO YOU STUFF
      </button>
    </div>
  );
}

export default Translation;
