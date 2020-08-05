import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Carousel from "./carousel";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const CardH = (props) => {
  const path = props.match.path;
  const { datas } = props;

  function transform(node) {
    // do not render any <span> tags
    if (
      (node.type === "tag" && node.name === "img") ||
      node.name === "br" ||
      node.name === "span"
    ) {
      return null;
    }
    if (node.type === "tag" && node.name === "p") {
      // console.log(node);
    }
  }
  return (
    <Fragment>
      {path !== "/" ? null : <Carousel />}
      <div className="mt-3">
        <h3>Artikel</h3>
      </div>
      {datas.map((data, key) => (
        <div className="card mb-3 no-border shadows">
          <div className="mt-3">
            <Link to={"/artikel/" + data.id}>
              <h5 className="px-3 card-title">{data.title}</h5>
            </Link>
            <div className="d-flex justify-content-between bg-e5 px-3 py-2">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                <p>{data.user ? data.user.name : "Anonymous"}</p>
              </div>
              <div>
                <span className="kategori-badge">{data.kategori.name}</span>
              </div>
            </div>
          </div>
          <div className="body-card">
            <div className="content-card">
              <div className="post-card">
                {data.caption_img.length > 200
                  ? data.caption_img.substr(0, 200) + "..."
                  : data.caption_img}
                {/* {ReactHtmlParser(data.post, {
                  transform,
                })} */}
              </div>

              <div>
                <FontAwesomeIcon
                  className="mr-3"
                  size="lg"
                  icon={faHeart}
                  color="red"
                />
                <FontAwesomeIcon
                  className="mr-3"
                  size="lg"
                  icon={faFacebook}
                  color="blue"
                />
                <FontAwesomeIcon
                  className="mr-3"
                  size="lg"
                  icon={faTwitter}
                  color="lightblue"
                />
                <FontAwesomeIcon
                  className="mr-3"
                  size="lg"
                  icon={faWhatsapp}
                  color="green"
                />
              </div>
            </div>
            <div className="text-center">
              <img
                className="rounded img-card"
                src={process.env.REACT_APP_URL + data.thumbnail}
              />
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default CardH;
