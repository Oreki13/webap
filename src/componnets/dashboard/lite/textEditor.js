import React, { useRef, useState, createRef, Component } from "react";
import JoditEditor from "jodit-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "jodit";
import "jodit/build/jodit.min.css";
// Require Editor JS files.

import Dimen from "../../../assets/functions/getDimensions";

const TextEditor = (props) => {
  const { cont, setCont } = props;
  const editor = createRef();
  const [test, setTest] = useState("");
  const config = {
    height: Dimen().height - 100,
    enter: "BR",
    uploader: {
      url: "http://localhost:8080/artikel/uploadImg",
    },
  };

  return (
    <JoditEditor
      ref={editor}
      value={cont}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setCont(newContent)} // preferred to use only this option to update the content for performance reasons
      //   onChange={(newContent) => {
      //     setTest(newContent);
      //   }}
    />
    // <ReactQuill theme="snow" value={test} onChange={setTest} />
  );
};

export default TextEditor;
