import React from 'react'
import { Element } from 'react-scroll'
import './skillcontainer.css'
import photos from './photos.jfif'
import LinearProgress from "@material-ui/core/LinearProgress"

function Skillcontainer() {
    return (
        <Element class="skillcontainer" name="skills">
            <div class="skillcontainer__image">
                <img src={photos} alt="photo" />
            </div>
            <div class="skillcontainer__text">
                <h2>SKILLSET</h2>
                <div class="skillcontainer__skillset">
                    <h5>React</h5>
                    <div class="skillcontainer__slider skillcontainer__slider1">
                        <LinearProgress variant="determinate" value={60} />
                    </div>
                </div>
                <div class="skillcontainer__skillset">
                    <h5>NodeJS</h5>
                    <div class="skillcontainer__slider skillcontainer__slider2">
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                </div>
                <div class="skillcontainer__skillset">
                    <h5>JavaScript</h5>
                    <div class="skillcontainer__slider skillcontainer__slider3">
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                <div class="skillcontainer__skillset">
                    <h5>MongoDB</h5>
                    <div class="skillcontainer__slider skillcontainer__slider4">
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                </div>
                <div class="skillcontainer__skillset">
                    <h5>AWS</h5>
                    <div class="skillcontainer__slider skillcontainer__slider5">
                        <LinearProgress variant="determinate" value={40} />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Skillcontainer
