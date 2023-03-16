import React from "react";

const SearchProduct = () => {
  return (
    <>
      <div class="search-product">
        <input
          onkeyup="buscar_ahora($('#buscar').val());"
          type="text"
          class="form-control"
          id="buscar"
          name="buscar"
        />
        <button type="submit">
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
};

export default SearchProduct;
