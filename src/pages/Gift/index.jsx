import { GrFormClose } from 'react-icons/gr';
import qr from '../../assets/qr-1.webp';
import { useState } from 'react';
import style from './index.module.css';
const Gift = () => {
    const [showCopy, setShowCopy] = useState(false)
    const copyId =() => {
        const bankId = '091204789789';
        navigator.clipboard.writeText(bankId);
        setShowCopy((e) => !e)
        setTimeout(() => setShowCopy(false), 2000)
    }

    return (
        <div className={ `d-flex vh-100 w-100 position-fixed top-0 justify-content-center align-items-center`} style={{ zIndex: 10 }}>
            <div className={`top-50 ${style.bgWhiteTrasnparent} rounded-4` }>
                <div className="container">
                    {/* <div className="d-flex justify-content-end">
                        <button className="bg-transparent border-0 fs-1" type="button" onClick={ toggle }><GrFormClose /></button>
                    </div> */}

                    <div className="text-center pb-4 position-relative">
                        <img src={ qr } className="position-relative h-50 pt-4 rounded" alt="qr code" />  
                        <div className="my-2">
                            <p className="fs-5 fw-bold m-0">Anggara</p>
                            <p className=''>091204789789 / Bank Mandiri</p>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="py-2 px-4 position-relative rounded-2 border-0 text-white" style={{ background: "#2b2b2b" }} onClick={ copyId }>Copy</button>
                            {/* <a href="https://wa.me/082336420166?text=I%20confirm%20that%20I%20have%20sent%20the%20money%20transfer%20for%20the%20wedding%20gift." target="_blank" rel='noreferrer'> */}
                                {/* <button className="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold">Konfirmasi</button> */}
                            {/* </a> */}
                        </div>
                        <p className={`${ showCopy ? "d-block" : "d-none" } fs-2 position-fixed translate-middle-x start-50 rounded-3 text-white p-3`} style={{top: "90%" }}>Copied</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Gift