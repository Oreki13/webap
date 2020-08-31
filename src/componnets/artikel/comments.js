import React, { Fragment, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import GoogleLogin, { useGoogleLogin, GoogleLogout } from "react-google-login";
import timeConverter from "../../assets/functions/convertTime";
import Cookies from "universal-cookie";
import { checkTokenGoogle } from "../../redux/actions/user";
import { comenAdd, comenReply } from "../../redux/actions/artikel";
import { postComment } from "../../redux/actions/comment";

const Comment = () => {
  const [comen, setComen] = useState([]);
  const [user, setUser] = useState();
  const [fieldcom, setFieldcom] = useState("");
  const [typecom, setTypecom] = useState("add");
  const [parent, setParent] = useState("");
  const [replyName, setReplyName] = useState("");

  const dispatch = useDispatch();
  const cookies = new Cookies();

  const response = useSelector((state) => ({
    artikel: state.artikel.byId,
    isLoading: state.artikel.isLoading,
    userGoogle: state.user.usersGoogle,
  }));

  const responseGoogle = (response, st) => {
    console.log(response, st);
    sessionStorage.setItem("token", response.tokenId);
    setUser(response.profileObj);
    cookies.set("tokenId", response.tokenId, {
      path: "/",
      expires: new Date(response.tokenObj.expires_at),
    });
  };

  useEffect(() => {
    const token = cookies.get("tokenId");
    if (token) {
      dispatch(checkTokenGoogle(token));
    }
  }, []);

  const sendComment = () => {
    const token = cookies.get("tokenId");
    const objekNewComment = {
      idPost: response.artikel.id,
      name: user
        ? user.name
        : response.userGoogle
        ? response.userGoogle.name
        : "Anonymouse",
      email: user
        ? user.email
        : response.userGoogle
        ? response.userGoogle.email
        : "Anonymouse",
      comment: fieldcom,
      type: typecom,
      img_profile: user
        ? user.imageUrl
        : response.userGoogle
        ? response.userGoogle.picture
        : "/img/fandy2.jpg",
    };
    const objekReplyComment = {
      parent: parent,
      name: user
        ? user.name
        : response.userGoogle
        ? response.userGoogle.name
        : "Anonymouse",
      email: user
        ? user.email
        : response.userGoogle
        ? response.userGoogle.email
        : "Anonymouse",
      comment: fieldcom,
      type: typecom,
      replyName: replyName,
      img_profile: user
        ? user.imageUrl
        : response.userGoogle
        ? response.userGoogle.picture
        : "/img/fandy2.jpg",
    };
    if (token) {
      if (typecom === "add") {
        setComen([
          ...comen,
          { ...objekNewComment, id: "12312", createdAt: Date.now() },
        ]);
        dispatch(
          comenAdd({
            ...objekNewComment,
            id: "21390",
            createdAt: Date.now(),
            reply: [],
          })
        );
        dispatch(postComment(objekNewComment));
        setFieldcom("");
      } else if (typecom === "reply") {
        setComen([...comen, { ...objekReplyComment, createdAt: Date.now() }]);
        dispatch(
          comenReply({
            ...objekReplyComment,

            createdAt: Date.now(),
          })
        );
        dispatch(postComment(objekReplyComment));
      }
    }
  };

  const replyOn = (id, nameReply) => {
    setTypecom("reply");
    setReplyName(nameReply);
    setParent(id);
  };
  const replyOff = () => {
    setTypecom("add");
    setReplyName("");
    setParent("");
  };
  // const { signIn, loaded } = useGoogleLogin({
  //   clientId:
  //     "1055474686866-6us669a4ljepspkkltrlf4f0b5tategq.apps.googleusercontent.com",
  //   onSuccess: (e) => responseGoogle(e, "onsucces"),
  //   onFailure: (e) => responseGoogle(e, "onfailure"),
  //   onAutoLoadFinished: (e) => responseGoogle(e, "onautoluadfinis"),
  //   responseType: (e) => responseGoogle(e, "respontype"),
  //   isSignedIn: (e) => responseGoogle(e, "isSignid"),
  // });
  console.log(response);
  return (
    <Fragment>
      <div className="d-flex align-items-center">
        <h3>Komentar</h3>

        <p className="ml-2" style={{ color: "#5a5a5ae8" }}>
          (On Progress)
        </p>
      </div>

      {!response.isLoading ? (
        <Fragment>
          {response.artikel.comments !== undefined
            ? response.artikel.comments.map((data, key) => {
                return (
                  <Fragment>
                    <div className="card no-border shadows mb-3 p-3">
                      <div className="d-flex">
                        <div className="mr-3">
                          <img
                            src={
                              data.img_profile
                                ? data.img_profile
                                : "/img/fandy2.jpg"
                            }
                            className=" rounded img-centered"
                            width="60"
                            height="80"
                          />
                        </div>
                        <div>
                          <div className="d-flex mb-1">
                            <div className="comment-name mr-1">
                              <p>{data.name}</p>
                            </div>
                            <p className="font-weight-bold">&middot;</p>
                            <p className="ml-1 text-black-50 font-weight-light">
                              {timeConverter(data.createdAt)}
                            </p>
                          </div>
                          <div>
                            <p>{data.comment}</p>
                          </div>
                          <div
                            className="mt-1"
                            onClick={() => replyOn(data.id, data.name)}
                          >
                            <FontAwesomeIcon icon={faReply} /> Balas
                          </div>
                        </div>
                      </div>
                      {data.reply.map((datas, key) => (
                        <div
                          className="d-flex mt-3"
                          style={{ marginLeft: "5rem" }}
                        >
                          <div className="mr-3">
                            <img
                              src={
                                datas.img_profile
                                  ? datas.img_profile
                                  : "/img/fandy2.jpg"
                              }
                              className="rounded img-centered"
                              width="60"
                              height="80"
                            />
                          </div>
                          <div>
                            <div className="d-flex mb-1">
                              <div className="comment-name mr-1">
                                <p>{datas.name}</p>
                              </div>
                              <p className="font-weight-bold">&middot;</p>
                              {datas.replyName ? (
                                <div className="d-flex ml-1">
                                  <p className="mr-1">Reply To </p>
                                  <div className="comment-name-reply mr-1 d-flex align-items-center">
                                    <p>{datas.replyName}</p>
                                  </div>
                                </div>
                              ) : null}
                              <p className="ml-1 text-black-50 font-weight-light">
                                {timeConverter(datas.createdAt)}
                              </p>
                            </div>
                            <div>
                              <p>{datas.comment}</p>
                            </div>
                            <div
                              onClick={() => replyOn(data.id, datas.name)}
                              className="mt-1"
                            >
                              <FontAwesomeIcon icon={faReply} /> Balas
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fragment>
                );
              })
            : null}
          {/* {comen.map((data, key) => (
            <div className="card no-border shadows mb-3 p-3">
              <div className="d-flex">
                <div className="mr-3">
                  <img
                    src={data.img_profile}
                    className=" rounded img-centered"
                    width="60"
                    height="80"
                  />
                </div>
                <div>
                  <div className="d-flex mb-1">
                    <div className="comment-name mr-1">
                      <p>{data.name}</p>
                    </div>
                    <p className="font-weight-bold">&middot;</p>
                    {data.replyName ? (
                      <div className="d-flex ml-1">
                        <p className="mr-1">Reply To </p>
                        <div className="comment-name-reply mr-1 d-flex align-items-center">
                          <p>{replyName}</p>
                          <div
                            onClick={() => replyOff()}
                            className="ml-2 close-reply"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <p className="ml-1 text-black-50 font-weight-light">
                      {timeConverter(data.createdAt)}
                    </p>
                  </div>
                  <div>
                    <p>{data.comment}</p>
                  </div>
                  <div className="mt-1">
                    <a href="#" style={{ color: "#233567" }}>
                      <FontAwesomeIcon icon={faReply} /> Balas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          {/* <div className="d-flex">
              <div className="mr-3">
                <img src="/img/fandy2.jpg" className=" rounded" width="60" />
              </div>
              <div>
                <div className="d-flex mb-1">
                  <div className="comment-name mr-1">
                    <p>Admin</p>
                  </div>
                  <p className="font-weight-bold">&middot;</p>
                  <p className="ml-1 text-black-50 font-weight-light">
                    3 Jam lalu
                  </p>
                </div>
                <div>
                  <p>
                    Aliqua ea cupidatat excepteur id aute ut est occaecat
                    cillum. Duis cupidatat dolor qui voluptate sit nostrud
                    incididunt minim enim fugiat esse mollit sunt labore qui.
                    Qui pariatur tempor irure culpa velit nulla. Nostrud tempor
                    duis quis qui.
                  </p>
                </div>
                <div className="mt-1">
                  <a href="#" style={{ color: "#233567" }}>
                    <FontAwesomeIcon icon={faReply} /> Balas
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3" style={{ marginLeft: "5rem" }}>
              <div className="mr-3">
                <img src="/img/fandy2.jpg" className=" rounded" width="60" />
              </div>
              <div>
                <div className="d-flex mb-1">
                  <div className="comment-name mr-1">
                    <p>Admin</p>
                  </div>
                  <p className="font-weight-bold">&middot;</p>
                  <p className="ml-1 text-black-50 font-weight-light">
                    3 Jam lalu
                  </p>
                </div>
                <div>
                  <p>
                    Aliqua ea cupidatat excepteur id aute ut est occaecat
                    cillum. Duis cupidatat dolor qui voluptate sit nostrud
                    incididunt ullamco velit nulla incididunt aliquip pariatur
                    adipisicing. Nisi cupidatat ex elit dolore adipisicing
                    cillum aute labore. Fugiat incididunt eiusmod in consequat
                    ex est dolor sunt deserunt voluptate voluptate.
                  </p>
                </div>
                <div className="mt-1">
                  <a href="#" style={{ color: "#233567" }}>
                    <FontAwesomeIcon icon={faReply} /> Balas
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <div className="mr-3">
                <img src="/img/fandy2.jpg" className=" rounded" width="60" />
              </div>
              <div>
                <div className="d-flex mb-1">
                  <div className="comment-name mr-1">
                    <p>Admin</p>
                  </div>
                  <p className="font-weight-bold">&middot;</p>
                  <p className="ml-1 text-black-50 font-weight-light">
                    3 Jam lalu
                  </p>
                </div>
                <div>
                  <p>
                    Aliqua ea cupidatat excepteur id aute ut est occaecat
                    cillum. Duis cupidatat dolor qui voluptate sit nostrud
                    incididunt ullamco velit nulla incididunt aliquip pariatur
                    adipisicing. Nisi cupidatat ex elit dolore adipisicing
                    cillum aute labore. Fugiat incididunt eiusmod in consequat
                    ex est dolor sunt deserunt voluptate voluptate. Quis minim
                    enim fugiat esse mollit sunt labore qui. Qui pariatur tempor
                    irure culpa velit nulla. Nostrud tempor duis quis qui.
                  </p>
                </div>
                <div className="mt-1">
                  <a href="#" style={{ color: "#233567" }}>
                    <FontAwesomeIcon icon={faReply} /> Balas
                  </a>
                </div>
              </div>
            </div> */}
        </Fragment>
      ) : (
        <p>Loading</p>
      )}
      <div className="card no-border shadows mb-3 p-3">
        <div className="d-flex ">
          <div className="mr-3">
            <img
              src={
                user
                  ? user.imageUrl
                  : response.userGoogle
                  ? response.userGoogle.picture
                  : "/img/fandy2.jpg"
              }
              className="rounded img-centered"
              width="60"
              height="80"
            />
          </div>
          <div>
            <div className="d-flex mb-1">
              <div className="comment-name mr-1">
                <p>
                  {user
                    ? user.name
                    : response.userGoogle
                    ? response.userGoogle.name
                    : "Anonymouse"}
                </p>
              </div>
              {replyName ? <p className="font-weight-bold">&middot;</p> : null}
              {replyName ? (
                <div className="d-flex ml-1">
                  <p className="mr-1">Reply To </p>
                  <div className="comment-name-reply mr-1 d-flex align-items-center">
                    <p>{replyName}</p>
                    <div
                      onClick={() => replyOff()}
                      className="ml-2 close-reply"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* <p className="ml-1 text-black-50 font-weight-light">3 Jam lalu</p> */}
            </div>
            <div className="width-field-comment">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  onChange={(e) => setFieldcom(e.target.value)}
                  as="textarea"
                  value={fieldcom}
                  rows="3"
                  cols="1"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="text-right">
          {user ? (
            <Button onClick={() => sendComment()}>Comment</Button>
          ) : response.userGoogle ? (
            <Button onClick={() => sendComment()}>Comment</Button>
          ) : (
            <GoogleLogin
              clientId="1055474686866-6us669a4ljepspkkltrlf4f0b5tategq.apps.googleusercontent.com"
              onSuccess={(e) => responseGoogle(e, "onsuccess")}
              onFailure={(e) => responseGoogle(e, "onfailur")}
              cookiePolicy={"single_host_origin"}
              responseType="code,token"
            />
          )}
        </div>
        {/* <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nama Panggilan</Form.Label>
            <Form.Control type="text" placeholder="santoso" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Komentar anda</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </div>
    </Fragment>
  );
};

export default Comment;
