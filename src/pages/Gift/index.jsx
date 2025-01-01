import qr from '../../assets/qr-1.webp';
import { useState } from 'react';
import { MdContentCopy } from "react-icons/md";
import style from './index.module.css';
import font from '../../fonts.module.css';
import * as motion from 'motion/react-client';

const Gift = () => {
    const [showCopy, setShowCopy] = useState(false)
    const copyId =() => {
        const bankId = '091204789789';
        navigator.clipboard.writeText(bankId);
        setShowCopy((e) => !e)
        setTimeout(() => setShowCopy(false), 2000)
    }

    return (
        <motion.div
            className={ `d-flex top-0 justify-content-center align-items-center`} style={{ zIndex: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
            }}
        >
            <div className={`top-50 border border-success border-2 ${ style.bgWhiteTrasnparent } rounded-4` }>
                <div className="container">
                    <div className="text-center pb-4 position-relative">
                        <img src={ qr } className=" pt-4 w-75 rounded" alt="qr code" />  
                        <div className="my-2">
                            <p className={` ${font.cinzel} fs-5 fw-bold m-0`}>Anggara</p>
                            <p className=''>091204789789 / Bank Mandiri</p>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <button className={ `d-flex ${style.bgButton} flex-row justify-content-center align-items-center gap-2 fw-semibold py-2 px-3 position-relative rounded-2 border-0 text-white bg-success` } onClick={ copyId }>
                                <MdContentCopy />
                                <p className='mb-0'>Copy</p>
                            </button>
                            {/* <a href="https://wa.me/082336420166?text=I%20confirm%20that%20I%20have%20sent%20the%20money%20transfer%20for%20the%20wedding%20gift." target="_blank" rel='noreferrer'> */}
                                {/* <button className="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold">Konfirmasi</button> */}
                            {/* </a> */}
                        </div>
                        <p className={ `${ showCopy ? "d-block" : "d-none" } position-fixed translate-middle-x start-50 rounded-3 p-3 mb-0`} style={{top: "90%" }}>Copied</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Gift