import style from './index.module.css'
const Closing = () => {
  return (
    <section className={ `d-flex align-items-center` } style={{ zIndex:10 }}>
      <div className={ `container px-4 border border-success border-2 ${style.bgWhiteTrasnparent} d-flex flex-column justify-content-center text-center h-75 align-items-center gap-4 h-75 shadow py-5 px-3`} style={{borderRadius: '3rem'}}>
          
          {/* <p className="my-1">Kami yang berbahagia <br/>
          <p className={ `fs-1 fw-bolder ` } style={{marginBottom: '-1.3rem'}}>Yusni & Anggara</p></p>
          <p className="">27 Juli 2009</p>
          <p className='border-start border-4 d-block border-black' style={{writingMode: 'vertical-lr', height:'4rem'}}></p>
          
          <div>
              <p className="mb-1 fs-4">Terimakasih</p>
              <p className="px-1">Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami. Terima kasih.</p>
          </div> */}
          <div>
            <p className='mb-1'>Made with love</p>
            <p className='fs-1 fw-semibold'>Divition</p>
          </div>

          <div>
            <div>
              <p className='mb-1'>Background song by:</p>
              <p className='mb-0 fs-5 fw-semibold'>Lagu Pernikahan Kita - Tiara Andini & Arsy Widianto // Piano cover by EHK Piano ( Hans )</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Closing
