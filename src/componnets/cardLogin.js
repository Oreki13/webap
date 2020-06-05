import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

export const CardLogin = (props) => {
  return (
    <Fragment>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card no-border shadow p-4" style={{width: '30vw'}}>
          <div className='logo-log'>
            <img src="/img/logo.png" width="50" alt="Logo Web" />
            <h3 className='mt-2'>Login</h3>
          </div>
          <div className='mt-3'>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className='d-flex justify-content-between align-items-center mt-4 mb-3'>
                <div className='create-log'>
                <span>Buat Akun</span>
                </div>
                <div>
                  
              <Button variant="primary" type="submit" onClick={()=>props.history.push('/ksrt')}>
                Submit
              </Button>
</div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
