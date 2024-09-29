import { useState } from "react";
import reactLogo from "./assets/react.svg";
import perro1 from "./assets/r.png";
import "./App.css";

function Imagen({ ruta, title }) {
  return (
    <div className="section-ga">
      <section>
        <img src={ruta} alt="" />
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          a. Adipisci corrupti voluptatem architecto facere odio nulla non! Nemo
          incidunt obcaecati facilis cumque optio vitae magni unde, accusamus
          facere! Autem?
        </p>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="galery">
      <div>
        <h1>Galeria React</h1>
      </div>
      <div>
        <Imagen ruta={perro1} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
        <Imagen ruta={reactLogo} title="Logo React" />
      </div>
    </div>
  );
}

export default App;
