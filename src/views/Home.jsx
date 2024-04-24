const React = require("react");

const Layout = require("./Layout");

function Home({ login }) {
  return (
    <Layout login={login}>
      <body>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/css/image/70fcc8f18a57b98ccb7c302921gq--ukrasheniya-derevyannye-naruchnye-chasy-muzhskie-s-gravirovko.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/a62a88bee46f67de8f791aea8810--ukrasheniya-derevyannye-naruchnye-chasy-muzhskie-s-gravirovko.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/c55e8b320daa93be3848df427372--ukrasheniya-naruchnye-chasy-iz-dereva-stali-i-mramora-muzhski.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="spanDetails">
          <span className="details">More details</span>
        </div>
      </body>
    </Layout>
  );
}

module.exports = Home;
