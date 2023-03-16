import React from "react";

const Categorias = () => {
  return (
    <>
      <div className="categories-shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/termometros.jpg" alt="" />
                <a className="btn hvr-hover" href="productos.php">
                  TERMOMETROS
                </a>
              </div>
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/soilmether.jpg" alt="" />
                <a className="btn hvr-hover" href="productos.php">
                  INSTRUMENTOS DEL SUELO
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/papeltst.jpg" alt="" />
                <a className="btn hvr-hover" href="productos.php">
                  PH-METROS
                </a>
              </div>
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/refractometro.jpg" alt="" />
                <a className="btn hvr-hover" href="productos.php">
                  REFRACTOMETROS
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/dataloger.jpg" alt="" />
                <a className="btn hvr-hover" href="productos.php">
                  DATA LOGGERS
                </a>
              </div>
              <div className="shop-cat-box">
                <img className="img-fluid" src="images/otros.jpg" alt="" />
                <a className="btn hvr-hover" href="productos.php">
                  OTROS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorias;
