import React from 'react';

function HamSelf(props) {
    return (
       
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/self',{key:'1'})}>
            → BEAUTY & GROOMING
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/self',{key:'2'})}>
            → HEALTH & WELLNESS
            </div>
            </div>
        </div>
    </div>
    );
}

export default HamSelf;