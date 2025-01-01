import style from './index.module.css';
import font from '../../fonts.module.css';
import * as motion from 'motion/react-client';
const Credits = () => {
    return (
        <section className={ `d-flex align-items-center justify-content-center` } style={{ zIndex:10 }}>
            <motion.div
                      className={ ` ${ style.bgWhiteTrans } d-flex flex-column justify-content-center text-center border border-2 border-success align-items-center gap-4 ${style.w75} shadow-lg py-5 px-3`} style={{borderRadius: '5rem 1rem'}}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                          duration: 0.9,
                          scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                      }}
                  >
                <p className={`my-1 ${font.cinzel} fw-light`}>Kami yang berbahagia<br/>
                <p className={ `fs-1 fw-bolder ${font.vidaloka}` } style={{marginBottom: '-1.3rem'}}>Yusni & Anggara</p></p>
                <p className={`${font.cinzel}`}>27 Juli 2009</p>
                <p className={`${font.cinzel} border-start border-4 d-block border-success rounded`} style={{ writingMode: 'vertical-lr', height:'5rem' }}></p>
                
                <div className={`px-2`}>
                    <p className={` ${ font.caudex} mb-1 fs-3 fw-semibold`}>Terimakasih</p>
                    <p className="px-1">Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami. Terima kasih.</p>
                </div>
            </motion.div>
        </section>
    )
}

export default Credits
