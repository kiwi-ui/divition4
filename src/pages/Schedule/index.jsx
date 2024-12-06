import { MdOutlineAddLocationAlt } from "react-icons/md";
import style from './style.module.css';

const Schedule = () => {
  return (
         <section className={ `text-black d-flex flex-column justify-content-center align-items-center  text-center` } style={{ zIndex:10, height:'95%' }}>
            <div className={ `container overflow-scroll rounded-top-pill rounded-bottom-0 ${ style.bgWhiteTrasnparent } border pt-5 pb-4 px-5` }>
              <div className="d-flex flex-column align-items-center">
                <p className="fs-2">Save the Date</p>
                <p className='border-start border-4 border-black  d-block my-2' style={{writingMode: 'vertical-lr', height:'4rem'}}></p>
              </div>
              
              <div className="py-2 mt-3">
                <p className="mb-1">Akad Nikah</p>
                <div>
                  <p className="mb-0">MINGGU, 30 AGUSTUS 2026</p>
                  <p>08.00 WIB - 12.00 WIB</p>
                </div>
                <div>
                  <p className="mb-0">Rumah Mempelai Wanita</p>
                  <p>Jl. Semangka Jaya RT. 05 RW. 02 Ds. Sruni Kec. Gedangan Kab. Sidoarjo </p>
                </div>
                <button><MdOutlineAddLocationAlt />Buka Maps</button>
              </div>

              <div className="mt-3"> 
                <p className="mb-1">Akad Nikah</p>
                <div>
                  <p className="mb-0">MINGGU, 30 AGUSTUS 2026</p>
                  <p>08.00 WIB - 12.00 WIB</p>
                </div>
                <div>
                  <p className="mb-0">Rumah Mempelai Wanita</p>
                  <p>Jl. Semangka Jaya RT. 05 RW. 02 Ds. Sruni Kec. Gedangan Kab. Sidoarjo </p>
                </div>
                <button><MdOutlineAddLocationAlt />Buka Maps</button>
              </div>
            </div>
        </section>
  )
}

export default Schedule
