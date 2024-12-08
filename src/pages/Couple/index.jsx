import style from './index.module.css';
import { FiInstagram } from "react-icons/fi";

const Couple = () => {
  return (
        <section style={{ zIndex:10 }}>
            <div className={ `text-end border-2 border border-success p-5 ${style.heightConditional} ${ style.borderRadius } ${ style.bgWhiteTrasnparent } text-black ${ style.widthConditional }` }>
                <div className="d-flex flex-row justify-content-end mb-5">
                    <span className='border w-25 d-block border-success border-2'></span>
                </div>

                <p className="fs-1 mb-4 fw-bold" style={{ letterSpacing:'0.3rem' }}>Groom and <br/> Bride</p>

                <div className='d-flex flex-column mb-2 justify-content-end align-items-end'>
                    <p className='mb-2 fs-4 fw-semibold'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button type='button' className={`btn d-flex flex-row gap-2 rounded justify-items-center align-items-center py-2 px-3 border-0 ${ style.bgButton } text-white`}>
                        <FiInstagram className='fs-5 text-white'/>
                        <p className='mb-1 fw-semibold'>Instagram</p>
                    </button>
                </div>

                <p className='py-3'>&</p>

                <div className='d-flex flex-column mt-2 justify-content-end align-items-end'>
                    <p className='mb-2 fs-4 fw-semibold'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button type='button' className={`btn d-flex flex-row gap-2 rounded justify-items-center align-items-center py-2 px-3 border-0 ${ style.bgButton } text-white`}>
                        <FiInstagram className='fs-5 text-white'/>
                        <p className='mb-1 fw-semibold'>Instagram</p>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Couple
