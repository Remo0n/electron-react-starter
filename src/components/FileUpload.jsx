import React, { useEffect } from "react";
import { setLemmaBlocks } from "../redux/counterSlice.js";
import { useSelector, useDispatch } from "react-redux";

const FileUpload = () => {
  const dispatch = useDispatch();
  const t = useSelector((state) => state.counter.lemmaBlocks);
  console.log(t);
  useEffect(() => {
    const handleDataEvent = (event, data) => {
      dispatch(setLemmaBlocks(data));
      //set the data to redux store
    };

    window.electron.ipcRenderer.on("data", handleDataEvent);

    // Cleanup the event listener
    return () => {
      window.electron.ipcRenderer.removeListener("data", handleDataEvent);
    };
  }, []);

  const handleUploadChange = (e) => {
    e.preventDefault();
    const filePath = e.target.files[0].path;
    window.electron.ipcRenderer.send("file:submit", filePath);
  };

  return (
    <div>
      <label>Select a file</label>
      <input
        type="file"
        id="fileInput"
        accept=".v"
        onChange={handleUploadChange}
      />
      {t?.length > 0 && "work"}
    </div>
  );
};

export default FileUpload;
