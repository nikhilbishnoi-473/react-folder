import React from 'react'
import { MAP_USE, ROWUSE, TEXT_MAP } from '../common/Helper'

const MapUse = () => {
    return (
        <div className=' min-vh-100'>

            {MAP_USE.map((obj, index) => (
                <div key={index}>
                    <img className='pt-3' src={obj.img} alt={obj.heading} />
                    <h1 className='text-black py-4' >{obj.heading}</h1>
                    <p>{obj.para}</p>
                </div>
            ))}
            {TEXT_MAP.map((obj, index) => (
                <div key={index}>
                    <h1 className='text-black'>{obj.heading}</h1>
                </div>
            ))}
                <div className=' row'>
            {ROWUSE.map((obj, index) => (
                    <div className=' col-6 d-flex justify-content-center' key={index}>
                        <h1>{obj.heading}</h1>
                        <img src={obj.img} alt="image" />
                </div>
            ))}
            </div>

        </div>
    )
}

export default MapUse
