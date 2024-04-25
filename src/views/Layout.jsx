const React = require("react");

module.exports = function Layout({ children, login, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />

        <link rel="stylesheet" href="/css/style.css" />
        <title>{title ? title : "Watch"}</title>
      </head>
      <header>
        {login ? (
          <>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <span className="navbar-brand" href="/">
                  Home
                </span>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="nav-link">{login}</div>
                    </li>
                    {login === "admin" && (
                      <li className="nav-item">
                        <div className="nav-link users-list">
                          <button>1124asdaf4</button>
                        </div>
                      </li>
                    )}
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        ) : (
          <>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  Home
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Login
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Authorization
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">Enter login</div>
                          <form className="form-login">
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputLogin1"
                              placeholder="введите логин"
                              required
                            />
                            <div className="modal-body">Enter password</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputPassword1"
                              placeholder="введите пароль"
                              required
                            />
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btnClose btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                className="btnSave btn-primary"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Registration
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <form className="form-reg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                              >
                                Registration
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">Enter login</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputLogin"
                              placeholder="введите логин"
                              required
                            />
                            <div className="modal-body">Enter email</div>
                            <input
                              name="email"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputEmail"
                              placeholder="введите email"
                              required
                            />
                            <div className="modal-body">Enter password</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputPassword"
                              placeholder="введите пароль"
                              required
                            />
                            <span></span>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btnCloseReg btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btnSaveReg btn-primary"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </ul>
                </div>
                <div id="clockContainer">
                  <div id="hour"></div>
                  <div id="minute"></div>
                  <div id="second"></div>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        <script defer src="/js/saveUser.js" />
        <script defer src="/js/saveUserLogin.js" />
        <script defer src="/js/clock.js" />
        <script src="js/csvload.js"></script>
        <script defer src="https://www.papaparse.com/resources/js/papaparse.js"></script>
      </body>
    </html>
  );
};
