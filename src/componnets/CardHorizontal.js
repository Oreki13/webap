import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

import Carousel from '../componnets/Carousel'



// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const CardH = (props) => {
    const path = props.match.path

    const { datas } = props
    return (
        <Fragment>
            {path !== "/" ? null : <Carousel />}
            <div className='mt-3'>
                <h3>Artikel</h3>
            </div>
            {datas.map((data, key) => (
                <div className="card mb-3 no-border shadows">
                    <div className='mt-3'>
                        <Link to={'/artikel/' + data.id} >

                            <h5 className="px-3 card-title">{data.title}</h5>
                        </Link>
                        <div className='d-flex justify-content-between bg-e5 px-3 py-2'>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faUser} className='mr-3' />
                                <p>{data.author}</p>
                            </div>
                            <div>
                                <span className='kategori-badge'>{data.label}</span>
                            </div>
                        </div>
                    </div>
                    <div className='body-card'>
                        <div>
                            <p className='mr-2 mb-4'>{data.post.length > 200 ? data.post.substr(0, 200) + '...' : data.post}</p>
                            <div>
                                <FontAwesomeIcon className='mr-3' size='lg' icon={faHeart} color='red' />
                                <FontAwesomeIcon className='mr-3' size='lg' icon={faFacebook} color='blue' />
                                <FontAwesomeIcon className='mr-3' size='lg' icon={faTwitter} color='lightblue' />
                                <FontAwesomeIcon className='mr-3' size='lg' icon={faWhatsapp} color='green' />
                            </div>
                        </div>
                        <div className='text-center'>
                            <img className='rounded img-card' src={data.thumbnail} />
                        </div>

                    </div>
                </div>
            ))}
        </Fragment>

    )
}

export default CardH;