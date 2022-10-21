export default function Footer(){
    return(
        <footer>
            <div className="container">
                <span className="logo" href=''>Miki.</span>
                {/* <div>
                    <img src={logo} alt="" height='60px' width='60px' />
                </div> */}
                <div className="links">
                    <a href="https://github.com/Michael101599">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-alvarado-hern%C3%A1ndez-6789b516b/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/1015_mai/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <p className="copyright">
                    <i className="fas fa-location"></i>
                    Cali, Colombia
                </p>
            </div>
        </footer>
    )
}