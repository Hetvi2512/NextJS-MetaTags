import React from 'react';

function HamCulture(props) {
    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/culture',{key:'1'})}>
            → AUTO
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/culture',{key:'2'})}>
            → ENTERTAINMENT
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/culture',{key:'3'})}>
            → GAMING & TECH
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>props.history.push('/culture',{key:'4'})}>
            → LIVING
            </div>


            </div>
        </div>
    </div>
    );
}

export default HamCulture;