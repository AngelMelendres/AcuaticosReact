import Layout from "../components/Layout";
import Head from "next/head";
import SocialBar from "../components/SocialBar";
import Carrusel from "../components/indexEcomerce/Carrusel";
import Categorias from "../components/indexEcomerce/Categorias";
import Ventajas from "../components/indexEcomerce/Ventajas";

export default function Home() {
  return (
    <div>

      <Head>
        <title>Acuaticos Toscanini</title>
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
        <Carrusel />
        <Categorias />
        <Ventajas/>
      </Layout>
    </div>
  );
}
