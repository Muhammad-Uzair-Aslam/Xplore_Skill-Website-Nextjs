import Image from 'next/image'
import Header from '../(components)/header/header'
import Paragraph from '../(components)/paragraph/paragraph'
import InputField from '../(components)/inputField/inputField'
import Button from '../(components)/button/button'
import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <Header title="Our Posts"/>
      <section className="blog-content">
        <div className="row">
            <div className="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                <Image width={200} height={300} src="/img/post.png" alt=""/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>

                <div className="comment-box">
                    <h3>Leave a Comment</h3>
                    <form className="comment-form">
                        <InputField placeholder="Enter Name" type="text"/>
                        <InputField placeholder="Enter Email" type="email"/>
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <Button title="Post Comment" link="#" border="1px solid blue" color="blue"/>
                    </form>
                </div>
            </div>

            <div className="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Business Analytics</span>
                    <span>12</span>
                </div>
                <div>
                    <span>Machine Learning</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Computer Science</span>
                    <span>15</span>
                </div>
                <div>
                    <span>Data Analytics</span>
                    <span>22</span>
                </div>
                <div>
                    <span>Full Stack</span>
                    <span>20</span>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
