import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import GoogleLogin, { useGoogleLogin, GoogleLogout } from "react-google-login";
import timeConverter from "../../assets/functions/convertTime";

const Comment = () => {
  const [comen, setComen] = useState(false);
  const response = useSelector((state) => ({
    artikel: state.artikel.byId,
    isLoading: state.artikel.isLoading,
  }));
  const responseGoogle = (response, st) => {
    console.log(response, st);
  };
  const { signIn, loaded } = useGoogleLogin({
    clientId:
      "1055474686866-6us669a4ljepspkkltrlf4f0b5tategq.apps.googleusercontent.com",
    onSuccess: (e) => responseGoogle(e, "onsucces"),
    onFailure: (e) => responseGoogle(e, "onfailure"),
    onAutoLoadFinished: (e) => responseGoogle(e, "onautoluadfinis"),
    responseType: (e) => responseGoogle(e, "respontype"),
    isSignedIn: (e) => responseGoogle(e, "isSignid"),
  });
  console.log(sessionStorage.getItem("userData"));
  return (
    <Fragment>
      <div className="d-flex align-items-center">
        <h3>Komentar</h3>
        <GoogleLogin
          clientId="1055474686866-6us669a4ljepspkkltrlf4f0b5tategq.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={(e) => responseGoogle(e, "onsuccess")}
          onFailure={(e) => responseGoogle(e, "onfailur")}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        />
        <GoogleLogout
          clientId="1055474686866-6us669a4ljepspkkltrlf4f0b5tategq.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={(e) => responseGoogle(e, "onsuccess")}
          onFailure={(e) => responseGoogle(e, "onfailur")}
        />

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
                            src="/img/fandy2.jpg"
                            className=" rounded"
                            width="60"
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
                          <div className="mt-1">
                            <a href="#" style={{ color: "#233567" }}>
                              <FontAwesomeIcon icon={faReply} /> Balas
                            </a>
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
                              src="/img/fandy2.jpg"
                              className=" rounded"
                              width="60"
                            />
                          </div>
                          <div>
                            <div className="d-flex mb-1">
                              <div className="comment-name mr-1">
                                <p>{datas.name}</p>
                              </div>
                              <p className="font-weight-bold">&middot;</p>
                              <p className="ml-1 text-black-50 font-weight-light">
                                {timeConverter(datas.createdAt)}
                              </p>
                            </div>
                            <div>
                              <p>{datas.comment}</p>
                            </div>
                            <div className="mt-1">
                              <a href="#" style={{ color: "#233567" }}>
                                <FontAwesomeIcon icon={faReply} /> Balas
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fragment>
                );
              })
            : null}
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
        <Form>
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
        </Form>
      </div>
    </Fragment>
  );
};

export default Comment;
