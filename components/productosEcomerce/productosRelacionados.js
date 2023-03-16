import React from "react";

const ProductosRelacionados = () => {
  return (
    <>
      <div class="row my-5">
        <div class="col-lg-12">
          <div class="title-all text-center">
            <h1>Productos relacionados</h1>
          </div>
          <div class="featured-products-box owl-carousel owl-theme">
            <div class="item mx-1">
              <div class="products-single fix">
                <div class="box-img-hover">
                  <img
                    src="https://i0.wp.com/esferacreativa.com/wp-content/uploads/2021/09/herramientas-del-trabajo-en-equipo-MadridNYC.png?fit=1024%2C512&ssl=1"
                    alt="Image"
                    width="270px"
                    height="270px"
                  />
                  <div class="mask-icon">
                    <a class="cart" href="#">
                      Ver producto
                    </a>
                  </div>
                </div>
                <div class="why-text">
                  <h4> Nombre</h4>
                  <h5> Precio $</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductosRelacionados;
