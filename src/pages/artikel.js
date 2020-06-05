import React, { Fragment, useState, useRef } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dimen from "../assets/functions/getDimensions";


// Component

import CardH from '../componnets/CardHorizontal'
import ForYou from "../componnets/ForYou";
import Label from "../componnets/label";
import ShowPost from '../componnets/showPost'

import { Row, Col } from 'react-bootstrap'
import { myObject } from '../dummy/data';

const Artikel = (props) => {

    const [link, setLink] = useState(props.match.path)

    const { dataObj, dataLmt } = props

    const path = props.match.path
    // console.log(path);
    // console.log(props);

    const test = useRef(null)

 
    const { height } = Dimen();
    return (
        <Fragment>
            <Row className='mt-4'>
                <Col md={8} className='get-overflow' style={{height: height - 100}}>
                    <div className='box'>

                        {/* {path !== "/" ? null : <CardH {...props} datas={myObject} />}
                    {path !== "/artikel/:id" ? null : <ShowPost {...props} datas={dataObj} />} */}

                        <Switch>
                            <Route path='/' exact render={props => <CardH {...props} datas={myObject} />} />
                            <Route path='/artikel/:id' render={props => <ShowPost {...props} datas={dataObj} />} />
                        </Switch>
                        {/* {dataObj.map((data, key) => <CardH key={key} datas={data} />)} */}

                    </div>
                </Col>
                <Col className='get-overflow' style={{height: height - 100}}>
                    <div className='mb-3'>
                        <h3>Buat Kamu</h3>
                        <div className='foryu'>

                            {dataLmt.map((data, key) => <ForYou key={key} {...props} datas={data} />)}
                        </div>

                    </div>

                    <Label />

                </Col>
            </Row>
        </Fragment>
    )
}

export default Artikel;
