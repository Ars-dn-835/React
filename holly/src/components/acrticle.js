import React from 'react'
import "../App.css";
export default function Article({children}) {
    return (
        <acrticle>
            {children}
        </acrticle>
    )
}

export function ArticleContent({children, title}){
    return(
        <div>
            {children}
        </div>
    )
}

export function ArticleMedia({children}){
    return(
        <div>
            {children}
        </div>
    )
}