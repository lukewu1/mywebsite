import githubLogo from '../downloads/github-logo-2E3852456C-seeklogo.com-removebg-preview.png'
import linkedinLogo from '../downloads/39a5ae84afcd8cd690f37e65f7d94798-removebg-preview.png'
import gmailLogo from '../downloads/5006dc7319d99a139727482e4d75b1f2-removebg-preview.png'

export default function Footer(){
    return(
        <div className="footerbar">
            <a href="https://github.com/lukewu1" target="_blank">
                <img src={githubLogo} class="logo"/>
            </a>
            <a href="https://www.linkedin.com/in/luke-wu-029115269" target="_blank">
                <img src={linkedinLogo} class="logo"/>
            </a>
            <a href="mailto:luwu8831@colorado.edu" target="_blank">
                <img src={gmailLogo} class="logo"/>
            </a>
        </div>
    )
}