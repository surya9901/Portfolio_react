import React, { useState } from 'react';
import './project.css'

function Project({img,title,desc,link}) {
    const [show, setShow] = useState(false)
    return (
        <a href={link}>
            <div class="project" onMouseEnter={() => setShow(true)} onMouseLeave={()=>setShow(false)}>
                {
                    show ? (
                        <div class="project__content">
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                    ) : (
                        <img src={img} alt=""/>
                )
                }
            </div>
        </a>

    )
}

export default Project
