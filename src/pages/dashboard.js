import React, { Fragment, useState } from 'react';
import {Switch, Route} from 'react-router-dom';

// Componnent
import Sidebar from '../componnets/sidebar';
import Header from "../componnets/header";
import Breadcom from '../componnets/breadcomp';
import SettingPost from "../componnets/SettingPost";
import UpPost from "../componnets/UpPost";


const Dashboard = (props) => {

    const [toggle, setToggle] = useState(false)
    const [page, setPage] = useState('')

    const onToggled = (tog) => {
        setToggle(tog)
    }

    
    

    
const navWidthCollapsed = 64;
const navWidthExpanded = 280;

  
    return (
        <Fragment>
        
            <Sidebar fun={onToggled} {...props} page={setPage}/>
            <main style={{marginLeft: (toggle ? 240:64), padding: 0}}>
                <Header {...props} />
                <Breadcom {...props}/>
                <Switch>
                    <Route path='/ksrt' exact render={()=> <SettingPost/>}  />
                    {/* <Route path='/1' render={()=> <SettingPost/>}  /> */}
                    <Route path='/ksrt/post' render={()=> <UpPost/>}  />
                </Switch>
           </main>
            </Fragment>
    )
}

export default Dashboard;