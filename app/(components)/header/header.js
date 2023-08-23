import Navbar from "../navbar/navbar";

export default function Header(props) {
  return (
    <section className="Sub-header">
        <Navbar/>
        <h1>{props.title}</h1>
    </section>
  )
}
