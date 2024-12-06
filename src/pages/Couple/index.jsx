import style from './index.module.css'
import { FiInstagram } from "react-icons/fi";

const Couple = () => {
  return (
        <section className={ `text-center ` } style={{ zIndex:10 }}>
            <div className={ `text-end p-5 ${style.heightConditional} ${ style.borderRadius } ${ style.bgWhiteTrasnparent } text-black ${ style.widthConditional }` }>
                <div className="d-flex flex-row justify-content-end mb-5">
                    <span className='border w-25 d-block border-black'></span>
                </div>

                <h2 className="h1 mb-5" style={{ letterSpacing:'0.3rem' }}>Groom and <br/> Bride</h2>

                <div className='d-flex flex-column mb-2 justify-content-end align-items-end'>
                    <p className='mb-2 fs-4'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button className='d-flex gap-2 rounded align-items-center py-1 px-2'>
                        <FiInstagram className='fs-5'/>
                        instagram
                    </button>
                </div>

                <p className='py-3'>&</p>

                <div className='d-flex flex-column mt-2 justify-content-end align-items-end'>
                    <p className='mb-2 fs-4'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button className='d-flex gap-2 rounded align-items-center py-1 px-2'>
                        <FiInstagram className='fs-5'/>
                        instagram
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Couple
