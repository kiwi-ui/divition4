import { useState } from 'react'
import Navbar from './components/Navbar'
import Salutation from './pages/Salutation'
import Couple from './pages/Couple'
import Schedule from './pages/Schedule'
import Gallery from './pages/Gallery'
import Gift from './pages/Gift'
import Closing from './pages/Closing'
import frame from './assets/frame.webp'
import style from './App.module.css'
import Credits from './pages/Credits'
import Wishes from './pages/Wishes'
import index from './index.module.css'

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => { setIsModalShown((e) => !e) }
  const [activeIndex, setActiveIndex] = useState(0);
  const pagesArray = [
    <Salutation />,
    <Couple />,
    <Schedule />,
    <Wishes />,
    <Gift />,
    <Credits />
  ]
  return (
    <body className={`${index.bgCoverMain} vh-100 px-4`}>
      {/* <img className={`position-absolute top-0 start-0 h-25 ${style.mirror}`} src={frame} alt='frame' />
      <img className="position-absolute top-0 end-0 h-25" src={frame} alt='frame' /> */}

      <div className={`main-content h-100 d-flex justify-content-center align-items-center`}>
           {pagesArray[activeIndex]}
      </div>

      {/* <img className={`position-absolute bottom-0 start-0 h-25 ${ style.rotate180 }`} src={frame} alt='frame' />
      <img className={`position-absolute bottom-0 end-0 h-25 ${style.rotate180} ${style.mirrorY}`} src={frame} alt='frame' /> */}
      <Navbar activeIndex={ activeIndex } setActiveIndex={ setActiveIndex } />
    </body>
  )
}

export default App
