import React from 'react'

export default function props(props) {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0' >
            <div className='overlay fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50'
                onClick={() => { props.handleClose(false) }}>
                {props.children}
            </div>
        </div>

    )
}
