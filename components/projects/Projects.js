import React from 'react'

const Projects = () => {
    return (
        <div>
            <h2 className="m-8 text-fourth font-extrabold text-3xl tracking-wider">PROJECTS</h2>
            <div className="ml-24 mr-24 mb-4 p-11 flex justify-center items-center flex-col  bg-first rounded-xl">
                <img src="/img/foodies.svg"/>
                <a className="m-6 text-2xl text-fourth" href="https://foodies-b9b87.web.app/" alt="" target="_blank" rel="noreferrer noopener">Foodies</a>
                <p className=" text-2xl text-fourth">Designed and Developed the Website about food and calories.</p><br></br>
                <p className=" text-2xl text-fourth">Features implemented:- </p>
                <ul className="list-disc ml-4 mt-4 space-y-4 text-2xl text-fourth">
                    <li>
                    Implemented adaptive way to make responsive website with different view
                    </li>
                    <li>
                    Built with reactjs and using and Food recipe API provided by edamam.com
                    </li>
                </ul>


            </div>
            
        </div>
    )
}

export default Projects
