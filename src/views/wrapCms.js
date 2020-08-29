import React, { Fragment, createRef, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import localStorage from "local-storage";
import { listArtikel } from "../redux/actions/artikel";
import { checkToken } from "../redux/actions/user";

//Pages
import Dashboard from "../pages/dashboard";

// Component
import CardLogin from "../componnets/auth/cardLogin";
import Toast from "../componnets/dashboard/lite/toast";

// Bootstrap
import { Container } from "react-bootstrap";

// Dummy
import { myObject } from "../dummy/data";

const WrapCms = (props) => {
  const dispatch = useDispatch();
  const path = props.match.path;
  const response = useSelector((state) => ({ validate: state.user.validate }));
  const [toastShow, setToastShow] = useState(false);

  useEffect(() => {
    dispatch(listArtikel());
    checkUser();

    return () => {
      checkUser();
    };
  }, []);

  useEffect(() => {
    if (response.validate.error) {
      setToastShow(true);
      return props.history.push("/artmin");
    } else {
      setToastShow(false);
    }
  }, [response.validate]);

  const checkUser = async () => {
    const token = localStorage.get("token");
    if (token !== null) {
      dispatch(checkToken(token));
    } else {
      props.history.push("/artmin");
    }
  };

  return (
    <Fragment>
      <div>
        <Toast
          param={toastShow}
          setparam={setToastShow}
          message={response.validate.message}
        />
      </div>
      {path === "/artmin" ? <CardLogin {...props} /> : null}
      {path === "/ksrt" ? <Dashboard {...props} /> : null}
      {path === "/setting" ? <Dashboard {...props} /> : null}
    </Fragment>
  );
};

export default WrapCms;
