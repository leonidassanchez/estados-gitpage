import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo } from "@fortawesome/free-solid-svg-icons";
import "./SocialButton.css";
function SocialButton() {
  return (
    <>
      <div className="redessociales">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </>
  );
}

export default SocialButton;
