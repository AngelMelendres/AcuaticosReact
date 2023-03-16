import React from "react";

const Carrusel = () => {
  return (
    <>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
                height="450px"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block mb-3 ">
                <h1 className="text-white">Third slide label</h1>
                <h1 className="text-white">
                  Some representative placeholder content for the third slide.
                </h1>
                <div>
                  <button className="btn btn-danger">Ver Productos</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
                height="450px"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white">Third slide label</h1>
                <h1 className="text-white">
                  Some representative placeholder content for the third slide.
                </h1>
                <div>
                  <button className="btn btn-danger">Ver Productos</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrusel;
