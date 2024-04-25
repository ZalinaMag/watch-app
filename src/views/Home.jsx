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
                src="/css/image/duotone (1).png"
                className="d-block w-100"
                alt="img-watch"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/duotone (3).png"
                className="d-block w-100"
                alt="img-watch"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/duotone (4).png"
                className="d-block w-100"
                alt="img-watch"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/css/image/duotone (6).png"
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
          <button className="details">
            <span id="span">Подробнее о наших товарах</span>
          </button>
        </div>
        <div className="makeOrder">
          <button className="order">Сделать заказ</button>
        </div>
        <div className="filterContainMain">
          <div className="filterContain">
            <button className="btnGenderMan">мужские</button>
            <button className="btnGenderWom">женские</button>
            <button className="btnColorGold">золотые</button>
            <button className="btnColorSilver">серебряные</button>
          </div>
          {login === "admin" && (
            <div className="addNewCard">
              <h3>Добавление новой модели</h3>
              <form className="addWatchForm" encType="multipart/form-data">
                <input type="file" name="image" className="addFile" required />
                <input
                  type="text"
                  name="title"
                  placeholder="название"
                  className="addFile"
                  required
                />
                <input
                  type="text"
                  name="description"
                  placeholder="описание"
                  className="addFile"
                  required
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="мужские/женские"
                  className="addFile"
                  required
                />
                <input
                  type="text"
                  name="color"
                  placeholder="цвет"
                  className="addFile"
                  required
                />
                <button type="submit" className="addNewFile">
                  Добавить новую модель
                </button>
              </form>
            </div>
          )}
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
                  name="image"
                  accept="image/png, image/jpeg"
                />
                <button
                  type="submit"
                  className="modalBtn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  сделать заказ
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Заказ сохранен и подтверждение отправлено на вашу
                        электронную почту
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
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
          <div>Номер телефона: 8920000000</div>
          <div>
            Telegram: <a href="https://t.me/agvento-test">Написать автору</a>
          </div>
          <div>Адрес</div>
        </footer>
        <script defer src="/js/modal.js"></script>
        <script defer src="/js/watchCard.js" />
        <script defer src="/js/filter.js" />
        <script defer src="/js/scrool.js" />
      </body>
    </Layout>
  );
}

module.exports = Home;
