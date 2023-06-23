import styles from "../styles/styles.module.css"
function UserDashboard() {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <main className={`${styles.userDashboard}`}>
                <div className={`container-fluid ${styles.userDashboardDashboard}`}>
                    <div className="row mt-5 align-items-center mb-3">
                        <div className="col-6">
                            <p className="fs-4 fw-bold">Hello John</p>
                        </div>
                        <div className="col-6 d-flex flex-row-reverse">
                            <img src="" alt="" className={`${styles.userDashboardNav}`} />
                        </div>
                    </div>
                    <div className="row justify-content-center px-3 mb-3">
                        <div className={`col-md-12 ${styles.userDashboardVerify}`}>
                            <i className="bi bi-shield-fill-check fs-4"></i>
                            <p className="fs-6 fw-bold mb-0">Selamat! kamu sudah terverifikasi!</p>
                        </div>
                    </div>
                    <div className="row px-1 justify-content-between">
                        <div className="col-md-5">
                            <div className={`${styles.userDashboardInfo}`}>
                                <img src="" alt="" className={`${styles.userDashboardImg}`} />
                                <p className="fs-4 fw-bold mb-0">John Doe</p>
                                <p className="fs-6 mb-0">Programming</p>
                                <p className="fs-6 mb-0">Machine Learning</p>
                            </div>
                            <p className="fs-4 fw-bold mt-3">Contact Person</p>
                            <div className={`${styles.userDashboardContact} mb-3`}>
                                <i className="bi bi-whatsapp"></i>
                                <div className={`${styles.userDashboardNumber}`}>
                                    <p className="fs-6 mb-0 fw-bold">Nadya</p>
                                    <p className="fs-6 mb-0">+62 8902-9204-28</p>
                                </div>
                                <i className="bi bi-files"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${styles.userDashboardTimeline}`}>
                                <p className="fs-4 fw-bold p-5 pb-0">Alur kegiatan</p>
                                <ul>
                                        { arr.map((a,i)=>(
                                            <li key={i}>
                                                <div className={`${styles.userDashboardAlur}`}>
                                                    <p className="fs-6 fw-bold mb-0">Pendaftaran {a}</p>
                                                    <p className="fs-6 fw-bold mb-0">23-25 September 2023</p>
                                                </div>
                                            </li>
                                        )) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserDashboard
