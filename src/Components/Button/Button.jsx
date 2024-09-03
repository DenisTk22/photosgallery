import React from "react"
import '../../css/style.css'

function Button({text}) {

    return (
        <button className='buttons__button'>{text}</button>
    )
}

export default Button