import React from 'react';

function HamCommunity(props) {
    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={() => props.history.push('/community', { key: '1' })}>
                    → BUSINESS
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={() => props.history.push('/community', { key: '2' })}>
                    → CONSCIOUS LIVING
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={() => props.history.push('/community', { key: '3' })}>
                    → IDENTITY
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={() => props.history.push('/community', { key: '4' })}>
                    → VIEWPOINT
                </div>
            </div>
        </div>
    </div>
    );
}

export default HamCommunity;