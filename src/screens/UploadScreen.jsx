import React from "react";
import FileUpload from "../components/FileUpload.jsx";
import { Link } from "react-router-dom";

const UploadScreen = () => {
  return (
    <>
      <FileUpload />

      <button>
        <Link to="/fileediting">Create Project</Link>
      </button>
    </>
  );
};

export default UploadScreen;
