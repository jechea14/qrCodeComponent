import React from 'react'
import Main from '../Main/Main'
import Qrcode from '../Qrcode/Qrcode'
import './QrComponent.css'

const QrComponent = () => {
    return (
        <div className='QrComponent'>
            <Qrcode />
            <Main />
        </div>
    )
}

export default QrComponent