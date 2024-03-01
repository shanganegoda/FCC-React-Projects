import { useEffect, useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordian() {

    const [isMultiSelect , setIsMultiSelect] = useState(false);

    const [selectedId, setSelectedId] = useState(() => {
        const savedId = localStorage.getItem('savedId')
        if (savedId) return JSON.parse(localStorage.getItem('savedId'));
        return null;
    });

    const [multipleSelected , setMultipleSelected] = useState([]);

    useEffect(() => {
        localStorage.setItem('savedId', JSON.stringify(selectedId))
    }, [selectedId])

    const handleSingleSelection = (currentId) => {
        setMultipleSelected([])
        setSelectedId(selectedId === currentId ? null : currentId)
    }

    const handleMultipleSelection = (currentId) => {
        setSelectedId(null)
        localStorage.setItem('savedId', JSON.stringify(null))
        if(multipleSelected.includes(currentId)){
            setMultipleSelected((currentIds) => {
                let temp_arr = currentIds.filter(ele => ele !== currentId);
                console.log(temp_arr);
                return temp_arr;
            })
            return;
        }
        setMultipleSelected((currentIds) => {
            let temp = [...currentIds , currentId]
            return temp;
        })
    }

    return (
        <>
        
        <div className="wrapper">
            <button onClick={() => setIsMultiSelect(!isMultiSelect)} className="button">Enable {isMultiSelect ? "Single Select" : "Multi Select"}</button>
            <div className="accordian">
                {data && data.length > 0 ? data.map(item => (
                    <div key={item.id} className="data__item">
                        <div onClick={isMultiSelect ? () => handleMultipleSelection(item.id) : () => handleSingleSelection(item.id)} className="item__question">
                            {item.question}
                            <span>+</span>
                        </div>
                        {isMultiSelect ? multipleSelected.includes(item.id) && <div className="item__answer">{item.answer}</div> : selectedId === item.id &&
                            <div className="item__answer">{item.answer}</div>}
                    </div>
                )) : "No Data Found"}
            </div>
        </div>
        </>
    )
}
