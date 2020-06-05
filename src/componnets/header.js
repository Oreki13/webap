import React from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className='text-header'>
                <FontAwesomeIcon icon={faUser} />
                <span className='ml-2'>Arfandy</span>
            </div>
            <div className='text-header'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className='ml-2'>LogOut</span>
            </div>
        </div>
    )
}
export default Header;