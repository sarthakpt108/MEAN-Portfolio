import React, { useState, useRef, useEffect } from 'react'
import "./Projects.css"
import { sumArray } from '../../helper';
import { projects } from '../../data';
import Card from './Card';

const tabs = [
  {name: "All"},
  {name: "Web Cloud"},
  {name: "Kubernetes"},
  {name: "Web"},
  {name: "Java"}
]


function Projects() {
  const itemsEls = useRef(new Array());
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [displayableProjects, setDisplayableProjects] = useState(projects)

  useEffect(()=> {
    const prevEl = itemsEls.current.filter((_, index)=> index < activeIndex);
    setOffset(
      sumArray(
        prevEl.map(item => item.offsetWidth)
      )
    )
    console.log(activeIndex)
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth)
  }, [activeIndex])

  const setProjects = (category) => {
    if(category === "All"){
      return setDisplayableProjects(projects)
    }
    const pro = projects.filter((item)=> item.category.toLowerCase() === category.toLowerCase())
    setDisplayableProjects(pro)
  }

  return (
    <section id='projects'>
      <div className='section__wrapper projects__container'>
        <div className='section__header center'>
          <h2 className='primary__title'>Projects</h2>
        </div>
        <nav>
          {
            tabs.map((tab, index)=> (
              <button 
                ref={el => itemsEls.current[index] = el} 
                onClick={()=> {
                  setActiveIndex(index)
                  setProjects(tab.name)
                }} 
                key={index}>
                {tab.name}
              </button>
            ))
          }
          <span 
            className='active__indicator' 
            style={{
            left: `${offset}px`,
            width: `${indicatorWidth}px`
          }}></span>
        </nav>

        <div className='card__container'>
          {
            displayableProjects.map((project, index)=> (
              <Card 
                title={project.title}
                image={project.image}
                data={project.data}
                stack={project.stack}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
