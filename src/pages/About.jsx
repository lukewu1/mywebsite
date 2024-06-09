import Header from './Header'
import Footer from './Footer'
import profilePicture from '../downloads/IMG_4875.jpg'

export default function About(){
    return(
        <div>
            <Header />
            <div className="body">
                <div className="text">
                    <h1>Luke Wu</h1>
                    <p>
                        I am currently a Junior at the University of Colorado Boulder studying for a Bachelor of Science in Computer Science 
                        and a Minor in Data Science. I am passionate about software development, artificial intelligence, and data analytics. <br /> <br />
                        Outside of school, I enjoy rock climbing, weightlifting, tennis, and pickleball. <br /> <br />
                        Notable Achievements: Deans list(2023-current), <a href="https://devpost.com/software/mega-problem-solver" target="_blank">HackCU Winner (Games)</a>
                    </p>
                </div>
                <div className="profile">
                    <img src={profilePicture} class="profile"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}