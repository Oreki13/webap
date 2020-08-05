import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcomp = (props) => {
    
    const path = props.location.pathname.split('/')
    console.log(path[2]);
    
    
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          {path[2] !== undefined ? (<Breadcrumb.Item active style={{textTransform : 'capitalize'}}>{path[2]}</Breadcrumb.Item>):null}
      
    </Breadcrumb>
  );
};

export default Breadcomp;
