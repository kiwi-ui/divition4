import { useParams } from 'react-router-dom';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.webp'
import { BsInstagram } from "react-icons/bs";
import couple from '../../assets/&.png';
import style from './index.module.css';
import Countdown from '../../components/Countdown';

const Salutation = () => {
    const { name } = useParams();
    
    return (
        <section className={ `d-flex  justify-content-center align-items-center` } style={{ zIndex:10 }}>
            <div className={ `overflow-scroll border-2 border border-success rounded-bottom-3 px-3 py-5 ${ style.bgWhiteTrans } px-5 text-black ${style.widthConditional}  ${ style.borderTosca } shadow-lg` } style={{ zIndex:10, borderRadius:'0.8rem 15rem' }}>
                {/* <img className="position-relative top-0 end-0" width={250} src={profile} alt='profile' /> */}
                <div className="text-start">
                    <div className='my-2'>
                        <p className='fs-1 mb-0'>Yusni</p>
                    </div>

                    <div>
                        <img className='' src={ couple } alt='yusni & anggara' style={{width:'15%'}}/>
                    </div>
                    
                    <div className='my-2'>
                        <p className="fs-1 mb-0">Angga</p>
                    </div>
                    <p className='border border-success d-block position-relative mb-4 mt-3' style={{width:'4rem'}}></p>
                </div>

                <p className={ `fw-bold fs-5` }>Assalamualaikum Warahmatullahi Wabarakatuh</p>
                <p className='mt-4 mb-5'>Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i <br/> pada acara pernikahan kami :</p>
                <Countdown />
            </div>
        </section>
    )
}

export default Salutation
