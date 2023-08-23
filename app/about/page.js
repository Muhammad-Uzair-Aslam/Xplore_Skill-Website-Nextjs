import Button from '../(components)/button/button'
import Header from '../(components)/header/header'
import Image from 'next/image'
export default function About() {
  return (
    <div>
      <Header title="About Us"/>
      <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Button title="Explore Now" link="#" border="1px solid blue" color="blue"/>
            </div>
            <div className="about-col">
                <Image width={200} height={300} src="/img/about.png" alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
}
