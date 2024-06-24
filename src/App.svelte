<script>
  import { onMount } from 'svelte';
  import Scroller from "@sveltejs/svelte-scroller"
  import * as d3 from "d3"

  // import Medalero from "./components/Medallero.svelte"
  import DebugScroller from "./components/DebugScroller.svelte"
  import Loremipsum from "./components/Loremipsum.svelte"

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
  let index2
  let offset2
  let progress2
  let top2 = 0.1
  let threshold2 = 0.5
  let bottom2 = 0.9

 /* Charts */
  let charts = {
    0: "lines_01.png",
    1: "lines_02.png",
    2: "lines_03.png",
    3: "lines_04.png"
  }

onMount(() => {
    const controller = new ScrollMagic.Controller();

    const tween = gsap.fromTo(chartContainer, { opacity: 0 }, { opacity: 1, duration: 1 });

    const scene = new ScrollMagic.Scene({
        triggerElement: chartContainer,
        triggerHook: 0.5
    })
    .setTween(tween)
    .addTo(controller);

    return () => {
        scene.destroy();
        controller.destroy();
    };
})
  

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
              <img src="public/images/firefly1.jpg" class="image" alt="Imagen 1">  
         
      </div>
    </div>


    {#if progress < 1}
    <DebugScroller
      index={index}
      count={count}
      offset={offset}
      progress={progress}
    />
    {/if}
  
    <!-- Primer scroller: Introducción -->
      <Scroller
        top={top}
        threshold={threshold}
        bottom={bottom}
        bind:count={count}
        bind:index={index}
        bind:offset={offset}
        bind:progress={progress}
      >
  
      <div slot="foreground" class="foreground_container"> 
        <section id="step1" class="step_foreground">
          <div class="epi_foreground"> 
            <p>La creación de imágenes generadas por inteligencia artificial ha revolucionado el ámbito visual y artístico en los últimos años. </p>
          </div>
        </section>
        <section id="step2" class="step_foreground">
          <div class="epi_foreground">
            <p>La capacidad de las IA para producir obras de arte, fotografías y gráficos con alta precisión y detalle democratizó la creación visual, permitiendo a personas sin habilidades artísticas tradicionales generar contenido impactante.</p>
          </div>
        </section>
        <section id="step3" class="step_foreground">
          <div class="epi_foreground">
            <p>Este contexto plantea desafíos significativos en cuanto a la autenticidad y la percepción de la realidad.</p>
          </div>
        </section>
      </div>
    </Scroller>
  
    <!-- Texto despues del 1er scroller -->
    <div class="intro-graficos">
      <p>Acá podemos explicar un poco (no muy extenso) cuando empezó a crecer la IA antes de mostrar los gráficos</p>
    </div>

    
     <!-- Carrusel de imagenes VS
     <div class="carousel-container">
      <h3 class="carousel-title">Realidad VS IA</h3>
      <div class="carousel">

        <div class="carousel-slide">
            <button class="prev" onclick="moveCarousel(-1)">&#10094;</button>
            <div class="carousel-slide">
              <img class="img-vs" src="public/images/vs1.1.jpg" alt="Imagen Real 1">
              <img class="img-vs" src="public/images/vs1.2.jpg" alt="Imagen IA 1">
            </div> 
            <button class="next" onclick="moveCarousel(1)">&#10095;</button>
          </div>

          <div class="carousel-slide">
              <button class="prev" onclick="moveCarousel(-1)">&#10094;</button>
              <div class="carousel-slide">
                <img class="img-vs" src="public/images/vs2.1.jpg" alt="Imagen Real 2">
                <img class="img-vs" src="public/images/vs2.2.jpg" alt="Imagen IA 2">
              </div>
              <button class="next" onclick="moveCarousel(1)">&#10095;</button>
          </div>

          <div class="carousel-slide">
              <button class="prev" onclick="moveCarousel(-1)">&#10094;</button>
              <div class="carousel-slide">
                <img class="img-vs" src="public/images/vs3.1.jpg" alt="Imagen Real 3">
                <img class="img-vs" src="public/images/vs3.2.jpg" alt="Imagen IA 3">
              </div>
              <button class="next" onclick="moveCarousel(1)">&#10095;</button>
          </div>

          <div class="carousel-slide">
              <button class="prev" onclick="moveCarousel(-1)">&#10094;</button>
              <div class="carousel-slide">
                <img class="img-vs" src="public/images/vs4.1.jpg" alt="Imagen Real 4">
                <img class="img-vs" src="public/images/vs4.2.jpg" alt="Imagen IA 4">
              </div>
              <button class="next" onclick="moveCarousel(1)">&#10095;</button>
          </div>

      </div>
  </div>
 FIN DE CARRUSEL-->
   
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
    <img src="/images/{charts[index2]}" alt="chart {index2}" class="charts"
    />
  </div>
  <div slot="foreground" class="foreground_container2">
    <section class="step_foreground2">
      <div class="epi_foreground2">
        <h3>{index2 + 1}</h3>
        <p>Explicación parte 1</p>
      </div>
    </section>
    <section class="step_foreground2">
      <div class="epi_foreground2">
        <h3>{index2 + 1}</h3>
        <p>Explicación parte 2</p>
      </div>
    </section>
    <section class="step_foreground2">
      <div class="epi_foreground2">
        <h3>{index2 + 1}</h3>
        <p>Explicación parte 3</p>
      </div>
    </section>
    <section class="step_foreground2">
      <div class="epi_foreground2">
        <h3>Seccion {index2 + 1}</h3>
        <p>Explicación parte 4</p>
      </div>
    </section>
  </div>
</Scroller>
  <!---
    <div class="Graficos-container">
      <div class="grafico-uno">
        <h3 class="grafico-title-1">Datos sobre las plataformas mas utilizadas (2023)</h3>
        <img src="public/imagenes/grafico1.jpg" alt="grafico 1">
        <p class="texCostado">En noviembre de 2023, la base de usuarios de Midjourney llegaba a  los 16 millones, con usuarios activos diarios que fluctúan 
          entre 1,2 y 2,5 millones.  Esta sólida participación refleja el éxito de Midjourney a la hora de  captar y retener la atención 
          de un público diverso. <br> El mayor segmento de su base de usuarios, que comprende 37,76%, se sitúa  en el grupo de edad de 25 a 34 años. Le sigue el grupo 
          demográfico de 
          </p>
          <p class="texAbajo">18 a 25 años, que constituye el 26,18% de sus usuarios.  Estas estadísticas indican que Midjourney es especialmente popular entre  
            los adultos más jóvenes y los millennials. <br> Los ingresos previstos de Midjourney para finales de 2023 ascienden a la  impresionante 
            cifra de $300 millones. Esta cifra es un claro indicador  del éxito financiero de la plataforma y de su eficaz estrategia de  monetización. <br>Las 
            estadísticas que rodean a Midjourney dibujan una imagen vívida de  una plataforma que no sólo está creciendo rápidamente, sino que también 
            está influyendo profundamente en el panorama del arte generado por IA.  Desde su amplia base de usuarios y sus impresionantes previsiones de 
            ingresos hasta la entusiasta participación de la comunidad en  plataformas como Discord y Reddit, Midjourney es un testimonio del  potencial 
            de la IA en el ámbito creativo.</p>
      </div>
  
      <div class="grafico-dos">
        <h3 class="graficos-title-2">Datos sobre la cantidad de imágenes generadas por dia en las plataformas mas usadas (2023)</h3>
        <img src="public/imagenes/grafico2.jpg" alt="grafico 2">
  
      </div>
    </div>
-->
    <!-- FIN GRAFICOS -->


  
    <!-- CASO DEL PAPA -->
     <!-- <div>
      <h3>Impacto de las Imágenes Generadas por IA</h3>
      <img src="public/imagenes/imagen-papa.jpg" alt="Papa Francisco">
      <p>Según la revista Forbes, la imagen se creó utilizando Midjourney, una herramienta de inteligencia artificial que permite generar imágenes falsas 
        increíblemente realistas. Luego, la imagen se compartió el viernes 24 de marzo de 2023  en Reddit antes de llegar a Twitter durante ese fin de 
        semana. <br>Según un análisis de The New York Times, han obtenido más visitas, “me gusta” y comentarios que muchas otras fotos generadas con IA
        (229.000 me gusta y 20,6 millones de visitas). A demás, esto provocó una carrera por retratar al líder de 86 años en situaciones cada vez más 
        extrañas. <br>La prevalencia de Francisco en las imágenes generadas por IA es resultado de una combinación perfecta de factores, según expertos 
        religiosos. Tras diez años al frente de la Iglesia católica, se lo reconoce al instante en todo el mundo. Se lo considera un líder más accesible que 
        su predecesor, el papa Benedicto XVI, de línea más dura. Y cuando se combina con un repentino interés por las nuevas herramientas de IA, Francisco, 
        que en la vida real suele aparecer en ambientes formales, se convierte en la elección recurrente de los creadores de imaganes con IA para colocarlo en 
        los escenarios más incongruentes.</p>
     </div> -->
  
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


<style>
  /* Estilos para el scroller */
  .foreground_container2 {
    pointer-events: none;
    padding-left: 50%;
  }

  /* CUADRITO DEL COSTADO*/
  .step_foreground2 {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 70vh;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: white;
    padding: 1em;
    margin: 0 0 2em 0;
    ;
  }

  /* parte negra del cuadradito*/
  .epi_foreground2 {
    padding: 20px;
    max-width: 150px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .image_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .charts{
    width: 700px;
  }
</style>