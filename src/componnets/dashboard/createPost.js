import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import ReactAutocomplete from "react-autocomplete";

import { useDispatch, useSelector } from "react-redux";
import localStorage from "local-storage";

import { checkToken } from "../../redux/actions/user";
import { publishArtikel } from "../../redux/actions/artikel";
import { searchKategori, createKategori } from "../../redux/actions/kategori";

import ImageUploader from "react-images-upload";
import Jodit from "./lite/textEditor";
import Dimen from "../../assets/functions/getDimensions";

const CreatePost = (props) => {
  const response = useSelector((state) => ({
    valid_user: state.user.validate.message,
    search_kategori: state.kategori.listSearch,
    loading_kategori: state.kategori.isLoading,
  }));
  const dispatch = useDispatch();
  const { height, width } = Dimen();

  const [content, setContent] = useState("");
  const [judul, setJudul] = useState("");
  const [label, setLabel] = useState("");
  const [caption, setCaption] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [preview, setPrivew] = useState();
  const [value, setValue] = useState();
  const [autocomplete, setAutocomplete] = useState(false);
  const [idLabel, setIdLabel] = useState("");
  const [pilihan, setPilihan] = useState(false);
  const wraper = useRef(null);

  useEffect(() => {
    checkUser();
  }, []);

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
      form.set("user_id", response.valid_user.userid);
      form.set("label", idLabel);
      form.set("thumbnail", thumbnail[0]);
      form.set("caption_img", caption);
      form.set("post", content);
      form.set("pilihan", pilihan);

      dispatch(publishArtikel(form));
      props.history.push("/ksrt");
    }
  };
  console.log(pilihan);
  return (
    <div className="container-create-post">
      <Row>
        <Col sm={9}>
          <Jodit cont={content} setCont={setContent} />
        </Col>
        <Col style={{ height: height - 90, overflowY: "auto" }}>
          <Form.Group>
            <Form.Label>Judul</Form.Label>
            <Form.Control
              onBlur={(w) => setJudul(w.target.value)}
              placeholder="Judul Post"
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
                list={<option>asd</option>}
                onChange={(w) => handeLabel(w.target.value)}
                placeholder="Label Post"
                value={label.length > 0 ? label : null}
              />
              {autocomplete ? (
                <div className="autocomplete-box">
                  {response.search_kategori.message !== undefined
                    ? response.search_kategori.message.map((data, key) => (
                        <div key={key} className="autocomplete-content">
                          <span onClick={() => setLabels(data.id, data.name)}>
                            {data.name}
                          </span>
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
                  {/* <div className="autocomplete-content">
                  <span>hello3</span>
                </div> */}
                </div>
              ) : null}
            </div>
            {/* <ReactAutocomplete
              items={[
                { id: "foo", label: "foo" },
                { id: "bar", label: "bar" },
                { id: "baz", label: "baz" },
              ]}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={(item) => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent",
                  }}
                >
                  {item.label}
                </div>
              )}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSelect={(value) => setValue(value)}
            /> */}
          </Form.Group>

          <Form.Group>
            <Form.Label>Caption Thumbnail</Form.Label>
            <Form.Control
              onBlur={(w) => setCaption(w.target.value)}
              placeholder="Keterangan"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Thumbnail</Form.Label>
            {/* <Form.File
              onChange={(w) =>
                console.log(URL.createObjectURL(w.target.files[0]))
              }
              id="exampleFormControlFile1"
              label="Thumbnail"
            /> */}
            <img src={preview} style={{ maxWidth: "19rem" }} />
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={(w) => dropImage(w)}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              withPreview={false}
              singleImage={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={(e) => setPilihan(!pilihan)}
              label="Jadikan Sebagai Pilihan "
              checked={pilihan ? true : false}
            />
          </Form.Group>
          <Button onClick={() => publish()} variant="primary" block>
            Publish
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreatePost;
