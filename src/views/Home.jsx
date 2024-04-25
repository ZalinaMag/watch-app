const React = require("react");
const Card = require("./WatchCardComponent");
const Layout = require("./Layout");

function Home({ login, allWatch }) {
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
                alt="img-watch"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/a62a88bee46f67de8f791aea8810--ukrasheniya-derevyannye-naruchnye-chasy-muzhskie-s-gravirovko.jpg"
                className="d-block w-100"
                alt="img-watch"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/c55e8b320daa93be3848df427372--ukrasheniya-naruchnye-chasy-iz-dereva-stali-i-mramora-muzhski.jpg"
                className="d-block w-100"
                alt="img-watch"
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
          <button className="details">More details</button>
        </div>
        <div className="makeOrder">
          <button className="order">Make an order</button>
        </div>
        <div className="filterContain">
          <button className="btnGenderMan">asfaf</button>
          <button className="btnGenderWom">asfasf</button>
          <button className="btnColorGold">asfasf</button>
          <button className="btnColorSilver">dgssgssdg</button>
          {login === "admin" && <button className="addCard">admin</button>}
        </div>
        <div className="contain">
          <div className="watchContainer">
            {allWatch.map((watch) => (
              <Card watch={watch} key={watch.id} login={login} />
            ))}
          </div>
        </div>
        <div className="orderPage">
          {login && (
            <>
              <h2>Пожалуйста, заполните форму заказа</h2>
              <hr />
              <form
                className="orderForm"
                method="POST"
                action="/order/submit"
                encType="multipart/form-data"
              >
                <input type="text" name="name" placeholder="имя" required />
                <input type="email" name="email" placeholder="email" required />
                <input
                  type="text"
                  name="phone"
                  placeholder="телефон"
                  required
                />
                <input
                  type="text"
                  name="comment"
                  placeholder="комментарии"
                  required
                />

                <input
                  id="avatar"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                />
                <button
                  type="submit"
                  class="modalBtn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  сделать заказ
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        Заказ сохранен и подтверждение отправлено на вашу
                        электронную почту
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <hr />
              <h3 className="orderErrMsg"></h3>
            </>
          )}
        </div>
        <footer>
          <div>Номер телефона</div>
          <div>Адрес</div>
        </footer>
        <script defer src="/js/modal.js"></script>
      </body>
    </Layout>
  );
}

module.exports = Home;
