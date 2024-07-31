import React, { useState } from 'react'
import "./Card.css"
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";


function Card(props) {
    const [openStackExpandBar, setOpenStackExpandBar] = useState(false)

  return (
    <div className='card'>
        <div className='picture'>
            <img style={{height: "300px", objectFit: 'contain'}} src={props.image} alt={props.title}></img>
        </div>

        <div className='card__details'>
            <div className='card__details__top'>
                <h2 className='title'>{props.title}</h2>
            </div>
            <div className='card__details__middle'>
                    <ul className='description'>
                        {props.data.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            <div className='card__details__bottom'>
                <div className='tech__stack'>
                    {props.stack.map((stack, index) => (
                        <h4 style={{fontWeight: '700'}}>{stack}{index < props.stack.length - 1 && ','} </h4>
                    ))}
                </div>
                <div className='button__container'>
                    <FaGithub size={25}/>
                    <LuExternalLink size={25} style={{cursor: "pointer"}} onClick={()=> window.open(props.data.demoLink, "_blank")}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card

