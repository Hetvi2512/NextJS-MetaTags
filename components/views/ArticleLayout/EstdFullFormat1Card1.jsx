import React from 'react';
import { imgBaseURL } from '../../constants';

const EstdFullFormat1Card1 = (props) => {
    const { cards } = props;
    console.log('cards', cards, props)
    const storyElement = cards['story-elements'];
    if (storyElement) {
        return <div className='a4-p1'>
            {
                storyElement.map((element, index) => (
                    <div key={index}>
                    {element.type === 'text' ?
                        <div key={index} className='Heldane-Text-Regular a4-p1-p1' dangerouslySetInnerHTML={{ __html: element.text }}></div>:
                        element.subtype === 'image-gallery' ? <div className='a4-img'>
                        {
                            element['story-elements'].map((imageData, index) => (

                                <div className='a4-img-1' key={index}>
                                    <img src={`${imgBaseURL}${imageData['image-s3-key']}`}></img>
                                    <div className>
                                    <div className='a4-img-caption' dangerouslySetInnerHTML={{ __html: imageData['title'] }}></div>
                                    <div className='a4-img-caption' dangerouslySetInnerHTML={{ __html: imageData['image-attribution'] }}></div>
                                    </div>
                                    </div>
                            ))
                        }
                    </div> : <div key={index}></div>}
                    </div>))

            }
        </div>;
    }
    else {
        return <div></div>
    }
};

export default EstdFullFormat1Card1;
