import React, { useEffect, useRef, useState } from 'react';
import "./Services.css";
import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { basil, prama, vedity } from '../../images';

function Services() {
  const [pramaReadMore, setPramaReadMore] = useState(false);
  const [vedityReadMore, setVedityReadMore] = useState(false);
  const [basilRootReadMore, setBasilRootReadMore] = useState(false);

  function pramaReadMoreOnClick() {
    setPramaReadMore(prev => !prev);
  }

  const vedityReadMoreOnClick = ()=> {
    setVedityReadMore(!vedityReadMore);
  }

  const basilRootReadMoreOnClick = ()=> {
    setBasilRootReadMore(!basilRootReadMore);
  }

  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = container.current;
    gsap.fromTo('.service__head', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: el,
      }
    });

    gsap.fromTo(".service", {
      y: -50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "-100% bottom",
        end: "bottom 20%",
        scrub: true
      }
    });
  }, []);

  return (
    <section id='experience'>
      <div className='section__wrapper services__wrapper'>
        <div className='section__header center'>
          <h2 className='primary__title'>Experience</h2>
          <p className='text__muted description'>
            I have 1.8 years of software development experience in Angular, DevOps and AWS, React, Java Spring Boot and REST APIs.
          </p>
        </div>

        <div className='services__group'>
          <article className='service' style={{ "--color-primary": "var(--color-success)" }}>
            <div className='service__top'>
              <div className='icon__container'>
                <img src={prama} style={{ borderRadius: '50px' }} alt="prama" />
              </div>
                <h3 className='title'>Prama</h3>
                <div className='experience__position'>
                  <h5>Software Engineer | January 2024 - Present</h5>
                </div>
            </div>
            <div className={`service__middle ${pramaReadMore ? 'expanded' : ''}`}>
              <ul className='text__muted description'>
                <li>Demonstrated <mark>full-stack development</mark> expertise across multiple projects. Provided on-call support and API modifications for clients in India and the US.</li>
                <li>Contributed to the development of the Asset Management System (AMS) for the US-based client Technologent, involved <mark>designing system & database</mark> from scratch.</li>
                <li>Built and integrated RESTful APIs using <mark>Java, Hibernate ORM, and Amazon DocumentDB</mark>, with the frontend developed in <mark>Angular, RxJS, and Ng Bootstrap.</mark></li>
                <li>Created reusable and dynamic Angular data tables and wrote <mark>MongoDB aggregation queries</mark>, resulting in faster development times and a 25% improvement in data retrieval performance.</li>
                <li>Contributed to the development of <mark>CI/CD pipeline</mark> using Microsoft Azure DevOps, Docker, and AWS ECS Fargate & ECR to achieve a 30% reduction in deployment time.</li>
                <li>Refactored the code by consolidating repeated logic from various files into a single base component, reducing code duplication by 40%.</li>
              </ul>
            </div>
            <div className='service__bottom'>
              <button className='btn btn__primary' type='button' onClick={pramaReadMoreOnClick}>{pramaReadMore ? 'Collapse' : 'Read More'}</button>
            </div>
          </article>

          <article className='service' style={{ "--color-primary": "#EE4B2B" }}>
            <div className='service__top'>
              <div className='icon__container'>
                <img src={vedity} style={{ borderRadius: '50px' }} alt="vedity" />
              </div>
                <h3 className='title'>Vedity Software Private Limited</h3>
                <div className='experience__position'>
                  <h5>Associate Software Developer | September 2021 - August 2022</h5>
                </div>
            </div>
            <div className={`service__middle ${vedityReadMore ? 'expanded' : ''}`}>
              <ul className='text__muted description'>
                <li>Collaborated in a four member team for the development of a HR portal using <mark>React and Java Spring Boot.</mark></li>
                <li>Designed <mark>Restful APIs</mark> using Java Spring Boot, optimizing performance through <mark>API caching</mark> with the help of <mark>Redis</mark>, which resulted in a 25% reduction in
                response times and a 30% decrease in server load.</li>
                <li>Enhanced the company’s HR portal by implementing a timesheet module, increasing employee time tracking accuracy by 15%.</li>
                <li>Transitioned the leave request process from manual email submissions to an automated leave management module, leading to approximately
                40% reduction in processing time.</li>
              </ul>
            </div>
            <div className='service__bottom'>
              <button className='btn btn__primary' type='button' onClick={vedityReadMoreOnClick}>{vedityReadMore ? 'Collapse' : 'Read More'}</button>
            </div>
          </article>

          <article className='service' style={{ "--color-primary": "var(--color-blueviolet)" }}>
            <div className='service__top'>
              <div className='icon__container'>
                <img src={basil} style={{ borderRadius: '50px' }} alt="basil" />
              </div>
                <h3 className='title'>Basil root Private Limited</h3>
                <div className='experience__position'>
                  <h5>Software Developer Intern | September 2020 - October 2020</h5>
                </div>
              
            </div>
            <div className={`service__middle ${basilRootReadMore ? 'expanded' : ''}`}>
              <ul className='text__muted description'>
                <li>Worked as software development intern in a team environment to design, develop and maintain web applications using
                React JS.</li>
                <li>Collaborated effectively with developers, UI/UX designers, and project managers to meet project deadlines, ensuring
                smooth communication and workflow throughout the development process.</li>
                <li>Actively participating in code reviews, debugging, problem-solving sessions, working in agile development and using JIRA
                for task tracking gave me the outlook of the corporate world.</li>
              </ul>
            </div>
            <div className='service__bottom'>
              <button className='btn btn__primary' type='button' onClick={basilRootReadMoreOnClick}>{basilRootReadMore ? 'Collapse' : 'Read More'}</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
