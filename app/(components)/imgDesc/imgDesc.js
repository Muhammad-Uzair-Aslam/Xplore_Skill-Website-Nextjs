import React from 'react'
import Image from 'next/image'

export default function ImgDesc(props) {
  return (
            <div className="campus-col">
                <Image width={150} height={250} src={props.src} alt=""/>
                <div className="layer">
                    <h3>{props.title}</h3>
                </div>
            </div>
  )
}
