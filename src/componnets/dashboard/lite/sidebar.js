import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRandom } from '@fortawesome/free-solid-svg-icons'

const SideBar = (props) => {
    const path = props.location.pathname
    console.log(path);
    
    
    return (
        <SideNav 
                onToggle={(tog) => props.fun(tog)}
            onSelect={(selected) => {
                
                const to = selected
                if (props.location.pathname != to) {
                    props.history.push(to)
                }
                
        
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected={path}>
        <NavItem eventKey="/ksrt">
            <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em',marginTop: '10px' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="/ksrt/post">
            <NavIcon>
            <FontAwesomeIcon icon={faRandom} style={{ fontSize: '1.75em', marginTop: '10px' }} />
            </NavIcon>
            <NavText>
                Post
            </NavText>
            {/* <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem> */}
        </NavItem>
    </SideNav.Nav>
            </SideNav>
    )
}

export default SideBar;