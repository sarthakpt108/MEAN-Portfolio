import React from 'react'
import "./Contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { LiaLinkedin } from 'react-icons/lia'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
        <div className='section__wrapper contact__container'>
          <div className='section__header'>
            <h2 className='primary__title'>Contact Me</h2>
            My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </div>
          <div className='contact__group'>
            <div className='contact__options'>
              <article className='contact__option'>
                <MdOutlineEmail className='contact__icon'/>
                <h3>Email</h3>
                <h5>sr555161@dal.ca</h5>
                <a href='mailto:sr555161@dal.ca' target='_blank' className='btn'>Send a message</a>
              </article>
              <article className='contact__option'>
                <LiaLinkedin className='contact__icon'/>
                <h3>Linkedin</h3>
                <h5>Sarthak Patel</h5>
                <a href='https://www.linkedin.com/in/sarthak-patel-259331188/' target='_blank' className='btn'>Connect on LinkedIn</a>
              </article>
              <article className='contact__option'>
                <BsWhatsapp className='contact__icon'/>
                <h3>WhatsApp</h3>
                <h5>+1 (782)-(882)-(3631)</h5>
              </article>
            </div>

            <form>
              <input type="text" name="name" placeholder='Your full name' required></input>
              <input type="email" name="email" placeholder='Your Email' required></input>
              <textarea name="message" rows={7} placeholder='Your Message'/>
              <button type="submit" className='btn btn__primary'>Send Message</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact

