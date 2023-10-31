
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faWhatsapp,
    faInstagram,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div className="social-container">
            <h3 className="text-center text-xl font-thin mb-4 font-serif">Follow me 🌻</h3>

            <div className="social-icon">

                <a href="https://www.tiktok.com/@matthewwebclar"
                    rel="noreferrer"
                    target="_blank"
                    className="instagram social">
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>

                <a href="https://www.instagram.com/matthewwebclar"
                    rel="noreferrer"
                    target="_blank"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="https://www.facebook.com/matthewwebclar"
                    rel="noreferrer"
                    target="_blank"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/mattthewwebclar"
                    rel="noreferrer"
                    target="_blank"
                    className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <a href="https://wa.me/message/SVZVXYRP3PGAD1"

                    rel="noreferrer"
                    target="_blank"
                    className="whatsapp social">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>

                <a href="https://www.youtube.com/@matthewwebclar"

                    rel="noreferrer"
                    target="_blank"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
            </div>
        </div>
    );
}