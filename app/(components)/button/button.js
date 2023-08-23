import Link from "next/link"

export default function Button(props) {
  return (
    <>
    <Link href={props.link} className="hero_btn" style={{border:props.border,color:props.color}}>{props.title}</Link>
    </>
  )
}
