import React, { useState, useRef, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import localStorage from "local-storage";

import { checkToken } from "../../redux/actions/user";
import { getByIdArtikel, editArtikel } from "../../redux/actions/artikel";

import ImageUploader from "react-images-upload";
import Jodit from "./lite/textEditor";
import Dimen from "../../assets/functions/getDimensions";
import { searchKategori, createKategori } from "../../redux/actions/kategori";

const EditPost = (props) => {
  const { id } = props.match.params;
  const response = useSelector((state) => ({
    user: state.user.validate,
    artikel: state.artikel.byId,
    status: state.artikel,
    search_kategori: state.kategori.listSearch,
  }));
  const dispatch = useDispatch();

  const { width, height } = Dimen();
  const [ewew, setEwew] = useState();

  const [content, setContent] = useState("");
  const [judul, setJudul] = useState("");
  const [label, setLabel] = useState("");
  const [caption, setCaption] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [preview, setPrivew] = useState();
  const [autocomplete, setAutocomplete] = useState(false);
  const [idLabel, setIdLabel] = useState("");
  const [pilihan, setPilihan] = useState(false);
  const wraper = useRef(null);

  useEffect(() => {
    checkUser();
    dispatch(getByIdArtikel(id));
  }, []);

  useEffect(() => {
    if (response.artikel.other_data) {
      setPilihan(response.artikel.other_data.pilihan);
      setContent(response.artikel.post);
    }
  }, [response.artikel]);
  useEffect(() => {
    search();
  }, [label]);

  useEffect(() => {
    document.addEventListener("mousedown", handelMouse);
    return () => {
      document.removeEventListener("mousedown", handelMouse);
    };
  }, []);

  const handelMouse = (event) => {
    const { current: wrap } = wraper;
    if (wrap && !wrap.contains(event.target)) {
      setAutocomplete(false);
    }
  };

  const search = async () => {
    if (label.length > 2) {
      await dispatch(searchKategori(label));
    }
  };

  const setLabels = (id, name) => {
    setLabel(name);
    setIdLabel(id);
    setAutocomplete(false);
  };

  const handeLabel = (e) => {
    setLabel(e);
    if (e.length > 2) {
      setAutocomplete(true);
    } else {
      setAutocomplete(false);
    }
  };

  const createKategoris = async () => {
    const data = {
      name: label,
    };

    // res.message.push(tmp);
    // console.log(res);
    await dispatch(createKategori(data));
    console.log(response);
  };

  const checkUser = async () => {
    const token = localStorage.get("token");
    if (token) {
      dispatch(checkToken(token));
    } else {
      props.history.push("/artmin");
    }
  };

  const dropImage = (picture) => {
    setThumbnail(thumbnail.concat(picture));
    setPrivew(URL.createObjectURL(picture[0]));
  };

  const publish = () => {
    const token = localStorage.get("token");
    if (token) {
      //   const data = {
      //     title: judul,
      //     user_id: response.message.userid,
      //     label: label,
      //     thumbnail: thumbnail[0],
      //     caption_img: caption,
      //     post: content,
      //     };
      const form = new FormData();
      form.set("title", judul);
      // form.set("user_id", response.message.userid);
      form.set("label", idLabel);
      form.set("thumbnail", thumbnail[0]);
      form.set("caption_img", caption);
      form.set("post", content);
      form.set("pilihan", pilihan);
      console.log(judul);

      dispatch(editArtikel(id, form));
      props.history.push("/ksrt");
    }
  };

  return (
    <div className="container-create-post">
      {response.artikel.id ? (
        <>
          <Row>
            <Col sm={9}>
              <Jodit cont={content} setCont={setContent} />
            </Col>
            <Col style={{ height: height - 100, overflowY: "auto" }}>
              <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control
                  // value={response.artikel.title}
                  onBlur={(w) => setJudul(w.target.value)}
                  placeholder={response.artikel.title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Label</Form.Label>
                <div
                  ref={wraper}
                  // onBlur={() => setAutocomplete(false)}
                  className="autocomplete-container"
                  // onFocus={() => setAutocomplete(true)}
                >
                  <Form.Control
                    // value={response.artikel.label}
                    onChange={(w) => handeLabel(w.target.value)}
                    placeholder={response.artikel.kategori.name}
                    value={label.length > 0 ? label : null}
                  />
                  {autocomplete ? (
                    <div className="autocomplete-box">
                      {response.search_kategori.message !== undefined
                        ? response.search_kategori.message.map((data, key) => (
                            <div
                              tabIndex="0"
                              key={key}
                              className="autocomplete-content"
                              onClick={() => setLabels(data.id, data.name)}
                            >
                              <span>{data.name}</span>
                            </div>
                          ))
                        : null}
                      <div className="autocomplete-content">
                        {response.loading_kategori ? (
                          <span>loading</span>
                        ) : (
                          <span
                            className="cursor"
                            onClick={() => createKategoris()}
                          >
                            Buat Baru
                          </span>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Caption Thumbnail</Form.Label>
                <Form.Control
                  // value={response.artikel.caption_img}
                  onBlur={(w) => setCaption(w.target.value)}
                  placeholder={response.artikel.caption_img}
                />
              </Form.Group>
              <Form.Group>
                {/* <Form.File
              onChange={(w) => setThumbnail(w)}
              id="exampleFormControlFile1"
              label="Thumbnail"
            /> */}
                <Form.Label>Thumbnail</Form.Label>
                <img
                  style={{ maxWidth: "17rem" }}
                  src={
                    preview
                      ? preview
                      : process.env.REACT_APP_URL + response.artikel.thumbnail
                  }
                />
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose images"
                  onChange={(w) => dropImage(w)}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onChange={() => setPilihan(!pilihan)}
                  checked={pilihan}
                  label="Jadikan Sebagai Pilihan "
                />
              </Form.Group>
              <Button onClick={() => publish()} variant="primary" block>
                Publish
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default EditPost;
