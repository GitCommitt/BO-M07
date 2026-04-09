import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <p>&copy; 2026 Todos. Alle rechten voorbehouden.</p>
            <ul className="footer-links">
            <li><a href="#">Privacybeleid</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </footer>
    )
}