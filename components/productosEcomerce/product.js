import React from "react";

const Product = () => {
  return (
    <>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div class="products-single fix">
            <div class="box-img-hover">
              <div class="type-lb">
                <p class="new">New</p>
              </div>
              <img
                src="https://i0.wp.com/esferacreativa.com/wp-content/uploads/2021/09/herramientas-del-trabajo-en-equipo-MadridNYC.png?fit=1024%2C512&ssl=1"
                class=""
                alt="Image"
                width="270px"
                height="270px"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
          <div class="why-text full-width">
            <h4>Nombre</h4>

            <p>Descripcion</p>
            <a class="btn hvr-hover" target="_blank" href="">
              Comprar
            </a>
            <a class="btn hvr-hover" target="_blank" href="">
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
