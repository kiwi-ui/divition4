import { MdOutlineAddLocationAlt } from "react-icons/md";
import style from './style.module.css';
import font from '../../fonts.module.css';
import * as motion from "motion/react-client"
const Schedule = () => {
  return (
      <section className={ `text-black d-flex flex-column justify-content-center align-items-center  text-center` } style={{ zIndex:10, height:'95%' }}>
        <motion.div 
          className={ `container overflow-scroll rounded-top-pill rounded-bottom-0 ${ style.bgWhiteTrasnparent } border pt-5 pb-3 px-5 border border-2 border-success shadow` }
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
            }}
        >
          <div className="d-flex flex-column align-items-center mt-5">
            <p className={ `fs-1 ${ font.cinzel } fw-bold` } style={{letterSpacing: '0.3rem'}}>Save the Date</p>
            <p className='border-start border-4 border-success rounded  d-block my-2' style={{writingMode: 'vertical-lr', height:'3.5rem'}}></p>
          </div>
          
          <div className="py-2 mt-3">
            <p className={`mb-2 fs-4 ${font.vidaloka}`}>Akad Nikah</p>
            <div className={` ${font.caudex} fw-semibold`} style={{fontSize:'0.8rem'}}>
              <p className="mb-0">MINGGU, 30 AGUSTUS 2026</p>
              <p className="mb-1">08.00 WIB - 12.00 WIB</p>
            </div>
            <div className={` ${ font.caudex }` } style={{fontSize:'0.8rem'}}>
              <p className="mb-0">Rumah Mempelai Wanita</p>
              <p className="mb-2">Jl. Semangka Jaya RT. 05 RW. 02 Ds. Sruni Kec. Gedangan Kab. Sidoarjo </p>
            </div>
            <button type='button' className={`btn mt-3 ${style.bgButton} position-relative translate-middle-x start-50 d-flex flex-row gap-2 rounded justify-items-center align-items-center py-2 px-3 border-0 bg-success text-white shadow`}>
              <MdOutlineAddLocationAlt />Buka Maps        
            </button>
          </div>

          <div className="py-2 mt-3">
            <p className={`mb-2 fs-4 ${font.vidaloka}`}>Akad Nikah</p>
            <div className={` ${font.caudex} fw-semibold`} style={{fontSize:'0.8rem'}}>
              <p className="mb-0">MINGGU, 30 AGUSTUS 2026</p>
              <p className="mb-1">08.00 WIB - 12.00 WIB</p>
            </div>
            <div className={` ${ font.caudex }` } style={{fontSize:'0.8rem'}}>
              <p className="mb-0">Rumah Mempelai Wanita</p>
              <p className="mb-2">Jl. Semangka Jaya RT. 05 RW. 02 Ds. Sruni Kec. Gedangan Kab. Sidoarjo </p>
            </div>
            <button type='button' className={`btn mt-3 ${style.bgButton} position-relative translate-middle-x start-50 d-flex flex-row gap-2 rounded justify-items-center align-items-center py-2 px-3 border-0 bg-success text-white shadow`}>
              <MdOutlineAddLocationAlt />Buka Maps        
            </button>
          </div>
        </motion.div>
    </section>
  )
}

export default Schedule
