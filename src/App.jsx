import './App.css'
import Accordian from './components/Accordian'
import DynamicNavBar from './components/DynamicNavBar/DynamicNavBar'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMore/LoadMore'
import RandomColour from './components/RandomColour'
import StarRating from './components/StarRating'

function App() {

  return (
    <>
      <div className='app__main'>
        {/* <Accordian />
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <RandomColour/>
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <StarRating/>
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <ImageSlider url="https://picsum.photos/v2/list"/>
        <hr style={{ borderTop: '1px solid black' , width : '100vw' } }/>
        <LoadMore/> */}
        <hr style={{ borderTop: '1px solid black' , width : '100vw' }}/>
        <DynamicNavBar/>
      </div>
    </>
  )
}

export default App