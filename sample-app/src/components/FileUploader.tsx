import { useState } from "react";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    console.log(selectedFile);
  };

  return (
    <div className="">
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};

export default FileUploader;
