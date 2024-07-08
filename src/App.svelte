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

  // Variables para el scroller del Papa
  let count1
  let index1
  let offset1
  let progress1
  let top1 = 0.1
  let threshold1 = 0.5
  let bottom1 = 0.9

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

    <!-- Aparece el recuadro del prompt y luego las imagenes que hicimos con IA -->
    <div id="targetSection" class="intro target-section">
      <div class="image-container">
              <img src="public/images/prompt.png" id="promptImage" class="cuadroPrompt" alt="Prompt" style="visibility: hidden;">
              <p id="textoPrompt" class="texto-prompt" style="visibility: hidden;">Imagen realista de...</p> 
      </div>
    </div>

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
    {#if progress < 1}
    <DebugScroller
      index={index}
      count={count}
      offset={offset}
      progress={progress}
    />
    {/if}
  
    <!-- Primer scroller: Introducción -->
    <!-- <Scroller
      top={top}
      threshold={threshold}
      bottom={bottom}
      bind:count={count}
      bind:index={index}
      bind:offset={offset}
      bind:progress={progress}
    >
    <div slot="background" class="fondo-container-rojo"> 
      <img src="/images/fondo_container_chico.png" alt="chart {index2}" class="charts"
      />
    </div>
    <div slot="foreground" class="foreground_container">
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
    </Scroller>  -->

   
    <!-- GRAFICOS -->
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
<!-- 






    <div class="container_graf2">
      <img class="grafico2" src="./public/images/grafico2.jpg" alt="grafico 2">
      <p class="texto"> La cantidad de imágenes generadas con inteligencia artificial (IA) ha crecido exponencialmente 
        en los últimos años. Cada día, millones de imágenes son creadas por diversas aplicaciones y 
        plataformas que utilizan IA, reflejando el impresionante avance en esta tecnología. 
        Desde el arte digital hasta la generación de imágenes para publicidad, marketing, entretenimiento, y 
        hasta en la investigación científica, la capacidad de la IA para producir contenido visual de alta 
        calidad y realismo es asombrosa.
      </p>
    </div> -->

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
        top={top1}
        threshold={threshold1}
        bottom={bottom1}
        bind:count={count1}
        bind:index={index1}
        bind:offset={offset1}
        bind:progress={progress1}
      >
      <div slot="background" class="fondo-fotos-papa"> 
        <img src="/images/fondo-papa.png" alt/>
      </div>
      <div slot="foreground" class="foreground_container">
        <section class="step_foreground">
          <div class="epi_foreground3"> 
            <p>Estas imágenes, creadas con Midjourney, fueron compartidas en Reddit el 24 de Marzo de 2023. Tuvieron millones de vistas.</p>
          </div>
        </section>
        <section class="step_foreground">
          <div class="epi_foreground3">
            <p>En redes sociales, se desató una competencia de retratar al Pontífice de 86 años en situaciones cada vez más extrañas.</p>
          </div>
        </section>
      </div>
      </Scroller>

     
















     <!-- FIN CASO PAPA -->
  
    <!-- ¿QUÉ DIJO EL PAPA? -->
     <!-- <div class="comentario">
      <h4>¿Qué dijo el papa? </h4>
      <p>El papa Francisco ha alertado de los malos usos de la IA, que puede ser un instrumento de “contaminación cognitiva” y “de alteración de la realidad 
        a través de narrativas parcial o totalmente falsas que se creen, y se comparten, como si fueran verdaderas”. <br>Así ha citado el ejemplo de las 
        fake news que hoy se sirve de deepfakes, es decir, de la creación y difusión de imágenes que parecen perfectamente verosímiles pero que son falsas. 
        “También yo he sido objeto de ello”, revela. </p>
        TWEETS APARECIENDO -->
        <!-- <div class="container-tweets">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">ç
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt=""> -->
        <!-- </div> -->
     <!-- </div>  -->

  
  <!-- Segundo scroller -->
  
  <!-- <Scroller
    top={top2}
    threshold={threshold2}
    bottom={bottom2}
    bind:count={count2}
    bind:index={index2}
    bind:offset={offset2}
    bind:progress={progress2}
  >
    <div slot="background" class="image_container">
      <img src="/images/{charts[index2]}" alt="chart {index2}" class="charts"
      />
    </div>
    <div slot="foreground" class="foreground_container">
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index2 + 1}</h3>
          <p>Gráfico 1</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index2 + 1}</h3>
          <p>Gráfico 1</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index2 + 1}</h3>
          <p>Gráfico 1</p>
        </div>
      </section>
    </div>
  </Scroller> -->
  </main>
</body> 

