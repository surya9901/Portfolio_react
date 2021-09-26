import React from 'react'
import {Element} from 'react-scroll';
import Topcontent from '../top_content/Topcontent';
import './topcontainer.css';

function Topcontainer() {
    return (
        <Element name="about" class="topcontainer">
            <Topcontent/>
        </Element>
    )
}

export default Topcontainer
