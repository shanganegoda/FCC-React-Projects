import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({ num = 7}) {

    const stars = [];
    const [hover , setHover] = useState(null);
    const [clicked , setClicked] = useState(0);

    for (let i = 1; i <= num; i++) {
        stars.push(i)
    }

    const handleMouseEnter = (ele) => {
        setHover(ele)
    }

    const handleMouseLeave = () => {
        setHover(clicked)
    }


    const handleClick = (ele) => {
        setClicked(ele)
    }


    return (
        <>
            <div className="wrapper">
                <h1>Star Rating</h1>
                <div className='rating' >
                    {stars.map((ele,index) => (<FaStar
                        key={index}
                        style={{color : ele <= hover ? "orange" : "black"}}
                        onMouseEnter={() => handleMouseEnter(ele)}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => handleClick(ele)}
                    />))}
                    
                    ({clicked})
                </div>
            </div>
        </>
    )
}