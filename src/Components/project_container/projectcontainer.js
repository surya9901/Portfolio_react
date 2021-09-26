import React from 'react';
import { Element } from 'react-scroll'
import Project from '../project/project';
import './projectcontainer.css'

function Projectcontainer() {
    const projects = [
        {
            img: "#",
            title: "demo1",
            desc: "lorem",
            link: "www.google.com"
        },
        {
            img: "#",
            title: "demo1",
            desc: "lorem",
            link: "www.google.com"
        },
        {
            img: "#",
            title: "demo1",
            desc: "lorem",
            link: "www.google.com"
        },
        {
            img: "#",
            title: "demo1",
            desc: "lorem",
            link: "www.google.com"
        },
        {
            img: "#",
            title: "demo1",
            desc: "lorem",
            link: "www.google.com"
        },
        {
            img: "#",
            title: "demo1",
            desc: "lorem",
            link: "www.google.com"
        }
    ]
    return (
        <Element class="projectContainer" id="project">
            <h1>Projects</h1>
            <p>
                Here are some projects
            </p>
            <div class="projectContainer__projects">
                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
                        )
                    })
                }
            </div>
        </Element>
    )
}

export default Projectcontainer
