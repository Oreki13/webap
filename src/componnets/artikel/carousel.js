import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

const Carousels = (props) => {
  const { pilihan } = props;
  return (
    <Fragment>
      <div>
        <h3>Topik Pilihan</h3>
      </div>
      <Carousel className="mt-2">
        {pilihan.map((data, key) => {
          return (
            <Carousel.Item>
              <img
                style={{ objectFit: "cover", objectPosition: "center center" }}
                className="coros d-block w-100 rounded"
                src={process.env.REACT_APP_URL + data.thumbnail}
                alt="First slide"
              />
              <Carousel.Caption style={{ right: 0, left: 0 }}>
                <h3>{data.title}</h3>
                <p>{data.caption_img}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

        {/* <Carousel.Item>
          <img
            className="coros d-block w-100 rounded"
            src="/img/1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="coros d-block w-100 rounded"
            src="/img/2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </Fragment>
  );
};

export default Carousels;
