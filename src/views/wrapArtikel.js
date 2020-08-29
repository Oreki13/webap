import React, { Fragment, createRef, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Pages
import Artikel from "../pages/artikel";

// Component
import NavBar from "../componnets/artikel/lite/navBar";
import Footer from "../componnets/artikel/lite/footer";

// Bootstrap
import { Container } from "react-bootstrap";

// Dummy
import { myObject } from "../dummy/data";

// Action
import {
  listArtikel,
  buatKamu,
  artikelPilihan,
} from "../redux/actions/artikel";
import { listKategori } from "../redux/actions/kategori";

const Wrap = (props) => {
  const dispatch = useDispatch();
  const response = useSelector((state) => ({
    artikel: state.artikel.artikel,
    filter_visit: state.artikel.filter_visit,
  }));
  // console.log(response);

  // const sortData = myObject.sort(function (x, y) {
  //   return x.visit - y.visit;
  // });
  // const limit = [];

  // for (let i = sortData.length - 1; i > 2; i--) {
  //   limit.push(sortData[i]);
  // }
  const ref = createRef();

  useEffect(() => {
    dispatch(listArtikel());
    dispatch(buatKamu());
    dispatch(listKategori());
    dispatch(artikelPilihan());
  }, []);

  useEffect(() => {
    document.querySelector("#tesz").scrollTop = 0;
  });
  // console.log(response);

  return (
    <Fragment>
      <NavBar {...props} />
      <Container ref={ref} className="mb-4">
        <Artikel
          {...props}
          // dataObj={response.artikel.message}
          // dataLmt={response.filter_visit.message}
          // fillVisit={response.filter_visit.message}
        />
        {/* <Switch>
                    <Route path='/' render={props => <Artikel {...props} dataObj={myObject} dataLmt={limit} />} />
                    <Route path='/artikel/:id' render={props => <Artikel {...props} dataObj={myObject} dataLmt={limit} />} />
                </Switch> */}
      </Container>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Wrap;
