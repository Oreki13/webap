import React, { Fragment, createRef } from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import Artikel from '../pages/artikel'

// Component
import NavBar from '../componnets/NavBar'
import Footer from "../componnets/footer";

// Bootstrap
import { Container } from 'react-bootstrap'

// Dummy
import { myObject } from "../dummy/data";


const Wrap = (props) => {
    console.log(myObject);
    const sortData = myObject.sort(function (x, y) {

        return x.visit - y.visit
    });

    const limit = []

    for (let i = sortData.length - 1; i > 2; i--) {

        limit.push(sortData[i])
    }
    const ref = createRef()

    return (
        <Fragment >
            <NavBar {...props} />
            <Container className='mb-4'>
                <Artikel ref={ref} {...props} dataObj={myObject} dataLmt={limit} />
                {/* <Switch>
                    <Route path='/' render={props => <Artikel {...props} dataObj={myObject} dataLmt={limit} />} />
                    <Route path='/artikel/:id' render={props => <Artikel {...props} dataObj={myObject} dataLmt={limit} />} />
                </Switch> */}
            </Container>
            {/* <Footer /> */}
        </Fragment>

    )
}

export default Wrap;