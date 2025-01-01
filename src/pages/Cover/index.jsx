import { useParams } from 'react-router-dom';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import style from './index.module.css';
import font from '../../fonts.module.css';
import * as motion from 'motion/react-client'

const Cover = () => {
    
    const { name } = useParams();
    const navigate = useNavigate();
    const hideCover = () => { navigate(`/${name}/main`) };

    return (
        <section className={ `text-white vh-100 ${style.bgCover3} d-flex flex-column justify-content-center align-items-center py-5` }>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }} 
                className={ `text-center py-0 px-3 mb-0 rounded-4 ` } style={{zIndex:1, marginTop: '10rem'}}
            >
                <p className={`${font.cinzel} fs-5 mb-1`}>Undangan Pernikahan</p>
                <p className={ `fw-bold ${font.vidaloka} ${style.textPrimary}` } style={{ fontSize: '2.4rem'}}>Anonim & Anonnim</p>

                <div className=''>
                    <p className="m-0" style={{fontSize: '0.8rem'}}>Kepada yang terhormat</p>
                    <p className="" style={{fontSize: '0.8rem'}}>Bapak/Ibu/Saudara</p>
                    <p className={`fw-bold fs-4 ${font.vidaloka} mb-4`}>{ name }</p>
                </div>
            </motion.div>

            <button className={ `${style.bgButton} rounded-3 px-3 py-2 position-relative text-white border-0 d-flex flex-row align-items-center justify-content-center align-items-center gap-2 shadow`}>
                <BsEnvelopeHeart className='fw-bold'/>
                <span className="text-white text-decoration-none mb-0 fw-semibold" onClick={ () => hideCover() }>Buka Undangan</span>
            </button>
        </section>
  )
}

export default Cover
