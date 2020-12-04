import React from "react";
import Head from "next/head";
import Navigation from "./navigation";

//Creamos el container que vamos a usar en CADA PAGINA. Sera como un template
//Todas las pages son este container con un contenido personalizado
const Container = (props) => {
  return (
    <div>
      {/*Head contiene el style, en este caso un theme de bootswatch */}
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/litera/bootstrap.min.css"
        />
      </Head>
      {/*Importamos el componente navigation que el header presente en todas las paginas */}
      <Navigation />

      {/*El contenido de la pagina sera lo que llegue como props. En cada pagina ese contenido debe estar dentro de <Contaniner> */}
      <div className="container p-4">{props.children}</div>
    </div>
  );
};

export default Container;
