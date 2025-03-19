import { Link } from 'react-router-dom';
import './assets/styles.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section */}
                <div className="footer-left">
                    <h3 className="footer-title">SalesSavvy</h3>
                    <p className="footer-tagline">Your one-stop shop for all your needs</p>
                </div>

                {/* Footer Links Section - All routed to the same page */}
                <div className="footer-links">
                    <Link to="/about" className="footer-link">About Us</Link>
                    <Link to="/about#contact" className="footer-link">Contact</Link>
                    <Link to="/about#terms" className="footer-link">Terms of Service</Link>
                    <Link to="/about#privacy" className="footer-link">Privacy Policy</Link>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2025 <span className="brand-name">SalesSavvy</span>. All rights reserved.</p>
            </div>
        </footer>
    );
}
