import { MdOutlineAddLocationAlt } from "react-icons/md";

const Schedule = () => {
  return (
         <section className={ `text-white  d-flex flex-column justify-content-between align-items-center text-center` }>
            <div className={ `container bg-danger border py-4 px-4 mx-5 py-5 ` }>
              <div className="d-flex flex-column align-items-center">
                <p className="fs-1">Save the Date</p>
                <p className='border-start border-4  d-block' style={{writingMode: 'vertical-lr', height:'4rem'}}></p>
              </div>
              
              <div className="py-2">
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

              <div> 
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
