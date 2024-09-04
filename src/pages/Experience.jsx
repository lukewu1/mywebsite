import Header from './Header'
import Footer from './Footer'
import LA from '../downloads/download (3).png'
import NH from '../downloads/d59970_826ca32520914c55b5880387f65543da~mv2.png'

export default function Experience(){
    return(
        <>
            <Header />
            <div className="experiencetitle">
                <h1>Experience</h1>
            </div>
            <div className="body">
                <div className="text">
                    <p>
                        Contributed to the backend development of a full-stack CRUD application aimed at 
                        providing healthy alternatives to drugs, alcohol, and other unhealthy coping mechanisms, 
                        primarily for teens. The application was built using Svelte for the frontend and Firebase 
                        for the backend, offering a user-friendly platform to support the organization's mission.
                    </p>
                    <br></br>
                    <p>
                        Tools & Technologies: Svelte, Firebase, Full-Stack Development.
                    </p>
                </div>
                <div className="profile">
                    <img src={NH} className="la"/>
                </div>
            </div>
            <div className="body">
                <div className="profile">
                    <img src={LA} className="la"/>
                </div>
                <div className="text">
                    <p>
                    I have mentored over 200 students in CU's Intro to Computer Science course, 
                    facilitating their learning through weekly recitations and providing additional support during office hours. <br /> <br />
                    From working as a Learning Assistant for CSCI 1300, I closely collaborated with the instructional team to 
                    effectively support our students' learning 
                    and improve my communication, teamwork, and leadership skills.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}