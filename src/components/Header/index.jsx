import React, {useRef} from 'react'
import "./Header.css"
import { profile1 } from '../../images'
import Facts from "./Facts"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

function Header() {

  const downloadCV = (e)=> {
    e.preventDefault();
    //window.location.href = "https://drive.google.com/file/d/1JXdP1L-j5RO1Qfol23gROtBEQwOK_Xli/view?usp=sharing";
    window.open("https://drive.google.com/file/d/1JXdP1L-j5RO1Qfol23gROtBEQwOK_Xli/view?usp=sharing", "_blank")
  } 
  const container = useRef(null)

  gsap.registerPlugin(useGSAP)

  useGSAP(()=> {
    gsap.fromTo(".profile__photo__container", {
      scale: .5,
      duration: 1,
      opacity: 0.5
    },
  {
    scale: 1,
    duration: 1,
    ease: "sine.in",
    opacity: 1,
  })

  gsap.from(".intro__text", {
    fontSize: 100,
    duration: 1,
    delay: 1,
    ease: "sine.in"
  })

  const timeline = gsap.timeline();
  timeline.from(".header__info__top", {
    opacity: 0,
  })
  .from(".header__title", {
    opacity: 0,
    y: -30,
  })
  .from(".header__description", {
    opacity: 0,
  })
  .from(".btn", {
    x: -40,
    opacity: 0,
    stagger:.5
  })
  }, {scope: container})
  return (
    <header id='header' className='blur-effect'>
      <div className='section__wrapper header__container'>
        <div className='column intro__container blur-effect'>
          <div className='header__info'>
            <div className='header__info__middle'>
              <h1 className='primary__title header__title' style={{fontFamily: "Roboto Slab"}}>I love to Code and Upscale myself.</h1>
              <p className='header__description'>
                Hi, I am Sarthak Patel. I am a software developer with 1.8 years of experience in web development and cloud technologies. I am curious, highly adaptable and quick learner with strong problem solving and communication skills.
              </p>
            </div>
            {/*<Facts />*/}
            <div className='header__info_bottom'>
              <button className='btn' onClick={downloadCV}>Download CV</button>
              <a href="mailto:sarthak3136@gmail.com" className='btn'>Email me</a>
            </div>
          </div>
        </div>
        <div className='column profile_wrapper'>
          <div className='profile__photo__container'>
            <img src={profile1} className='profile__photo' alt=""></img>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
