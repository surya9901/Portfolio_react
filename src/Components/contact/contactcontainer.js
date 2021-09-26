import React from 'react';
import './contactcontainer.css';
import { Element } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { LinkedIn, Mail } from '@material-ui/icons';

function Contactcontainer() {
    return (
        <Element class="contact" id="contact">
            <h1>Contact</h1>
            <div class="contact__container">
                <p>
                    Email : <span>surya9901@gmail.com</span>
                </p>
                <p>
                    Github Username : <span><a href="https://github.com/surya9901" target="_blank">Gnanasurya SJ</a></span>
                </p>
                <div class="contact__icons">
                    <a href="https://www.linkedin.com/in/gnanasurya-sj-93021628" target="_blank">
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href="mailto:surya9901@gmail.com">
                        <IconButton>
                            <Mail />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contactcontainer
