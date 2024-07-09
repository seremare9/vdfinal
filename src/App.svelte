<script>
  import { onMount } from 'svelte';
  import Scroller from "@sveltejs/svelte-scroller"
  import * as d3 from "d3"

  // import Medalero from "./components/Medallero.svelte"
  import DebugScroller from "./components/DebugScroller.svelte"
  import Loremipsum from "./components/Loremipsum.svelte"
    import { fade } from 'svelte/transition';

  /* Variables para la data del medallero */
  let deportistas = []
  let filteredDeportistas = []

  /* Variables para el scroller 1 */
  let count
  let index
  let offset
  let progress
  let top = 0.1
  let threshold = 0.5
  let bottom = 0.9


  /* Variables para el scroller de los graficos */
  let count2
  let index2 =0;
  let offset2
  let progress2
  let top2 = 0.1
  let threshold2 = 0.6
  let bottom2 = 0.9
  let isAtEnd = false;

  function updateIndex2(newIndex) {
    if (isAtEnd) {
      return;
    }

    if (newIndex >= charts.length - 1) {
      index2 = charts.length - 1;
    } else {
      index2 = newIndex;
    }
  }
  

 /* Charts */
  let charts = {
    0: "lines_01.png",
    1: "lines_02.png",
    2: "lines_03.png",
    3: "lines_04.png",
  }


onMount(() => {
    const controller = new ScrollMagic.Controller();
    const chartContainer = document.querySelector('.image_container');
    const tween = gsap.fromTo(chartContainer, { opacity: 0 }, { opacity: 1, duration: 1 });

    const scene = new ScrollMagic.Scene({
        triggerElement: chartContainer,
        triggerHook: 0.5
    })
    .setTween(tween)
    .on('progress', function(event) {
      if (event.progress === 1) {
        isAtEnd = true;
        index2 = charts.length - 1;
      } else {
          isAtEnd = false;
      }
    })
    .addTo(controller);

    return () => {
        scene.destroy();
        controller.destroy();
    };
})


  // Efecto del cambio de fondo en el scroller del Papa
  let top1 = 0;
  let threshold1 = 0.5;
  let bottom1 = 0;
  let count1 = 2;
  let index1 = 0;
  let offset1 = 0;
  let progress1 = 0;

  // let backgroundImage = '/images/fondo-negro.png';

  // //Update background image when index changes
  // $: if (index1 === 1) {
  // backgroundImage = '/images/fondo-papa.png';
  // } else {
  // backgroundImage = '/images/fondo-negro.png';
  // }

  // Variables para el scroller del Papa
  let count3
  let index3
  let offset3
  let progress3
  let top3 = 0.1
  let threshold3 = 0.5
  let bottom3 = 0.9

</script>

<body>
  <main>

    <!-- Titulo y subtitulo-->
    <div class="header">
      <h1 id="typewriter" class="headline">
        <b>Entre la Realidad y la IA Generativa</b>
      </h1>
      <h2 id="subtitle" style="visibility: hidden;" class="subtitulo">
        <b> Un Viaje por las Imágenes Digitales</b>
      </h2>
      <script src="typewriter.js"></script>
      <p class="bajada">Por <a target="_blank" href="https://www.linkedin.com/in/serena-marelli/">SERENA MARELLI</a> y <a target="_blank" href="https://www.linkedin.com/in/josefina-jahde/">JOSEFINA JAHDE</a></p>
      <button id="scrollButton">Scroll Down</button>
    </div> 
    <!-- Fin de header -->

    <!-- Aparece el recuadro del prompt  -->
    <div id="targetSection" class="intro target-section">
      <div class="image-container">
              <img src="public/images/prompt.png" id="promptImage" class="cuadroPrompt" alt="Prompt" style="visibility: hidden;">
              <p id="textoPrompt" class="texto-prompt" style="visibility: hidden;">Imagen realista de...</p> 
      </div>
    </div>
    <!-- <div class="contenedor-gif-intro">
      <img src="public/gifs/intro.gif" alt="imagenes generadas con adobe firefly">
    </div> -->

    <div class="texto">
      <p>La Inteligencia Artificial Generativa (Gen AI) es una inteligencia artificial capaz de generar distintos tipos de contenido, como textos, imágenes y música, a partir de un input (prompt) del usuario.
        Esta tecnología utiliza bases de datos para su entrenamiento. La capacidad de las IA Generativa está creciendo a un ritmo cada vez más acelerado.</p>
    </div>

    <div class="intro-general">
        <div class="container-grafico1">
          <h2 class="subtitulo2">
            <b>Puntajes en tests de los sistemas de IA en diversas capacidades en comparación con el rendimiento humano</b>
          </h2>
          <div class="grafico-progreso">
            <iframe title="Graf1" aria-label="Interactive line chart" id="datawrapper-chart-LqQGR" src="https://datawrapper.dwcdn.net/LqQGR/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="450" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
            </script>
          </div>
        </div>
    </div> <!-- Cierre container-grafico-->
    <div class="texto">
      <p> Hasta hace menos de 15 años, la habilidad de las IA Generativas para reconocer imágenes, comprender textos y audio y entender lenguajes era muy limitada, y solían producir resultados que carecían de coherencia y precisión comparados con los estándares humanos. 
          Sin embargo, para el año 2023, el rendimiento de las IA Generativas alcanzó niveles comparables con el rendimiento humano.
          Por este motivo, cada vez se vuelve más dificil distinguir contenido realizado por una IA de uno creado por una persona. Esto es especialmente notable en las imágenes creadas con inteligencia artificial.
      </p>
    </div>

   <!-- introduccion generacion de imaganes con IA --> 
    <div class="foreground_container">
      <section class="step_foreground">
        <div class="epi_foreground"> 
          <p>La creación de imágenes generadas por inteligencia artificial ha revolucionado el ámbito visual y artístico en los últimos años.</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <p>La capacidad de las IA para producir obras de arte, fotografías y gráficos con alta precisión y detalle democratizó la creación visual, permitiendo a personas sin habilidades artísticas tradicionales generar contenido impactante.</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <p>Este contexto plantea desafíos significativos en cuanto a la autenticidad y la percepción de la realidad.</p>
        </div>
      </section>
    </div>

   
    <!-- GRAFICOS -->
    <div>
     <h2 class="subtitulo-graf1">
       <b>Cantidad de usuarios (en millones) de las plataformas - 2023</b>
     </h2>
    </div>
    <Scroller
    top={top2}
    threshold={threshold2}
    bottom={bottom2}
    bind:count={count2}
    bind:index={index2}
    bind:offset={offset2}
    bind:progress={progress2}
    >
    <div slot="background" class="image_container"> 
      <img src="/images/{charts[index2]}" alt="chart {index2}" class="charts"/>
    </div>
    <div slot="foreground" class="foreground_container2">
      <section class="step_foreground2">
        <div class="epi_foreground2">
          <h3> <a href="https://openai.com/index/dall-e-2/">DALL-E 2</a></h3>
          <p><b> Año de lanzamiento: </b>2021<br>
             <b> Desarrollador: </b> Open AI<br>
             <b> Precio: </b> El paquetes de 115 créditos cuesta 15 USD. Cada crédito permite generar una imagen.</p>
        </div>
      </section>
      <section class="step_foreground2">
        <div class="epi_foreground2">
          <h3> <a href="https://www.adobe.com/ar/products/firefly.html">Adobe Firefly</a></h3>
          <p><b> Año de lanzamiento: </b>2023<br>
            <b> Desarrollador: </b> Adobe <br>
            <b> Precio: </b> Existe un Plan gratuito (25 créditos mensuales) y un Plan Premium (100 créditos mensuales) por 5 USD</p>
        </div>
      </section>
      <section class="step_foreground2">
        <div class="epi_foreground2">
          <h3><a href="https://stability.ai/">Stable Diffusion</a></h3>
          <p><b> Año de lanzamiento: </b>2022<br>
            <b> Desarrollador: </b> Stability AI<br>
            <b> Precio: </b> El paquetes de 1000 créditos cuesta 10 USD. Cada imagen cuesta entre 0.2 y 8 créditos.</p>
        </div>
      </section>
      <section class="step_foreground2">
        <div class="epi_foreground2">
          <h3><a href="https://www.midjourney.com/home">Midjourney</a></h3>
          <p><b> Año de lanzamiento: </b>2022<br>
            <b> Desarrollador: </b> David Holz<br>
            <b> Precio: </b> Planes de entre 10 USD (Plan Básico) y 120 USD (Plan Mega)</p>
        </div>
      </section>
    </div>
    </Scroller>

    <!-- Grafico 2-->
    <div class="generacion-imagenes">
      <div class="container-graf2">
        <h2 class="subtitulo2">
          <b>Cantidad de imágenes generadas por día (en millones) 2023</b>
        </h2>
        <div class="grafico2">
          <iframe title="" aria-label="Column Chart" id="datawrapper-chart-YvGA0" src="https://datawrapper.dwcdn.net/YvGA0/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="373" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
          </script>
        </div>
      </div>
      <div class="texto"> 
        <p>La cantidad de imágenes generadas con inteligencia artificial (IA) ha crecido exponencialmente en los últimos años. 
        Cada día, millones de imágenes son creadas por diversas aplicaciones y plataformas que utilizan IA, reflejando el impresionante avance en esta tecnología. 
        Desde el arte digital hasta la generación de imágenes para publicidad, marketing, entretenimiento, y hasta en la investigación científica, la capacidad de 
        la IA para producir contenido visual de alta calidad y realismo es asombrosa.
        </p>
      </div>
    </div> 
    <!-- FIN GRAFICOS -->

    <!-- CASO DEL PAPA -->
     
    <div class="container-papa">
        <h1 class="headline-papa">
          <b>Un caso real: Imágenes del Papa Francisco</b>
        </h1>
        <div class="tweets-papa">
          <img src="./public/gifs/tweets-papa.gif" alt="gif de tweets del papa francisco">
        </div>
    </div>

    <!-- Scroller Papa -->
        <Scroller
        top={top3}
        threshold={threshold3}
        bottom={bottom3}
        bind:count={count3}
        bind:index={index3}
        bind:offset={offset3}
        bind:progress={progress3}
      >
      <div slot="background" class="fondo-fotos-papa"> 
        <img src="/images/fondo-papa.png" alt="chart {index1}" class="charts"
        />
        <img src="/images/fondo-papa.png" alt/>
      </div>
      <div slot="foreground" class="foreground_container">
        <section class="step_foreground">
          <div class="epi_foreground"> 
            <p>Estas imágenes, creadas con Midjourney, fueron compartidas en Reddit el 24 de Marzo de 2023. Tuvieron millones de vistas.</p>
          </div>
        </section>
        <section class="step_foreground">
          <div class="epi_foreground">
            <p>En redes sociales, se desató una competencia de retratar al Pontífice de 86 años en situaciones cada vez más extrañas.</p>
          </div>
        </section>
      </div>
      </Scroller>
      <div>
        <p class="texto">Según un análisis de The New York Times, han obtenido más visitas, “me gusta”  y comentarios en la red social X  
          que muchas otras imagenes generadas con IA. Desde entonces, Francisco se ha convertido en musa de la IA. Se  le ha 
          visto comiendo comida rápida, reuniéndose con extraterrestres,  tocando la guitarra en el Festival de Glastonbury, 
          buceando, bailando en  la playa y limpiando residuos biológicos con un traje de protección de  materiales peligrosos. 
          La avalancha de imágenes papales ha sido tan  voluminosa que algunos participantes en foros en línea sobre IA  generativa 
          han rogado a los creadores que utilicen otra inspiración</p>
      </div>

      <h1 class="subtitulo3">
        <b>Qué dijo el Papa Francisco?</b></h1>
      <div class='que-dijo'>
        <img src="./public/images/papa.png" alt="png del papa con una burbuja de texto">
        <p class="texto2">"La Inteligencia Artificial puede ser un instrumento de<br>contaminación cognitiva y de alteración de la realidad"</p>
      </div> 

    <!-- CONCLUSIÓN Y FOOTER -->

    <Scroller
    top={top3}
    threshold={threshold3}
    bottom={bottom3}
    bind:count={count3}
    bind:index={index3}
    bind:offset={offset3}
    bind:progress={progress3}
  >
  <div slot="background" class="fondo-fotos-papa"> 
    <!-- <img src="/images/fondo-papa.png" alt="chart {index1}" class="charts"
    />
    <img src="/images/fondo-papa.png" alt/> -->
  </div>
  <div slot="foreground" class="foreground_container">
    <section class="step_foreground">
      <div class="epi_foreground"> 
        <p>La IA Generativa ha abierto nuevas posibilidades en distintas áreas, promoviendo una mayor diversidad de voces y perspectivas.</p>
      </div>
    </section>
    <section class="step_foreground">
      <div class="epi_foreground">
        <p>Sin embargo, esta tecnología también plantea importantes desafíos éticos. La capacidad de crear imágenes realistas con facilidad ha facilitado
          la difusión de desinformación y el uso de <i>deepfakes</i>.</p>
      </div>
    </section>
    <section class="step_foreground">
      <div class="epi_foreground">
        <p>La evolución de esta tecnología seguirá influyendo en la manera en que creamos y percibimos las imágenes en el futuro.</p>
      </div>
    </section>
  </div>
  </Scroller>

  <footer class="footer">
    <div class="footer-container">
      <p class="atribucion"><b>Visualización de Datos - LTD</b><br>Serena Marelli y Josefina Jahde</p>
      <a href="https://docs.google.com/document/d/1VI5lXAqdY-2Y88m-2VXsxfW_3PgHwCF_eDMNdLPtXZs/edit?usp=sharing" class="hipervinculos-footer">Fuentes</a>
      <a href="https://github.com/seremare9/vdfinal" class="hipervinculos-footer">Ver código en GitHub</a>
    </div>
  </footer>

  </main>
</body> 

