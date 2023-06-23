import styles from "../styles/styles.module.css"
function Sidebar() {
    return (
        <>
            <input type="checkbox" id="aktif" className={`${styles.checked}`} />
            <div className={`${styles.burger}`}>
                <label htmlFor="aktif">
                    <i className="bi bi-list fw-bold"></i>
                </label>
            </div>
            <main className={`position-fixed top-0 bottom-0 ${styles.sidebar}`}>
                <div className="row justify-content-around vh-100">
                    <div className="col-md-12 d-flex" style={{padding: "65px"}}>
                        <img src="" alt="" className={`${styles.sidebarHeaderImg} me-3`} />
                        <div className={`${styles.sidebarHeaderText}`}>
                            <p className="fs-6 mb-0">OR13</p>
                            <p className="fs-6 mb-0">Neo Telemetri</p>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex">
                        <ul className={`w-100 d-flex flex-column align-items-center ps-0 ${styles.sidebarUl}`}>
                            <li className={`d-flex ${styles.sidebarLi}`}>
                                <i className="bi bi-house-fill fs-4 text-white"></i>
                                <a href="" className="text-white text-decoration-none">Dashboard</a>
                            </li>
                            <li className={`d-flex ${styles.sidebarLi}`}>
                                <i className="bi bi-person-fill fs-4 text-white"></i>
                                <a href="" className="text-white text-decoration-none">Profile</a>
                            </li>
                            <li className={`d-flex ${styles.sidebarLi}`}>
                                <i className="bi bi-shield-fill-check fs-4 text-white"></i>
                                <a href="" className="text-white text-decoration-none">Verifikasi</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 d-flex flex-column-reverse">
                        <ul className={`w-100 d-flex flex-column justify-content-between align-items-center ps-0 ${styles.sidebarUl}`}>
                            <li className={`d-flex ${styles.sidebarLi}`}>
                                <i className="bi bi-arrow-left-circle-fill fs-4 text-white"></i>
                                <a href="" className="text-white text-decoration-none">Keluar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Sidebar
