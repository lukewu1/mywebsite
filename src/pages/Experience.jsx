import LA from '../downloads/download (3).png'
import NH from '../downloads/d59970_826ca32520914c55b5880387f65543da~mv2.png'
import faav from '../downloads/faav.png'
import rsm from '../downloads/rsm.jpg'
import thecorner from '../downloads/thecorner.png'

export default function Experience(){
    return(
        <>
            <div className="body2" id="experience">
                <div className="title">
                    <h1>Experience</h1>
                </div>
                {/* Faav App */}
                <div className="body">
                    <div className="profile">
                        <img src={faav} className="exp-logo"/>
                    </div>
                    <div className="text">
                        <p>
                            <strong>Software Engineering Co-op – Faav App</strong> <br />
                            Developed a recommendation engine in Go using the Apriori
                            algorithm to generate item-to-item associations from user
                            interaction data. Designed a PostgreSQL data pipeline to
                            simulate thousands of user interactions and compute support,
                            confidence, and lift metrics for ranked recommendation rules.
                            <br /><br />
                            <strong>Technologies:</strong> Go, PostgreSQL, SQL
                        </p>
                    </div>
                </div>

                {/* RSM */}
                <div className="body">
                    <div className="profile">
                        <img src={rsm} className="exp-logo"/>
                    </div>
                    <div className="text">
                        <p>
                            <strong>Application Developer Intern – RSM</strong> <br />
                            Developed and optimized SuiteScript workflows within NetSuite
                            to automate business processes and improve system efficiency.
                            Led research and experimentation with NetSuite’s LLM tools,
                            building Suitelets and a chatbot while exploring prompt
                            engineering techniques for internal workflows.
                            <br /><br />
                            <strong>Technologies:</strong> SuiteScript, NetSuite, JavaScript, LLM Tools
                        </p>
                    </div>
                </div>

                {/* Natural Highs */}
                <div className="body">
                    <div className="profile">
                        <img src={NH} className="exp-logo"/>
                    </div>
                    <div className="text">
                        <p>
                            <strong>Software Developer – Natural Highs</strong> <br />
                            Contributed to backend development of a full-stack CRUD
                            application providing teens with healthy alternatives to
                            drugs and alcohol. Implemented Firebase database operations
                            and backend logic for a cloud-hosted platform.
                            <br /><br />
                            <strong>Technologies:</strong> Svelte, Firebase, TypeScript
                        </p>
                    </div>
                </div>

                {/* Learning Assistant */}
                <div className="body">
                    <div className="profile">
                        <img src={LA} className="exp-logo"/>
                    </div>
                    <div className="text">
                        <p>
                            <strong>Learning Assistant – CSCI 1300</strong> <br />
                            Mentored 200+ students in introductory computer science
                            through weekly recitations and office hours while working
                            closely with instructors to support coursework and debugging.
                        </p>
                    </div>

                </div>

                {/* Volunteer */}
                <div className="body">
                    <div className="profile">
                        <img src={thecorner} className="exp-logo"/>
                    </div>
                    <div className="text">
                        <p>
                            <strong>Volunteer Coach – Parkinson’s Boxing Program</strong> <br />
                            Assist in twice-weekly boxing exercise classes helping elderly
                            participants with Parkinson’s disease improve mobility,
                            coordination, and balance through structured drills.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}