import React from 'react'
import "./SkillCard.css"
import { BsPatchCheckFill } from 'react-icons/bs'


function SkillCard({data, title}) {
  return (
    <div className='skill__card'>
        <h3>{title}</h3>
        <div className='skill__content'>
            {
                data.map((list, index)=> (
                    <article className='skill__details skill__details__article' key={index}>
                        {/*<BsPatchCheckFill className='skill__icon'/>*/}
                        <div className='skill__cell'>
                            {list.icon}
                            {/*<div><img style={{height: "20px", width: "26px"}} src={list.icon} alt={list.icon} /></div>*/}
                            <div><h4 className='skill__name'>{list.skill}</h4></div>
                        </div>
                    </article>
                ))
            }
        </div>
    </div>
  )
}

export default SkillCard
