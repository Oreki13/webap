import React, { Fragment, useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { myObject } from "../../dummy/data";
import Dimen from "../../assets/functions/getDimensions";
import ConvTime from "../../assets/functions/convertTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import localStorage from "local-storage";
import { checkToken } from "../../redux/actions/user";
import { Link } from "react-router-dom";
import { deleteArtikel } from "../../redux/actions/artikel";

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

const Action = (props) => {
  const { id, goEdit, judul, goDelete } = props;
  return (
    <div>
      <Link target="_blank" to={"/artikel/" + encodeURIComponent(judul)}>
        <FontAwesomeIcon
          className="mr-3"
          size="lg"
          color="#2b2b2b"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Lihat"
          icon={faEye}
        />
      </Link>
      <FontAwesomeIcon
        className="mr-3"
        size="lg"
        color="#2b2b2b"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Edit"
        onClick={() => goEdit(id)}
        icon={faPencilAlt}
      />
      <FontAwesomeIcon
        size="lg"
        color="#2b2b2b"
        data-toggle="tooltip"
        data-placement="bottom"
        onClick={() => goDelete(id)}
        title="Hapus"
        icon={faTrashAlt}
      />
    </div>
  );
};

const ListPost = (props) => {
  const response = useSelector((state) => state.artikel);
  const dispatch = useDispatch();
  // console.log(response);

  const goCreate = () => {
    props.history.push("/ksrt/create");
  };
  const goEdit = (id) => {
    props.history.push(`/ksrt/edit/${id}`);
  };
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const token = localStorage.get("token");
    if (token) {
      dispatch(checkToken(token));
    } else {
      props.history.push("/artmin");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteArtikel(id));
  };
  const { height } = Dimen();

  const [hovId, setHovId] = useState("");
  const [hovTitle, setHovTitle] = useState("");
  return (
    <Container>
      <div className="d-flex justify-content-between mb-2 mt-4">
        <h3>Post</h3>
        <Button onClick={() => goCreate()}> Buat Artikel</Button>
      </div>
      <div
        style={{ overflowY: "scroll", height: height - 170 }}
        className="p-2"
      >
        {response.artikel.message === undefined ? (
          <p>Loading...</p>
        ) : (
          response.artikel.message.map((data, key) => (
            <div
              onMouseEnter={(e) => {
                setHovId(data.id);
                setHovTitle(data.title);
              }}
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
                  <img
                    src={process.env.REACT_APP_URL + data.thumbnail}
                    width="70"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="mb-1 text-truncate d-inline-block title-post-dashboard">
                    {data.title} asdasldkasdlkajsldkjalskjdlkajsdklasdj
                    alskdjalksjdlaj sdjlak dlak sd
                  </span>

                  <p style={{ fontSize: 13, color: "#8c8c8c" }}>
                    Di Publikasi &middot; {ConvTime(data.createdAt)}
                  </p>
                </div>
                <div className="action-post-dashboard">
                  {hovId === data.id ? (
                    <Action
                      goDelete={handleDelete}
                      goEdit={goEdit}
                      id={hovId}
                      judul={hovTitle}
                    />
                  ) : (
                    detail(data.comment)
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default ListPost;
