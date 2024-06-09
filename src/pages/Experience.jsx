import Header from './Header'
import Footer from './Footer'
import LA from '../downloads/download (3).png'

export default function Experience(){
    return(
        <>
            <Header />
            <div className="body">
                <div className="text">
                    <h1>Experience</h1>
                    <p>
                    I have mentored over 200 students in CU's Intro to Computer Science course, 
                    facilitating their learning through weekly recitations and providing additional support during office hours. <br /> <br />
                    From working as a Learning Assistant for CSCI 1300, I closely collaborated with the instructional team to 
                    effectively support our students' learning 
                    and improve my communication, teamwork, and leadership skills.
                    </p>
                </div>
                <div className="profile">
                    <img src={LA} className="la"/>
                </div>
            </div>
            <Footer />
        </>
    );
}