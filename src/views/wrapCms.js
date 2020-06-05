import React, { Fragment, createRef } from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import Dashboard from '../pages/dashboard'

// Component
import {CardLogin} from '../componnets/cardLogin';

// Bootstrap
import { Container } from 'react-bootstrap'

// Dummy
import { myObject } from "../dummy/data";


const WrapCms = (props) => {
    const path = props.match.path

    return (
        <Fragment >
            {path === '/artmin' ? <CardLogin {...props}/> : null}
            {path === '/ksrt' ? <Dashboard {...props}/> : null}
            
        </Fragment>

    )
}

export default WrapCms;