import { useParams } from 'react-router-dom';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.webp'
import { BsInstagram } from "react-icons/bs";
import couple from '../../assets/&.png';
import style from './index.module.css';

const Salutation = () => {
    const { name } = useParams();
    
    return (
        <section className={ `d-flex justify-content-center align-items-center text-center` } style={{ zIndex:10, height:'80%' }}>
            <div className={ `overflow-scroll container rounded-5  py-4 ${ style.bgWhiteTrans } text-black  ${style.borderTosca}` }>
                {/* <img className="position-relative top-0 end-0" width={250} src={profile} alt='profile' /> */}
                <p className={ `fw-bold fs-5` }>Assalamualaikum 
                    <br/> Warahmatullahi Wabarakatuh</p>
                <p className=''>Tanpa mengurangi rasa hormat, <br/> kami bermaksud mengundang Bapak/Ibu/Saudara/i <br/> pada acara pernikahan kami :</p>
            
                <div className='my-2'>
                    <p className='fs-2 my-1 fw-semibold '>Yusni Anggara</p>
                    <p className='mb-2'>Putri dari bapak yusni anggara & <br/> Ibu Yusni anggara</p>
                    <BsInstagram className='fw-bold fs-4'/>
                </div>

                <div>
                    <img className='py-2' src={ couple } alt='yusni & anggara' style={{width:'20%'}}/>
                </div>
                
                <div className='my-2'>
                    <p className="fs-2 my-1 fw-semibold">Yusni Anggara</p>
                    <p className='mb-2'>Putri dari bapak yusni anggara & <br/> Ibu Yusni anggara</p>
                    <BsInstagram className='fw-bold fs-4'/>
                </div>
            </div>
        </section>
    )
}

export default Salutation
