import { useState } from "react"
import "./styles.css"

export default function RandomColour() {

    const [color, setColor] = useState('rgb(255,00,00)')
    const [isRGB , setIsRGB] = useState(true)

    const changeRGBColor = () => {
        setIsRGB(true);
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let new_color = `rgb(${r},${g},${b})`;
        setColor(new_color)
    }

    const changeHexColor = () => {
        setIsRGB(false);
        const hex_arr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let hex_color = "#"

        for(let i =0 ; i<6 ; i++) {
            hex_color += hex_arr[Math.floor(Math.random() * hex_arr.length)]
        }
        setColor(hex_color)
    }

    return (
        <>
        <div className="wrapper">
            <h1>Random Color</h1>
            <div className="buttons">
                <button onClick={changeRGBColor}>Generate RGB Color</button>
                <button onClick={changeHexColor}>Generate HEX Color</button>
                <button onClick={isRGB ? () => changeRGBColor() : () => changeHexColor()}>Generate Random Color</button>
            </div>

            <div className="box" style={{ background: color }}>{isRGB ? `RGB ${color.substring(3,color.length)}` : color}</div>
        </div>
        </>
    )

}