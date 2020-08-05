import React, { Fragment, useState, useEffect, createRef } from "react";
import { Switch, Route } from "react-router-dom";
import Dimen from "../assets/functions/getDimensions";
import { useSelector } from "react-redux";
import MetaTags from "react-meta-tags";

// Component

import CardH from "../componnets/artikel/cardHorizontal";
import ForYou from "../componnets/artikel/forYou";
import Label from "../componnets/artikel/label";
import ShowPost from "../componnets/artikel/showPost";
import Comment from "../componnets/artikel/comments";

import { Row, Col } from "react-bootstrap";
import { myObject } from "../dummy/data";

const Artikel = (props) => {
  const response = useSelector((state) => ({
    artikel: state.artikel.artikel,
    filter_visit: state.artikel.filter_visit,
    kategori: state.kategori.listKategori.message,
    loadingArtikel: state.kategori.isLoading,
  }));
  const [link, setLink] = useState(props.match.path);

  const { dataObj, dataLmt } = props;

  const path = props.match.path;
  // console.log(path);
  // console.log(props);

  const test = createRef();

  const { height } = Dimen();
  // console.log(response);
  // const { filter_visit, artikel } = response;
  return (
    <Fragment>
      <Row className="mt-4">
        <Col
          md={8}
          className="get-overflow"
          id="tesz"
          style={{ height: height - 100 }}
        >
          <div className="box">
            {/* {path !== "/" ? null : <CardH {...props} datas={myObject} />}
                    {path !== "/artikel/:id" ? null : <ShowPost {...props} datas={dataObj} />} */}

            <Switch>
              <Route
                ref={test}
                path="/"
                exact
                render={(props) => {
                  return response.artikel.message !== undefined ? (
                    <>
                      <MetaTags>
                        <title>Arfandy Surya</title>
                        <meta
                          name="description"
                          content="Ini adalah website sederhana"
                        />
                        <meta property="og:site_name" content="Arfandy Surya" />
                        <meta name="title" content="Hallo" />
                        <meta
                          property="og:image"
                          content="%PUBLIC_URL%/favicon.ico"
                        />
                      </MetaTags>
                      <CardH {...props} datas={response.artikel.message} />
                    </>
                  ) : (
                    <p>Loading</p>
                  );
                }}
              />
              <Route
                ref={test}
                path="/artikel/:id"
                render={(props) => {
                  return response.artikel.message !== undefined ? (
                    <>
                      <ShowPost {...props} datas={response.artikel.message} />{" "}
                      <Comment />
                    </>
                  ) : (
                    <p>Loading</p>
                  );
                }}
              />
            </Switch>
            {/* {dataObj.map((data, key) => <CardH key={key} datas={data} />)} */}
          </div>
        </Col>
        <Col className="get-overflow" style={{ height: height - 100 }}>
          <div className="mb-3">
            <h3>Buat Kamu</h3>
            <div className="foryu">
              {response.filter_visit.message === undefined ? (
                <p>Loading</p>
              ) : (
                response.filter_visit.message.map((data, key) => (
                  <ForYou key={key} {...props} datas={data} />
                ))
              )}
            </div>
          </div>
          {response.loadingArtikel ? (
            <p>Loading</p>
          ) : (
            <Label data={response.kategori} />
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Artikel;
