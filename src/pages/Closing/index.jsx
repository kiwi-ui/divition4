import style from './index.module.css';
import font from '../../fonts.module.css';
import * as motion from 'motion/react-client';

const Closing = () => {
  return (
    <section className={ `d-flex align-items-center` } style={{ zIndex:10 }}>
      <motion.div
          className={ `container px-4 border border-success border-2 ${style.bgWhiteTrasnparent} d-flex flex-column justify-content-center text-center h-75 align-items-center gap-4 h-75 shadow py-5 px-3`} style={{borderRadius: '3rem'}}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.9,
              scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
          }}
      >
          <div>
            <p className={`mb-0 ${font.cinzel} fw-semibold`}>Made with love</p>
            <p className={`fs-2 fw-bold ${font.vidaloka}`}>Divition</p>
          </div>

            <div className='px-5'>
              <p className={`mb-1 ${font.cinzel} fw-semibold`}>Background song by:</p>
              <p className={`mb-0 fw-semibold ${font.vidaloka}`}>Lagu Pernikahan Kita - Tiara Andini & Arsy Widianto // Piano cover by EHK Piano ( Hans )</p>
            </div>
      </motion.div>
    </section>
  )
}

export default Closing
