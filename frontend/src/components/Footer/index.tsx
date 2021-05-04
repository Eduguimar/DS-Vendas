import GitHub from 'assets/img/github_icon.png'

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://www.linkedin.com/in/eduguimara/"
                    target="_blank" rel="noreferrer">Eduardo Guimarães   </a></p>
                <a href="https://github.com/Eduguimar" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub Profile" width="50" height="50" /></a>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;