import Image from 'next/image'
import Navbar from './(components)/navbar/navbar'
import TextCard from './(components)/textCard/textCard'
import HeadingAndText from './(components)/headingAndText/headingAndText'
import ImgDesc from './(components)/imgDesc/imgDesc'
import ImgCard from './(components)/imgCard/imgCard'
import StudentTestimonial from './(components)/studentTestimonial/studentTestimonial'
import Link from 'next/link'
import Button from './(components)/button/button'
export default function Home() {
  return (
    <>
    <section className="header">
      <Navbar/>
    <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <Button title="Visit Us To Know More" link="#"/>
        </div></section>
        <section className="course">
        <HeadingAndText h1="EXPLORE OUR 60+" h2="MAJOR PROGRAMS"/>
        <div className="row">
          <TextCard title="Undergraduate Programs"/>
          <TextCard title="Graduate Programs"/>
          <TextCard title="Adult Learning & Degree Completion"/>
          </div>
          </section>
          <section className="campus">
            <HeadingAndText h1="TAKE OUR VIRTUAL TOUR"/>
            <div className="row">
            <ImgDesc src="/img/Campus1.png" title="Delhi"/>
            <ImgDesc src="/img/Campus2.png" title="Hyderabad"/>
            <ImgDesc src="/img/Campus3.png" title="Mumbai"/>
            </div>
          </section>
          <section className="facilities">
           <HeadingAndText h1="Our Facilities"/>
           <div className="row">
            <ImgCard src="/img/libary.png" title="Best Library"/>
            <ImgCard src="/img/playground.png" title="Athletics"/>
            <ImgCard src="/img/food.png" title="Tasty and Healthy Food"/>
           </div>
          </section>
          <section className="testimonials">
            <HeadingAndText h1="What Our Students Say"/>
            <div className="row">
              <StudentTestimonial/>
              <StudentTestimonial/>
            </div>
          </section>
          <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button title="Contact Us" link="/contact"/>
    </section>
          </>
  )
}
