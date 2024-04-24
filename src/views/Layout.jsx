<<<<<<< HEAD
const React = require("react");

module.exports = function Layout({ children, login, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/normalize.css" />
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
                    <li className="nav-item">
                      <div className="nav-link">{login}</div>
                    </li>
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
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Login
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <form className="form-login">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Authorization
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">Enter login</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInput1"
                              placeholder="введите логин"
                              required
                            />
                            <div class="modal-body">Enter password</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInput1"
                              placeholder="введите пароль"
                              required
                            />
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btnClose btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btnSave btn-primary">
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Registration
                    </button>

                    <div
                      class="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <form className="form-reg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="staticBackdropLabel"
                              >
                                Registration
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">Enter login</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputLogin"
                              placeholder="введите логин"
                              required
                            />
                            <div class="modal-body">Enter email</div>
                            <input
                              name="email"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputEmail"
                              placeholder="введите email"
                              required
                            />
                            <div class="modal-body">Enter password</div>
                            <input
                              name="login"
                              type="text"
                              className="form-control shadow rounded"
                              id="exampleInputPassword"
                              placeholder="введите пароль"
                              required
                            />
                            <span></span>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btnCloseReg btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                class="btnSaveReg btn-primary"
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
      </body>
    </html>
  );
};
=======
const React = require('react');

function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* <link rel='stylesheet' href='/css/style.css' /> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
>>>>>>> order
