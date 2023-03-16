import Link from "next/link";
import React from "react";
const HeaderEcomerce = () => {
  return (
    <>
      <header className="main-header">
        <nav
          className="
          navbar navbar-expand-lg navbar-light
          bg-light
          navbar-default
          bootsnav
        "
        >
          <div className="container">
            <div className="navbar-header">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" href="/">
                ACUATICOS & TOSCANINI <img src="" className="logo" alt="" />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    INICIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/productos">
                    PRODUCTOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/nosotros">
                    NOSOTROS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contacto">
                    CONTACTANOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderEcomerce;
