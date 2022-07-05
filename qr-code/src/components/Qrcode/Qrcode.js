import React from 'react'
import qrcode from './image-qr-code.png'
import './Qrcode.css'

const Qrcode = () => {
    return (
        <div className='Qrcode'>
            <img src={qrcode} alt='qrcode' />
        </div>
    )
}

export default Qrcode