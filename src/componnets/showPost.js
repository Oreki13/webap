import React, { Fragment } from "react";
import ConvTime from "../assets/functions/convertTime";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faClock } from "@fortawesome/free-solid-svg-icons";

const ShowPost = (props) => {
  const { datas } = props;

  const artId = props.match.params.id;

  const fill = datas.filter((x) => x.id == artId);

  const getFill = fill[0];

  return (
    <Fragment>
      <div>
        <h3>{getFill.title}</h3>
        <div className="info-post">
          <span className="mr-3">
            <FontAwesomeIcon icon={faUserEdit} /> Oleh {getFill.author}
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} /> {ConvTime(getFill.time)}
          </span>
        </div>
      </div>

      <div className="card no-border shadows my-3 p-2">
        <img src={getFill.thumbnail} className="img-fluid" />
        <caption className="p-0">{getFill.captionImg}</caption>
        <p className="mt-3">{getFill.post}</p>
      </div>
    </Fragment>
  );
};

export default ShowPost;
