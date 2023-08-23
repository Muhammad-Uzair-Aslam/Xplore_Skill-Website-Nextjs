

export default function HeadingAndText(props) {
  return (
    <>
    <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>{props.h1} <br/> {props.h2}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </>
  )
}
