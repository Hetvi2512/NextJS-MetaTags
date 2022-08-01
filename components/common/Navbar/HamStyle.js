import React from 'react';

function HamStyle(props) {
    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>

            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/style',{key:'1'})}>
            → FASHION
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/style',{key:'2'})}>
            → SNEAKERS
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/style',{key:'3'})}>
            → WATCHES
            </div>
            </div>
        </div>
    </div>
    );
}

export default HamStyle;