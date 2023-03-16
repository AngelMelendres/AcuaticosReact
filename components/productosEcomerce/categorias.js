import React from "react";
import SearchProduct from "./searchProducto";

const CategoriasList = () => {
  return (
    <>
      {/* <!-- busqueda y categorias--> */}
      <div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
        <div class="product-categori">
          <SearchProduct/>
          <div class="filter-sidebar-left">
            <div class="title-left">
              <h3>CATEGORIAS</h3>
            </div>
            <div
              class="list-group list-group-collapse list-group-sm list-group-tree"
              id="list-group-men"
              data-children=".sub-men"
            >
              <div class="list-group-collapse sub-men">
                <a
                  class="list-group-item list-group-item-action"
                  href="#sub-men1"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-men1"
                >
                  Todas las categorias<small class="text-muted"></small>
                </a>
                <div
                  class="collapse show"
                  id="sub-men1"
                  data-parent="#list-group-men"
                >
                  <div class="list-group">
                    {/* <?php include "includes/mostrarCategoriasPage.php" ?> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fin busqueda y categorias--> */}
    </>
  );
};

export default CategoriasList;
