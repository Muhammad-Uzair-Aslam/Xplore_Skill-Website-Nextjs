
import Image from "next/image"
export default function ImgCard(props) {
  return (
    <div className="facilities-col">
    <Image width={150} height={250} src={props.src} alt=""/>
    <h3 className="text-xl font-bold">{props.title}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
    </p>
</div>
  )
}
