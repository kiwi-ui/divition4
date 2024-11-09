import React from 'react'
import style from './index.module.css'
import { FiInstagram } from "react-icons/fi";

const Couple = () => {
  return (
        <section className={ `text-white d-flex flex-column justify-content-between align-items-center text-center ` }>
            <div className={ `container text-end bg-danger border py-4 mx-5 d-flex flex-column justify-content-end align-items-end ${ style.borderRadius } py-5 ` }>
                <div>
                    <p className='mb-1'>Yusni Anggara, S.T</p>
                    <p>Putra pertama dari <br/> Bapak Yusni dan Ibu Anggara</p>
                    <button className='d-flex gap-2 rounded align-items-center py-2 px-3'>
                        <FiInstagram className='fs-2'/>
                        instagram
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Couple
