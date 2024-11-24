const Credits = () => {
    return (
        <section className={`position-relative d-flex align-items-center`}>
            <div className="container bg-white d-flex flex-column justify-content-center text-center h-100 align-items-center gap-4 h-75 shadow-lg py-5" style={{borderRadius: '5rem 1rem'}}>
                {/* <div>
                    <p className="m-0">Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.</p>
                    <p className="fw-semibold">Wassalamu’alaikum Wr. Wb.</p>
                </div> */}

                <p className="my-1">Kami yang berbahagia <br/>
                <p className={ `fs-1 fw-bolder` } style={{marginBottom: '-1.3rem'}}>Yusni & Anggara</p></p>
                <p className="">27 Juli 2009</p>
                <p className='border-start border-4 d-block' style={{writingMode: 'vertical-lr', height:'4rem'}}></p>
                
                <div>
                <p className="mb-1 fs-4">Terimakasih</p>
                <p className="px-1">Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami. Terima kasih.</p>
                </div>

                {/* <div className="text-center">
                    <p className=" m-0">Made with Love</p>
                    <p className={ `fs-3 fw-bolder ` }>Divition</p>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <p className="fw-bold m-0">Background song by:</p>
                        <i className="text-black" href="https://www.youtube.com/watch?v=Rh9bBSWqCTk">Takkan Terganti - Kahitna | Piano Cover & Tutorial by Andre Panggabean</i>
                    </div>
                    
                    <div className="col-md-6">
                        <p className="fw-bold m-0">Icons by:</p>
                        <i className="text-black" href="https://react-icons.github.io/react-icons/">React Icons</i>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Credits