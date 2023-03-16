import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const Contacto = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
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
          <div className="contact-box-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="contact-info-left">
                    <h2>INFORMACION DE CONTACTO</h2>
                    <p>
                      Acuaticos & Toscanini esta pendiente de tus concejos y
                      requerimientos, si tienes alguna pregunta o quieres que
                      nos comuniquemos contigo, porfavor envianos un mensaje con
                      tus datos correspondientes, y a la brebedad nos
                      comuncaremos contigo.{" "}
                    </p>

                    <div>
                      <ul>
                        <li>
                          <p>
                            <i classNameName="fa-solid fa-route"></i>
                            Quito-Ecuador. Av. 9 de octubre N26-84 y Marieta de
                            Veintilla(MATRIZ) Riobamba - Avenida Canonigo Ramos
                            y Nicolas Delgado (PUNTO DE ENTREGA) Guayaquil -
                            Valentina González Silgad
                          </p>
                        </li>
                        <li>
                          <p>
                            <i classNameName="fa-solid fa-square-phone"></i>
                            +593 987054324 <br></br>+593 983445550 <br></br>+593
                            984764505<br></br> +593 989800549
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="fa-regular fa-envelopes-bulk"></i>
                            gerencia@acuaticostoscanini.com
                            ventas_quito@acuaticostoscanini.com
                            ventas_rio@acuaticostoscani.com
                            ventas_gye@acuaticostoscani.com
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="contact-form-right">
                    <h2>Ayudanos a contactarte</h2>
                    <p>
                      Nuestro equipo respondera tus preguntas y tus dudas muy
                      rapido.
                    </p>
                    <form id="contactorm">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Tu nombre"
                              required
                              data-error="Porfavor ingresa tu nombre"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Tu Email"
                              id="email"
                              className="form-control"
                              name="name"
                              required
                              data-error="Porfavor ingresa tu email"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="name"
                              placeholder="Ciudad "
                              required
                              data-error="Porfavor ingresa tu apellido"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="message"
                              placeholder="Invianos tu mensaje"
                              rows="4"
                              data-error="Escribe tu mensaje"
                              required
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                          <div className="submit-button text-center">
                            <button
                              className="btn hvr-hover"
                              id="submit"
                              type="submit"
                            >
                              Enviar Mensaje
                            </button>
                            <div
                              id="msgSubmit"
                              className="h3 text-center hidden"
                            ></div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contacto;
