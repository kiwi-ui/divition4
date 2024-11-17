import style from './index.module.css'
import { FiInstagram } from "react-icons/fi";

const Couple = () => {
  return (
        <section className={ `text-white  d-flex flex-column justify-content-between align-items-center text-center` }>
            <div className={ `container h-750 text-end bg-danger border py-4 px-4 mx-5 ${ style.borderRadius } py-5 ` }>
                <div className="d-flex flex-row justify-content-end mb-5">
                    <span className='border w-25 d-block'></span>
                </div>
                <h2 className="h1 mb-5" style={{letterSpacing:'0.3rem'}}>Groom and <br/> Bride</h2>

                <div className='d-flex flex-column mb-2 justify-content-end align-items-end'>
                    <p className='mb-2 fs-4'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button className='d-flex gap-2 rounded align-items-center py-2 px-3'>
                        <FiInstagram className='fs-2'/>
                        instagram
                    </button>
                </div>

                <p className='py-3'>and</p>

                <div className='d-flex flex-column mt-2 justify-content-end align-items-end'>
                    <p className='mb-2 fs-4'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button className='d-flex gap-2 rounded align-items-center py-2 px-3'>
                        <FiInstagram className='fs-2'/>
                        instagram
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Couple
