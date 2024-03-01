import { useState } from "react"
import "./styles.css"

export default function RandomColour() {

    const [color, setColor] = useState('rgb(255,00,00)')
    const [isRGB , setIsRGB] = useState(true)

    const changeRGBColor = () => {
        setIsRGB(true);
        let r = Math.floor(Math.random() * 1000) % 255
        let g = Math.floor(Math.random() * 1000) % 255
        let b = Math.floor(Math.random() * 1000) % 255
        let new_color = `rgb(${r},${g},${b})`;
        setColor(new_color)
    }

    const changeHexColor = () => {
        setIsRGB(false);
        let hex_num = Math.floor(Math.random() * 1000000);
        let hex_color = `#${hex_num}`;
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