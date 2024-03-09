import './App.css'
import Accordian from './components/Accordian'
import ImageSlider from './components/ImageSlider/ImageSlider'
import RandomColour from './components/RandomColour'
import StarRating from './components/StarRating'

function App() {

  return (
    <>
      <div className='app__main'>
        <Accordian />
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <RandomColour/>
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <StarRating/>
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <ImageSlider url="https://picsum.photos/v2/list"/>
      </div>
    </>
  )
}

export default App
