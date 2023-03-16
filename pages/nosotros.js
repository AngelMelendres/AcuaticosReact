import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Nosotros</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="IMPORTADORA Y DISTRIBUIDORA ECUATORIANA DE TODO TIPO DE INSTRUMENTOS DE MEDICION Y ANALISIS AMBIENTAL E INSDUSTRIAL QUITO-GUAYAQUIL-RIOBAMBA-ECUADOR.  "
        />
        <meta
          name="keywords"
          content="acuaticos,toscanini,venta,termometros,ph,refractometro,ecuador,quito,cuenca,riobamba,guayaquil,lupas,plantas,dijital,analogico,precicion,instrumentos,medicion,ambiental,salud,cloro,alcoholimetro"
        />
        <meta name="author" content="Angel Melendres" />
      </Head>
      <Layout>
        <div>
          <div className="all-title-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Comprar</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a
                        target="_blank"
                        href="https://www.mercadolibre.com.ec/perfil/ACUATICOS+EC"
                      >
                        MERCADO LIBRE
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/ElMundoAcuaticoEc"
                      >
                        MARKETPLACE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- Start About Page  --> */}
          <div className="about-box-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="noo-sh-title">
                    Que es Acuaticos & Toscanini Ec.
                  </h2>
                  <p>
                    "La empresa se encarga de las ventas y distribución de
                    instrumentos y tecnologías de evaluación al ambiente,
                    comprendiendo las áreas de la calidad del agua, del suelo y
                    del aire. También, se posiciona con una amplia línea en el
                    área de la temperatura y otros productos que permitirán a
                    nuestros clientes obtener resultados eficaces ya sea como
                    emprendedores y otros colegas empresarios. Además, brinda
                    asesoría técnica en el manejo y uso correcto de los
                    productos para que nuestros clientes puedan cumplir con sus
                    proyectos, emprendimientos, etc Todo esto no seria posible
                    si no fuese por nuestro grupo de trabajo el cual está
                    conformado por nuestros asesores de venta, asesor técnico y
                    personal administrativo, mismos que día a día buscan las
                    mejores estratégicas y habilidades para brindar a nuestra
                    honorable clientela la mejor experiencia posible. No solo
                    nos encargamos de la venta directa en la ciudad de Quito
                    (Matriz) y Riobamba (Puno de Entrega), si no, que también
                    disponemos del servicio de entregas a todo el país por medio
                    de las empresas transportadoras TramacoExpress, Servienrega
                    y Encomiendas. Nuestras formas de pago son por medio de
                    efectivo, transferencias o de depósitos bancarios, tarjetas
                    de débito o crédito y payclub.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="banner-frame">
                    <img
                      className="img-thumbnail img-fluid"
                      src="images/local.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-sm-6 col-lg-4">
                  <div className="service-block-inner">
                    <h3>Garantia en tu producto</h3>
                    <p>
                      Nuestra empresa ofrece garantias en todos nuestros
                      productos, por defecto de fabrica, no incluye caidas ni
                      golpes.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="service-block-inner">
                    <h3>Personal eficiente </h3>
                    <p>
                      Contamos con asesores de ventas y asesores tecnicos,
                      mismos que te brindaran la ayuda necesaria para un buen
                      uso de nuestros equipos.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="service-block-inner">
                    <h3>Adquisicion de productos</h3>
                    <p>
                      Contamos con la matriz en la ciudad de Quito, y punto de
                      entraga en Riobamba. Para las demas ciudades desponemos de
                      servicios de envios{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h1>
                  <b>
                    Llega a nuestro local fisico sigueindo las instruciones en
                    tu mapa
                  </b>
                </h1>
              </div>
              <div className="text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.177517146678!2d-78.4942169!3d-0.1984874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585a267c12be7%3A0x7f1a5f17e9747bc5!2sAcu%C3%A1ticos%20Toscanini%20Solutions!5e0!3m2!1ses!2sec!4v1676580558673!5m2!1ses!2sec"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Nosotros;
