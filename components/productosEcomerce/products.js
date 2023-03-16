import React from "react";
import Product from "./product";

const Products = () => {
  return (
    <>
      <div class="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
        <div class="right-product-box">
          <div class="row product-categorie-box">
            <div class="tab-content">
              <div
                role="tabpanel"
                class="tab-pane fade show active"
                id="grid-view"
              >
                <div>
                  <Product/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
