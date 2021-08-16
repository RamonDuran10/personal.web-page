import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <div className="container">
      <div>
        <h1>
          Estos son algunos proyectos implementando herramientas con React,
          Vue3.
        </h1>
        <hr />
        <h3>
          <strong>Descripcíon:</strong> La mayoria de los proyectos mostrados
          estan hechos con React, y otros con Vue... Haciendo llamadas Api rest
          para obtener datos, manejos de estado, uso de hooks tales com
          useEffect, useEstate para almacenar estados, asi como tambien para
          anclarse al ciclo de vida de los componentes.. Uso de props para
          enviar información entre componentes, implementecion de metodo map
          para recorrer los arreglos de objetos y poder mostrar la informacion
          necessaria. uso de Rutas entre otras..{" "}
        </h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Vaz_BFXHhhVkM0lsINSXbznPi-jWLp_LZw&usqp=CAU"
              className="card-img-top"
              alt="imagen"
            />
            <div className="card-body">
              <p>
                En esta aplicacion podras visualizar todos los personaje de la
                seria Ryck and morty en una tarjeta con inforción acerca de cada
                uno de ellos.
              </p>
              <a
                href="https://ricky-and-morty-characters.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Dale un Vistazo o mira el codigo en mi Github...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclglcJGSWvL5y-xJ1GjfWb10jhluzxGXmdw&usqp=CAU"
              className="card-img-top"
              alt="imagen"
            />
            <div className="card-body">
              <p>
                Aplicacion en la cual podras ver y conocer todos los pokemons en
                una tarjeta la cual te muestra informacion sobre ellos, tambien
                podras visualizar sus respectivas evoluciones.
              </p>
              <a
                href="https://pokemons-app-45a4c.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Dale un Vistazo o mira el codigo en mi Github...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdv9xHhAp1Eml15NPQDbOWFPYW1ziTOwPY8Q&usqp=CAU"
              className="card-img-top"
              alt="imagen"
            />
            <div className="card-body">
              <p>
                Block de noticias de deportes, donde podras leer articulos
                deportivos, novedades, actualidad e alguna informacion de la
                persona que generó o llevo a cabo la infarcion, como por ejemplo
                su foto mostrada en un avatar, fecha y año en que se hizo la
                publicacion.
              </p>
              <a
                href="https://blog-sport-b7190.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Dale un Vistazo o mira el codigo en mi Github...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfOrjLrlwaO1hbCj5NpWfk0cxZyDNJHT6DQ&usqp=CAU"
              className="card-img-top"
              alt="imagen"
            />
            <div className="card-body">
              <p>
                {" "}
                Lista de persona con informacion obtenia me diante una API REST
                FAKE, y mostrando datos en tabla de Bootstrap detallando
                informacion personal de cada uno de los integrantes de a tabla{" "}
              </p>
              <a
                href="https://formulario-api-materialui.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Dale un Vistazo o mira el codigo en mi Github...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzNHCyjDxja9UdJ-XiRLTNZaya53iNCGjSA&usqp=CAU"
              className="card-img-top"
              alt="imagen"
            />
            <div className="card-body">
              <p>
                Aplicación desallada con VUE3, es un visualizador de peliculas,
                un poco antiguas obtenidas de una API REST, y mostrada en
                tarjeta dando a conocer alguna informacion sobre ella como por
                ejemplo actores, el año en que salio, genero y su imagen de
                presentacion, ta,bien convertida en PWA, con opcion de descarga
                para movil o desktop.
              </p>
              <a
                href="https://ramonduran10.github.io/movie-app-vue-PWA/"
                target="_blank"
                rel="noreferrer"
              >
                Dale un Vistazo o mira el codigo en mi Github...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
