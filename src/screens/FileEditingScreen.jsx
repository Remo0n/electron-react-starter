import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FileEditingScreen = () => {
  const lemmas = useSelector((state) => state.counter.lemmaBlocks);
  const [selectedLemma, setSelectedLemma] = useState(null);

  return (
    <div>
      <h3>select a lemaa</h3>
      <ul>
        {lemmas.map((lema, index) => (
          <li key={index} onClick={() => setSelectedLemma(lema)}>{lema}</li>
        ))}
      </ul>
      <Link to="/">back</Link>
      {selectedLemma ? (
        <div>
          <h1>{selectedLemma}</h1>
          <button
            onClick={() =>
              window.electron.ipcRenderer.send("file:export", selectedLemma)
            }
          >
            export
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FileEditingScreen;
