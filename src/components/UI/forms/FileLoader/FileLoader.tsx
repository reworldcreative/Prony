import React, { FC, useState } from "react";
import "./FileLoader.scss";
import clip from "@/assets/img/icons/clip.svg";
import cancelIcon from "@/assets/img/icons/cancel.svg";

interface FileLoaderProps {
  onSelect: (fileName: string) => void;
}

const FileLoader: FC<FileLoaderProps> = ({ onSelect }) => {
  const [fileName, setFileName] = useState("");

  const checkFileExtension = (fileName: string) => {
    const fileNameSplit = fileName.split(".");
    const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
    return ["jpg", "jpeg", "png", "gif"].includes(fileExtension);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files[0];

    if (checkFileExtension(selectedFile.name)) {
      setFileName(URL.createObjectURL(selectedFile));
      onSelect(URL.createObjectURL(selectedFile));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (checkFileExtension(file.name)) {
      setFileName(URL.createObjectURL(file));
      onSelect(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="file-loader__wrapper" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="file-loader__label text">
          <img className="file-loader__icon" src={clip} alt="clip icon" width="16" height="16" aria-hidden="true" />
          <label htmlFor="postFileLoader" className="file-loader__link">
            Add file&#160;
          </label>
          or drop files here
        </div>
        <input
          type="file"
          className="file-loader__input visibility-hidden"
          id="postFileLoader"
          name="post-file-loader"
          onChange={(e) => handleFileChange(e)}
        />
      </div>
      {fileName && (
        <div className="file-loader__image-wrapper">
          <img
            className="file-loader__image"
            src={fileName}
            alt="file loader image"
            width="93"
            height="68"
            aria-hidden="true"
          />

          <button
            className="file-loader__image-remove"
            type="button"
            aria-label="remove image"
            onClick={() => {
              setFileName("");
            }}
          >
            <img src={cancelIcon} alt="close" width="20" height="20" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
};

export default FileLoader;
