import React from 'react'

export default function Images(props) {
    return (
        <img
        src={props.src}
        className={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        />
    )
}