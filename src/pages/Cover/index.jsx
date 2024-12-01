import { useParams } from 'react-router-dom';
// import style from'./style.module.css';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// import mainStyle from '../../App.module.css';
import sunflower from '../../assets/sunflower.webp';
import profile from '../../assets/profile.webp';
import frame from '../../assets/frame.webp';
import style from './index.module.css';
import bgCover3 from '../../assets/bgCover3.png'
const Cover = () => {
    
    const { name } = useParams();
    const navigate = useNavigate();
    const hideCover = () => { navigate(`/${name}/main`) };

    return (
        <section className={ `text-white vh-100 ${style.bgCover3} d-flex flex-column justify-content-end align-items-center py-5` }>
            {/* <img className={`position-absolute top-0 start-0 h-25 ${style.mirror}`} src={frame} alt='frame' />
            <img className="position-absolute top-0 end-0 h-25" src={frame} alt='frame' /> */}
            
            <div className={ `text-center py-0 px-3 mb-0 rounded-4 ` } style={{zIndex:1}}>
                {/* <p className='fs-4'>Undangan Pernikahan</p> */}
                {/* <img className="position-relative top-0 end-0"  src={bgCover} alt='profile' /> */}
                <p className={ `mb-1 fw-bold fs-1` } style={{letterSpacing:'0.2rem'}}>Yusni & Anggara</p>
                {/* <p className='text-white'>Sabtu, 27 April 2024</p> */}

                <div className=''>
                    <p className="m-0" style={{fontSize: '0.8rem'}}>Kepada yang terhormat</p>
                    <p className="m-0" style={{fontSize: '0.8rem'}}>Bapak/Ibu/Saudara</p>
                    <p className={`fw-bold fs-4`}>{ name }</p>
                </div>
            </div>
            <button className={ `${style.bgButton} rounded-2 px-3 py-2 position-relative text-white border-0 d-flex flex-row align-items-center justify-content-center align-items-center gap-1 shadow`} style={{marginBottom: '8rem'}}>
                <BsEnvelopeHeart className='fw-bold'/>
                <span className="text-white text-decoration-none mb-0 fw-semibold" onClick={ () => hideCover() }>Buka Undangan</span>
            </button>


            {/* <img className={`position-absolute bottom-0 start-0 h-25 ${ style.rotate180 }`} src={frame} alt='frame' />
            <img className={`position-absolute bottom-0 end-0 h-25 ${style.rotate180} ${style.mirrorY}`} src={frame} alt='frame' /> */}
        </section>
  )
}

export default Cover
