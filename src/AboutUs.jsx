import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function AboutUs() {
    const location = useLocation();

    // Scroll to specific section on hash change
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="about-container">
            {/* About Us Section */}
            <section id="about" className="about-section">
                <h2>About Us</h2>
                <p>
                    Welcome to <strong>SalesSavvy</strong>, your trusted partner for all your shopping needs. 
                    Our mission is to provide quality products at competitive prices with top-notch customer service.
                </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="about-section">
                <h2>Contact Us</h2>
                <p>Email: <a href="mailto:support@salessavvy.com">support@salessavvy.com</a></p>
                {/* <p>Phone: +91-98765-43210</p> */}
                {/* <p>Address: 123, Sales Street, Bangalore, India</p> */}
            </section>

            {/* Terms of Service Section */}
            <section id="terms" className="about-section">
                <h2>Terms of Service</h2>
                <p>
                    By using SalesSavvy, you agree to comply with our terms and conditions. 
                    We reserve the right to update these terms at any time without prior notice.
                </p>
            </section>

            {/* Privacy Policy Section */}
            <section id="privacy" className="about-section">
                <h2>Privacy Policy</h2>
                <p>
                    Your privacy is important to us. We do not share or sell your data to third parties. 
                    We collect only necessary data to enhance your shopping experience.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;
