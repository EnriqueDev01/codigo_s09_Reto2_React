// import './App.css';
import Flor from './components/Flor'

function App() {
  let floresNew={
    lirios:{name:"Lirios",url:"https://www.florespedia.com/Imagenes/flores-bonitas-lirios.jpg"},
    dalias:{name:"Dalias",url:"https://www.florespedia.com/Imagenes/flores-hermosas-dalias.jpg"},
    florCerezo:{name:"Flor de Cerezo",url:"https://www.florespedia.com/Imagenes/flores-hermosas-del-cerezo.jpg"},
    orquideas:{name:"Orquideas",url:"https://www.florespedia.com/Imagenes/flores-bonitas-orquideas.jpg"}
  }
  let floresRelevant={
    girasoles:{name:"Girasoles",url:"https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg"},
    rosas:{name:"Rosas",url:"https://www.florespedia.com/Imagenes/tipos-de-flores-bonitas-rosas.jpg"},
    tulipanes:{name:"Tulipanes",url:"https://www.florespedia.com/Imagenes/nombre-de-flores-bonitas-tulipanes.jpg"},
    margaritas:{name:"Margaritas",url:"https://www.florespedia.com/Imagenes/tipos-de-flores-margaritas.jpg"}
  }
  return (
    <div className="container">      
      <h4 className="mt-4">New</h4>    
      <section className="row d-flex justify-content-between">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresNew.lirios.name} urlFlor={floresNew.lirios.url}/>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresNew.dalias.name} urlFlor={floresNew.dalias.url}/>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresNew.florCerezo.name} urlFlor={floresNew.florCerezo.url}/>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresNew.orquideas.name} urlFlor={floresNew.orquideas.url}/>
        </div>                      
      </section>
      <h4 className="mt-4">Relevant</h4>    
      <section className="row d-flex justify-content-between">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresRelevant.girasoles.name} urlFlor={floresRelevant.girasoles.url}/>
        </div>                                      
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresRelevant.rosas.name} urlFlor={floresRelevant.rosas.url}/>
        </div> 
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresRelevant.tulipanes.name} urlFlor={floresRelevant.tulipanes.url}/>
        </div> 
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Flor nameFlor={floresRelevant.margaritas.name} urlFlor={floresRelevant.margaritas.url}/>
        </div> 
      </section>    
    </div>
  );
}

export default App;
