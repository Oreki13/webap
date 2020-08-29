import React, { Fragment, useEffect } from "react";
import ConvTime from "../../assets/functions/convertTime";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

// Redux
import { getByIdArtikel } from "../../redux/actions/artikel";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faClock } from "@fortawesome/free-solid-svg-icons";

const ShowPost = (props) => {
  const dispatch = useDispatch();
  const response = useSelector((state) => ({
    artikel_id: state.artikel.byId,
    loading: state.artikel.isLoading,
  }));

  const artId = props.match.params.id;

  useEffect(() => {
    dispatch(getByIdArtikel(decodeURIComponent(artId)));
    document.title = response.artikel_id.title;
  }, [artId]);

  // document.getElementById("post").innerHTML = "<p>Hello</p>";

  return (
    <Fragment>
      {response.loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div>
            <MetaTags>
              <title>{response.artikel_id.title}</title>
              <meta
                name="description"
                content={response.artikel_id.caption_img}
              />
              <meta property="og:site_name" content="Arfandy Surya" />
              <meta name="title" content={response.artikel_id.title} />
              <meta
                property="og:image"
                content={
                  process.env.REACT_APP_URL + response.artikel_id.thumbnail
                }
              />
            </MetaTags>
            <h3>{response.artikel_id.title}</h3>
            <div className="info-post">
              <span className="mr-3">
                <FontAwesomeIcon icon={faUserEdit} /> Oleh{" "}
                {response.artikel_id.user
                  ? response.artikel_id.user.name
                  : "Anonymous"}
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} />{" "}
                {ConvTime(response.artikel_id.createdAt)}
              </span>
            </div>
          </div>

          <div className="card no-border shadows my-3 p-2">
            <img
              src={process.env.REACT_APP_URL + response.artikel_id.thumbnail}
              className="img-fluid"
            />
            {/* <caption className="p-0">{response.artikel_id.caption_img}</caption> */}
            {/* <div className="mt-3">{getFill.post}</div> */}
            {/* {innerPost(getFill.post)} */}
            <div>{ReactHtmlParser(response.artikel_id.post)}</div>
          </div>
        </>
      )}
    </Fragment>
  );
};

const innerPost = (data) => {
  return data;
};

export default ShowPost;
