import { useState } from 'react';
// import fonts from '../../assets/fonts/fonts.module.css';
import { FiSend } from "react-icons/fi";
import style from './index.module.css';
import font from '../../fonts.module.css';
import * as motion from 'motion/react-client';

const Wishes = () => {
    const [formData, setFormData] = useState({
        name: '',
        harapan: '',
    });
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleNameChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            name: e.target.value
        }));
    };  
    const handleWishChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            harapan: e.target.value
        }));
    };
    const handleSubmit = (event) =>  {
        event.preventDefault();
        const url = 'https://script.google.com/macros/s/AKfycbwQXX_3toAoYP2V9KO1XaxR8oldPUEAN9X5K91zYE3GIi7wVCTl0HMrdbRpQHswUlco/exec';
        const form = document.getElementById('form');

        if (!formData.name || !formData.harapan) {
            setIsInputEmpty((e) => !e)
            setTimeout(() => {
                setIsInputEmpty(false);
            }, 2000)
            setIsSuccess(false)
            return;
        }
        fetch(url, { method: 'POST', body: new FormData(form) })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            setFormData({name:'', harapan:''})
            setIsSuccess(true) 
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000);
        })
        .catch(() =>  {
            setIsLoading(e => !e)
            alert('Terjadi Kesalahan!')
        }
        );
        setIsLoading(e => !e)
    }

    return (
        <section className={`wish d-flex align-items-center my-5`} style={{ zIndex:10 }}>
            <motion.div
                className={ `container ${ style.bgWhiteTrasnparent } rounded-4 shadow d-flex flex-column justify-content-center border border-2 border-success` } 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.9,
                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                }}
            >
                <div id="wish" className={`py-5 container `}>
                    <p className={` ${font.cinzel} fw-bold m-0 text-center fs-1 mb-3 pb-2`}>Ucapan</p>

                    <form name="submit-to-google-sheet" id="form" className="form-wrapper row py-1" method="post">
                        <div className="col-md-6 col-12 mt-md-3 input-group input-group-sm ">
                            <input className={`${ style.input } py-2 form-control w-100 rounded-1 border-0 fw-semibold bg-white` } name="name" type="text" placeholder="Nama" onChange={ handleNameChange } value={ formData.name }/>
                            { !isInputEmpty ? '' : <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> }
                        </div>
                        <div className="col-md-6 col-12 my-3 input-group input-group-sm">
                            <input className={`${style.input} py-2   form-control w-100 rounded-1 border-0 fw-semibold bg-white`} name="no" type="number" placeholder="Nomor ponsel (opsional)" />
                        </div>
                        <div className="col-12 input-group input-group-sm">
                            <textarea className={ `${ style.input } form-control pt-2 pb-3 w-100 rounded-1 border-0 fw-semibold bg-white`} name="wish" placeholder="Harapan untuk pengantin" onChange={ handleWishChange } value={ formData.harapan } required />
                            { !isInputEmpty ? '' : <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama harapan anda untuk kepengantin</p> }
                        </div>
                    </form>

                    <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative">
                        <a href='blank' type="submit" className={`btn py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold btn ${isLoading ? 'disabled' : '' } bg-success`} aria-disabled="true" onClick={ handleSubmit }>
                            { 
                                isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                                    : 
                                <div className={`btn ${ style.focus  } btn-transparent m-0 p-0 d-flex flex-row justify-content-center gap-2 align-items-center`}>
                                    <FiSend color='white'/>
                                    <p className="mb-1 text-white">Submit</p> 
                                </div>
                            }
                        </a>
                        { !isSuccess ? '' : <p className="position-relative bg-text-primary">Pesan Terkirim!</p> }
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Wishes
