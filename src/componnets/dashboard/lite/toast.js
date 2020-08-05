import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const Toasts = (props) => {
  const [showA, setShowA] = useState(true);
  const { param, setparam, message } = props;

  const toggleShowA = () => setparam(!param);
  console.log(typeof message, "INI TOAST");

  return (
    <Toast className="box-toast" show={param} onClose={toggleShowA}>
      <Toast.Header>
        <strong className="mr-auto">Pemberitahuan</strong>
      </Toast.Header>
      <Toast.Body>{typeof message === "string" ? message : "null"}</Toast.Body>
    </Toast>
  );
};

export default Toasts;
