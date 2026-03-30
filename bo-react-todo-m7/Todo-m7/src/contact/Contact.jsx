import './Contact.css';

export function Contact() {
    return (
        <div className='contact' id='contact'>
                <h2 className='contact-title'>Onze contacten</h2>
                <div className="contact-card">
                    <div className="contact">
                        <h3>Daan Pronk</h3>
                        <p><a href="https://github.com/GitCommitt">Github: Gitcommit</a></p>
                        <p><a href="https://github.com/GitCommitt">Leerlingnummer: 38427</a></p>
                        <p><a href="mailto:38427@ma-web.nl">Mail-adres: 38427@ma-web.nl</a></p>
                    </div>
                    <div className="contact">
                        <h3>Sem Pater</h3>
                        <p><a href="https://github.com/L1lmastersem">Github: L1lmastersem</a></p>
                        <p><a href="">Leerlingnummer: 38252</a></p>
                        <p><a href="mailto:38252@ma-web.nl">Mail-adres: 38252@ma-web.nl</a></p>
                    </div>
                </div>
        </div>
    )
}