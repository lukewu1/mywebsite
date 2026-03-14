import AI from '../downloads/Site.png'
import semantle from '../downloads/cover.png'
// Optional: add project images later for systems / ML projects
// import DNS from '../downloads/dns.png'
// import Pager from '../downloads/pager.png'
// import Games from '../downloads/games.png'
// import Spotify from '../downloads/spotify.png'

export default function Projects() {
  return (
    <div className="body2" id="projects">
      <div className="title">
        <h1 className="section-title">Projects</h1>
      </div>

      <div className="projects-group">
        <h2 className="project-category">Systems Projects</h2>

        <div className="project-card">
          <div className="text">
            <h3>
              <a
                href="https://github.com/lukewu1/multithreaded-dns-resolver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Multithreaded DNS Resolver
              </a>
            </h3>
            <p>
              Built a multithreaded DNS resolver in C using POSIX threads and a
              producer-consumer architecture to process hostname queries
              concurrently.
            </p>
            <p>
              <strong>Technologies:</strong> C, POSIX Threads, Semaphores, Networking
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="text">
            <h3>
              <a
                href="https://github.com/lukewu1/virtual-memory-pager"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Memory Pager
              </a>
            </h3>
            <p>
              Implemented LRU and predictive page replacement algorithms to
              simulate virtual memory management and analyze page fault behavior.
            </p>
            <p>
              <strong>Technologies:</strong> C, Operating Systems, Memory Management
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="text">
            <h3>
              <a
                href="https://github.com/lukewu1/multithreaded-http-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Multithreaded HTTP Server
              </a>
            </h3>
            <p>
              Developed a concurrent HTTP server in C using POSIX sockets,
              supporting request parsing, static file serving, and multiclient
              handling.
            </p>
            <p>
              <strong>Technologies:</strong> C, POSIX Sockets, Networking
            </p>
          </div>
        </div>
      </div>

      <div className="projects-group">
        <h2 className="project-category">Machine Learning / Data Projects</h2>

        <div className="project-card">
          <div className="text">
            <h3>Video Game Analysis</h3>
            <p>
              Analyzed a large-scale RAWG dataset and built models to predict
              game ratings, including an image-based recommendation system using
              EfficientNet embeddings.
            </p>
            <p>
              <strong>Technologies:</strong> Python, Pandas, Scikit-learn, TensorFlow,
              EfficientNet
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="text">
            <h3>Spotify Recommendation System</h3>
            <p>
              Built a recommendation pipeline that clustered songs using audio
              features, PCA, and K-means to generate genre-agnostic music
              recommendations.
            </p>
            <p>
              <strong>Technologies:</strong> Python, Spotify API, Matplotlib, PCA,
              K-means
            </p>
          </div>
        </div>
      </div>

      <div className="projects-group">
        <h2 className="project-category">AI / Full-Stack Projects</h2>

        <div className="project-card with-image">
          <div className="text">
            <h3>
              <a
                href="https://github.com/lukewu1/AI-PDF-Summarizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI PDF Summarizer with Notion Integration
              </a>
            </h3>
            <p>
              Integrated an AI PDF summarizer with the Notion API to
              automatically send generated summaries to users’ Notion pages,
              while preserving local control of credentials and data.
            </p>
            <p>
              <strong>Technologies:</strong> JavaScript, HTML, CSS, Notion API
            </p>
          </div>

          <div className="profile">
            <img src={AI} className="la" alt="AI PDF Summarizer project" />
          </div>
        </div>

        <div className="project-card with-image">
          <div className="text">
            <h3>
              <a
                href="https://github.com/lukewu1/Semantle-AI-Solver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Semantle AI Solver
              </a>
            </h3>
            <p>
              Developed an AI-based solver using Word2Vec embeddings and vector
              similarity to minimize guesses and efficiently converge on the
              target word.
            </p>
            <p>
              <strong>Technologies:</strong> Python, NumPy, Word2Vec, Linear Algebra
            </p>
          </div>

          <div className="profile">
            <img src={semantle} className="la" alt="Semantle solver project" />
          </div>
        </div>
      </div>
    </div>
  )
}