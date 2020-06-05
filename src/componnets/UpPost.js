import React, { useState, useRef, Fragment } from "react";
import JoditEditor from "jodit-react";

const UpPost = () => {
  const editor = useRef(null);
    const [content, setContent] = useState("");
    console.log(content);
    

    const config = {
        enter: "BR",
        uploader: {
            insertImageAsBase64URI: true
          },
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

    return (
        <Fragment>
            
     
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {document.getElementById('in-here').innerHTML = newContent
      }}
            />
            <div id='in-here'></div>
            </Fragment>
  );
};

export default UpPost;
