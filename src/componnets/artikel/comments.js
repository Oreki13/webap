import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const Comment = () => {
  return (
    <Fragment>
      <h3>Komentar</h3>

      <div className="card no-border shadows mb-3 p-3">
        <div className="d-flex">
          <div className="mr-3">
            <img src="/img/fandy2.jpg" className=" rounded" width="60" />
          </div>
          <div>
            <div className="d-flex mb-1">
              <div className="comment-name mr-1">
                <p>Admin</p>
              </div>
              <p className="font-weight-bold">&middot;</p>
              <p className="ml-1 text-black-50 font-weight-light">3 Jam lalu</p>
            </div>
            <div>
              <p>
                Aliqua ea cupidatat excepteur id aute ut est occaecat cillum.
                Duis cupidatat dolor qui voluptate sit nostrud incididunt minim
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
              <p className="ml-1 text-black-50 font-weight-light">3 Jam lalu</p>
            </div>
            <div>
              <p>
                Aliqua ea cupidatat excepteur id aute ut est occaecat cillum.
                Duis cupidatat dolor qui voluptate sit nostrud incididunt
                ullamco velit nulla incididunt aliquip pariatur adipisicing.
                Nisi cupidatat ex elit dolore adipisicing cillum aute labore.
                Fugiat incididunt eiusmod in consequat ex est dolor sunt
                deserunt voluptate voluptate.
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
              <p className="ml-1 text-black-50 font-weight-light">3 Jam lalu</p>
            </div>
            <div>
              <p>
                Aliqua ea cupidatat excepteur id aute ut est occaecat cillum.
                Duis cupidatat dolor qui voluptate sit nostrud incididunt
                ullamco velit nulla incididunt aliquip pariatur adipisicing.
                Nisi cupidatat ex elit dolore adipisicing cillum aute labore.
                Fugiat incididunt eiusmod in consequat ex est dolor sunt
                deserunt voluptate voluptate. Quis minim enim fugiat esse mollit
                sunt labore qui. Qui pariatur tempor irure culpa velit nulla.
                Nostrud tempor duis quis qui.
              </p>
            </div>
            <div className="mt-1">
              <a href="#" style={{ color: "#233567" }}>
                <FontAwesomeIcon icon={faReply} /> Balas
              </a>
            </div>
          </div>
        </div>
      </div>

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
