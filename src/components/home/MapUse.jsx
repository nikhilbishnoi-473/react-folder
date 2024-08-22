import React from 'react'
import { MAP_USE, TEXT_MAP } from '../common/Helper'

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
                    <h1  className='text-black'>{obj.heading}</h1>
                </div>
            ))}

        </div>
    )
}

export default MapUse
