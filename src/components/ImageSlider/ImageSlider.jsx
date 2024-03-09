import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import './ImageSlider.css'

export default function ImageSlider({ url, page = 1, limit = 10 }) {

    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        async function fetchData() {
            if (url) {
                let imageData = await getImages(`${url}?page=${page}&limit=${limit}`)
                setImages(imageData)
            }
        }
        fetchData();
    }, [url])

    async function getImages(url) {
        try {
            const response = await fetch(url);
            const data = await response.json()
            console.log("Data", data);
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    function handlePrevious() {
        setCurrentImage((prevImage) => prevImage === 0 ? images.length - 1 : prevImage - 1)
    }

    function handleNext() {
        setCurrentImage((prevImage) => prevImage === images.length - 1 ? 0 : prevImage + 1)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious} />
                {
                    images && images.length !== 0 ?
                        images.map((img, index) =>
                        // (currentImage == index) && 
                        (<img
                            key={index}
                            className={currentImage === index ? "current-image" : "hide-current-image"}
                            src={img.download_url}></img>)
                        ) : <p>Loading</p>}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
                <span className="circle-indicators">
                    {
                        images && images.length ?
                            images.map((_, index) => <button key={index} className={currentImage === index ? "current-indicator" : "current-indicator inactive-indicator"}></button>) : null
                    }
                </span>
            </div>
        </div>
    )
}

// To change images at next and prev -> Using CSS is much faster becos all images are already loaded to the DOM
//check network tab -> all loaded
// Using short circuiting logic -> lean JSX -> but since new image has to be reloaded to the DOM -> slow transition.
//network tab -> new image to load -> takes about 3ms
