import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { myObject } from "../dummy/data";
import Dimen from "../assets/functions/getDimensions";
import ConvTime from "../assets/functions/convertTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const detail = (coment) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <img
          className="rounded-circle mr-1"
          src="/img/fandy2.jpg"
          width="25"
          height="25"
        />
        <p>Arfandy</p>
      </div>

      <p style={{ textAlign: "end" }}>
        <FontAwesomeIcon icon={faCommentAlt} /> {coment}
      </p>
    </>
  );
};

const action = () => {
  return (
    <div>
      <FontAwesomeIcon
        className="mr-3"
        size="lg"
        color="#2b2b2b"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Lihat"
        icon={faEye}
      />
      <FontAwesomeIcon
        className="mr-3"
        size="lg"
        color="#2b2b2b"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Edit"
        icon={faPencilAlt}
      />
      <FontAwesomeIcon
        size="lg"
        color="#2b2b2b"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Hapus"
        icon={faTrashAlt}
      />
    </div>
  );
};

const SettingPost = () => {
  const { height } = Dimen();

  const [hovId, setHovId] = useState("");
  return (
    <Container>
      <h3>Post</h3>
      <div
        style={{ overflowY: "scroll", height: height - 170 }}
        className="p-2"
      >
        {myObject.map((data, key) => (
          <div
            onMouseEnter={(e) => setHovId(data.id)}
            onMouseLeave={() => setHovId("")}
            className={
              hovId === data.id
                ? "card no-border shadow mb-3 p-3"
                : "card no-border mb-3 p-3 shadows"
            }
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
              <div className="mr-2">
                <img src={data.thumbnail} width="70" />
              </div>
              <div style={{ flex: 1 }}>
                <p className="mb-1">{data.title}</p>

                <p style={{ fontSize: 13, color: "#8c8c8c" }}>
                  Di Publikasi &middot; {ConvTime(data.time)}
                </p>
              </div>
              <div>{hovId === data.id ? action() : detail(data.comment)}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SettingPost;
