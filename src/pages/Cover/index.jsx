import { useParams } from 'react-router-dom';
// import style from'./style.module.css';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// import mainStyle from '../../App.module.css';
import sunflower from '../../assets/sunflower.webp';
import profile from '../../assets/profile.webp';
import frame from '../../assets/frame.webp';
import style from './index.module.css';
import bgCover from '../../assets/bgCover.jpg'
const Cover = () => {
    
    const { name } = useParams();
    const navigate = useNavigate();
    const hideCover = () => { navigate(`/${name}/main`) };

    return (
        <section className={ `text-white vh-100 ${style.bgCover} d-flex flex-column justify-content-end align-items-center py-5` }>
            {/* <img className={`position-absolute top-0 start-0 h-25 ${style.mirror}`} src={frame} alt='frame' />
            <img className="position-absolute top-0 end-0 h-25" src={frame} alt='frame' /> */}
            
            <div className={ `text-center` }>
                <p className='fs-4'>Undangan Pernikahan</p>
                {/* <img className="position-relative top-0 end-0"  src={bgCover} alt='profile' /> */}
                <p className={ `mb-0 fw-bold fs-2` }>Yusni & Anggara</p>
                <p className='text-white'>Sabtu, 27 April 2024</p>

                <div>
                    <p className="m-0">Kepada yang terhormat</p>
                    <p className="m-0">Bapak/Ibu/Saudara</p>
                    <p className={`fw-bold mb-3 `}>{ name }</p>
                </div>
            </div>

            <button className={ ` rounded-4 px-3 py-1 position-relative text-white border-0 d-flex flex-row align-items-center justify-content-center gap-2 shadow mb-5`}>
                <BsEnvelopeHeart />
                <span className="text-white text-decoration-none fs-5" onClick={ () => hideCover() }>Buka Undangan</span>
            </button>

            {/* <img className={`position-absolute bottom-0 start-0 h-25 ${ style.rotate180 }`} src={frame} alt='frame' />
            <img className={`position-absolute bottom-0 end-0 h-25 ${style.rotate180} ${style.mirrorY}`} src={frame} alt='frame' /> */}
        </section>
  )
}

export default Cover
