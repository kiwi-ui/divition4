import { useParams } from 'react-router-dom';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.webp'
import { BsInstagram } from "react-icons/bs";
import couple from '../../assets/&.png';
import style from './index.module.css';
import Countdown from '../../components/Countdown';
import font from '../../fonts.module.css';
import * as motion from 'motion/react-client'

const Salutation = () => {
    const { name } = useParams();
    
    return (
        <section className={ `d-flex  justify-content-center align-items-center` } style={{ zIndex:10 }}>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.9,
                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                }}
                className={ `overflow-scroll border-3 border border-success rounded-bottom-3 ps-4 pe-2 py-5 ${ style.bgWhiteTrans } text-black ${ style.widthConditional }  ${ style.borderTosca } shadow-lg` } style={{ zIndex:10, borderRadius:'0.8rem 15rem' }}
            >
                <div className="text-start">
                    <div className='my-2'>
                        <p className={`fs-1 mb-0 ${ font.cinzel } fw-bold`}>Anonim Anonim</p>
                    </div>

                    <div>
                        <img className='' src={ couple } alt='yusni & anggara' style={{width:'15%'}}/>
                    </div>
                    
                    <div className='my-2'>
                        <p className={`fs-1 mb-0 ${ font.cinzel } fw-bold`}>Anonim Anonim</p>
                    </div>
                    <p className='border border-success d-block position-relative mb-4 mt-3' style={{width:'4rem'}}></p>
                </div>

                <p className={ ` ${font.vidaloka} fw-semibold` }>Assalamualaikum Warahmatullahi Wabarakatuh</p>
                <p className={`${font.caudex} mb-4`}>Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i <br/> pada acara pernikahan kami :</p>
                <Countdown />
            </motion.div>
        </section>
    )
}

export default Salutation
