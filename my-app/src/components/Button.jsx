import React from 'react'

const Button = () => {
    return (
        <div>
            <br />
            <button onClick={(e) => e.target.style.color = 'red'}>click me!</button>
        </div>
    )
}
export default Button;