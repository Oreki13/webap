import React, { Fragment, Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../redux/actions/user";
import { Spinner } from "react-bootstrap";
import localStorage from "local-storage";

class CardLogin extends Component {
  state = {
    user: {
      user: "",
      password: "",
    },
    error: false,
    message: "",
  };

  handleForm = (event) => {
    let user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  submit = async () => {
    await this.props.dispatch(login(this.state.user));
    const res = this.props.users;

    if (res.users.error) {
      this.setState({ message: res.users.message });
      this.setState({ error: res.users.error });
    } else {
      this.setState({ error: res.users.error });
      localStorage.set("token", res.users.message.token);
      this.props.history.push("/ksrt");
    }

    // this.setState({ loading: res.isLoading });
    // console.log(res);
  };

  render(props) {
    // console.log(this.state);

    return (
      <Fragment>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card no-border shadow p-4 card-login">
            <div className="logo-log">
              <img src="/img/logo.png" width="50" alt="Logo Web" />
              <h3 className="mt-2">Login</h3>
              {this.state.error ? (
                <p style={{ color: "red" }}>{this.state.message}</p>
              ) : null}
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email atau username</Form.Label>
                  <Form.Control
                    onChange={this.handleForm}
                    type="text"
                    name="user"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={this.handleForm}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
                  <div className="create-log">
                    <span>Buat Akun</span>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.submit}
                      disabled={this.props.loading ? true : false}
                    >
                      {this.props.loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span className={this.props.loading ? "ml-1" : null}>
                        Masuk
                      </span>
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
    loading: state.user.isLoading,
  };
};

export default connect(mapStateToProps)(CardLogin);
// export const CardLogin = (props) => {
//   return (

//   );
// };
