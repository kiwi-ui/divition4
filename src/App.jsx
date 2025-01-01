import { useRef, useState } from 'react'
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
import MusicPlayer from './components/MusicPlayer'
import * as motion from 'motion/react-client'
import { AnimatePresence } from 'framer-motion'

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
    <Credits />,
    <Closing />
  ]
  const constraintDrag = useRef(null);
  return (
    <body  className={`${ index.bgCoverMain } vh-100 px-4`} >
      <motion.div ref={ constraintDrag }>
        <motion.div
          drag
          dragConstraints={ constraintDrag }
          dragElastic= {0.5}
          >
          <MusicPlayer />
        </motion.div>
      </motion.div>

          <AnimatePresence>
      <motion.div
       initial={false}
       animate={{ scale: 1, opacity: 1 }}
       exit={{ scale: 0, opacity: 0 }}
       className={`main-content h-100 d-flex justify-content-center align-items-center`}>
            {pagesArray[activeIndex]}
      </motion.div>
          </AnimatePresence>
      <Navbar activeIndex={ activeIndex } setActiveIndex={ setActiveIndex } />
    </body>
  )
}

export default App
