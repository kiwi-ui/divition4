import style from './index.module.css';
import font from '../../fonts.module.css';
import { FiInstagram } from "react-icons/fi";
import * as motion from "motion/react-client";

const Couple = () => {
  return (
    <section style={{ zIndex:10 }}>
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
            }}
        >
            <div className={ `text-end border-3 border border-success py-5 px-4 ${style.heightConditional} ${ style.borderRadius } ${ style.bgWhiteTrasnparent } text-black ${ style.widthConditional }` }>
                <div className="d-flex flex-row justify-content-end mb-5">
                    <span className='border w-25 d-block border-success border-2'></span>
                </div>

                <h1 className={` ${ font.cinzel } fs-1 mb-4 fw-bold`} style={{ letterSpacing:'0.3rem' }}>Groom and <br/> Bride</h1>

                <div className='d-flex flex-column mb-2 justify-content-end align-items-end'>
                    <p className={` ${ font.vidaloka } mb-2 fs-5 fw-semibold`}>Yusni Anggara, S.T</p>
                    <p className={` ${ font.caudex }` } style={{fontSize: '0.8rem'}}>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button type='button' className={`btn btn-success ${ style.bgButton } d-flex flex-row gap-2 rounded justify-items-center align-items-center py-1 px-2 border-0 text-white`}>
                        <FiInstagram className='fs-5 text-white'/>
                        <p className='mb-1' >Instagram</p>
                    </button>
                </div>

                <p className={` ${ font.vidaloka } fs-1 py-3`}>&</p>

                <div className='d-flex flex-column mt-2 justify-content-end align-items-end'>
                    <p className={` ${ font.vidaloka } mb-2 fs-4 fw-semibold`}>Yusni Anggara, S.T</p>
                    <p className={` ${ font.caudex }` } style={{fontSize: '0.8rem'}} >Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button type='button' className={`btn btn-success ${ style.bgButton } d-flex flex-row gap-2 rounded justify-items-center align-items-center py-1 px-2 border-0 text-white`}>
                        <FiInstagram className='fs-5 text-white'/>
                        <p className='mb-1'>Instagram</p>
                    </button>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Couple
