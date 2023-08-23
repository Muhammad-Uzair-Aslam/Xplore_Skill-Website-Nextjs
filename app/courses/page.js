
import Header from '../(components)/header/header'
import ImgCard from '../(components)/imgCard/imgCard'
import TextCard from '../(components)/textCard/textCard'

export default function Courses() {
  return (
    <div>
      <Header title="Our Courses"/>
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
        <TextCard title="Undergraduate Programs"/>
          <TextCard title="Graduate Programs"/>
          <TextCard title="Adult Learning & Degree Completion"/>
          
          </div>
          </section>
          <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
        <ImgCard src="/img/course1.png" title="Web Development"/>
            <ImgCard src="/img/course2.png" title="Artificial intelligence"/>
            <ImgCard src="/img/course3.png" title="Data Science"/>
            
          </div>
          </section>
    </div>
  )
}
