import Header from './Header'
import Footer from './Footer'
import ML from '../downloads/ss.png'
import semantle from '../downloads/cover.png'
import IMDB from '../downloads/IMDb-logo.png'
import AI from '../downloads/Site.png'

export default function Projects(){
    return(
        <>
            <div className="body2">
                <Header />
                <div className="title">
                    <h1>Projects</h1> <br />
                </div>
                <div className="body">
                    <div className="text">
                        <p>
                        <a href="https://github.com/lukewu1/AI-PDF-Summarizer" target="_blank">AI PDF Summarizer with Notion Integration</a> <br />
                        Description: Integrated Mr2Wei's AI PDF Summarizer with the Notion API, allowing users to automatically send summaries to their Notion pages. Developed a secure backend that requires users to run the code locally to enable the Notion integration, ensuring both data protection and user control.<br /> <br />
                        Tools used: JavaScript, HTML, CSS, Notion API, Backend Development
                        </p>
                    </div>
                    <div className="profile">
                        <img src={AI} className="la"/>
                    </div>
                </div>
                <div className="body">
                    <div className="profile">
                        <img src={ML} className="la"/>
                    </div>
                    <div className="text">
                        <p>
                        <a href="https://github.com/lukewu1/Machine-Learning-Project" target="_blank">Machine Learning Project</a> <br />
                        Description: Developed multiple machine learning models using multiple linear regression to predict housing prices.<br /> <br />
                        Tools used: Python, Pandas, Numpy, Matplotlib, Seaborn, Sklearn, Plotly.express
                        </p>
                    </div>
                </div>
                <div className="body">
                    <div className="text">
                        <p>
                        <a href="https://github.com/lukewu1/Semantle-AI-Solver" target="_blank">Semantle AI Solver</a> <br />
                        Description: Developed a novel AI solution utilizing Word2Vec vectorization, linear algebra, and machine learning techniques to solve the Semantle puzzle with minimal amount of guesses. <br /> <br />
                        Tools used: Python, Numpy, Linear Algebra, Word2Vec, RESTful API
                        </p>
                    </div>
                    <div className="profile">
                        <img src={semantle} className="la"/>
                    </div>
                </div>
                <div className="body">
                    <div className="profile">
                        <img src={IMDB} className="la"/>
                    </div>
                    <div className="text">
                        <p>
                        <a href="https://github.com/lukewu1/IMDB-Top-1000-Database" target="_blank">IMDB Top 1000</a> <br />
                        Designed a C++ program to store movie details in a hash table and efficiently search through a skip list. <br /> <br />
                        Tools used: C++, Skip Lists, Hash Tables
                        </p>
                    </div>
                </div>
            <Footer />
            </div>
        </>
    );
}