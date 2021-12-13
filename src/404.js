import { faGit, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";

export default function NotFoundPage() {

    return(<div>
        <Navigate to="/" replace={true}/>
    </div>)
}
