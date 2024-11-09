import { useParams } from 'react-router-dom';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.webp'

const Salutation = () => {
    const { name } = useParams();
    
    return (
        <section className={ `text-white overflow-hidden d-flex flex-column justify-content-between align-items-center text-center` }>
            <div className={ `container bg-danger rounded-5 border py-4` }>
                <img className="position-relative top-0 end-0" width={250} src={profile} alt='profile' />
                <p className={ `mb-1 fw-bold fs-4` }>Assalamualaikum 
                    <br/> Warahmatullahi Wabarakatuh</p>
                <p className='text-white'>Tanpa mengurangi rasa hormat, <br/> kami bermaksud mengundang Bapak/Ibu/Saudara/i <br/> pada acara pernikahan kami</p>
            </div>
        </section>
    )
}

export default Salutation
