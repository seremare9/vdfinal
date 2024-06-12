<script>
  import Scroller from "@sveltejs/svelte-scroller"
  import {onMount} from "svelte"
  import * as d3 from "d3"

  import Medallero from "./components/Medallero.svelte"
  import DebugScroller from "./components/DebugScroller.svelte"
  import Loremipsum from "./components/Loremipsum.svelte"

  /* Variables para la data del medallero */
  let deportistas = []
  let filteredDeportistas = []

  /* Variables para el scroller1 */
  let count
  let index
  let offset
  let progress
  let top = 0.1
  let threshold = 0.5
  let bottom = 0.9

  /* Variables para el scroller 2 */
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
  }

  onMount(() => {
    d3.csv("./data/deportistas.csv", d3.autoType).then(data => {
      deportistas = data
      filteredDeportistas = deportistas
    })
  })

  $: {
    // Es un observer que se ejecuta cuando cambia el valor de index
    switch (index) {
      case 0:
        filteredDeportistas = deportistas
        break
      case 1:
        filteredDeportistas = deportistas.filter(d => d.genero === "F")
        break
      case 2:
        filteredDeportistas = deportistas.filter(d => d.genero === "M")
        break
      case 3:
        filteredDeportistas = deportistas.filter(
          d => d.continente === "América",
        )
        break
      default:
        filteredDeportistas = deportistas
    }
    console.log(filteredDeportistas)
  }
</script>

<main>
  <div class="header">
    <!-- <img src="/images/olympics-logo.png" width="100" alt="anillos" /> -->
    <h1 id="typewriter" class="headline">
      <b>Entre la Realidad y la IA Generativa</b>
    </h1>
    <h3 id="subtitle" style="visibility: hidden;" class="subtitulo">
      <b> Un Viaje por las Imágenes Digitales</b>
    </h3>
    <script src="typewriter.js"></script>
    <p class="bajada">Por <a href="https://www.linkedin.com/in/serena-marelli/">SERENA MARELLI</a> y <a href="https://www.linkedin.com/in/josefina-jahde/">JOSEFINA JAHDE</a></p>
    <button id="scrollButton">Scroll Down</button>
    <!-- <div id="targetSection" class="target-section">
      <p>This is the target section.</p>
    </div> -->
  </div> <!-- Fin de header -->

    <!-- Acá irían apareciendo las imagenes q hicimos con IA -->
  <div id="targetSection" class="intro target-section">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Imágenes con Efecto de Aparición</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="image-container">
            <img src="public/images/firefly1.jpg" class="image" alt="Imagen 1"> <!-- aurora boreal -->
            <img src="public/images/firefly2.jpg" class="image" alt="Imagen 2"> <!-- pavo real -->
            <img src="public/images/firefly3.jpg" class="image" alt="Imagen 3"> <!-- leon -->
            <img src="public/images/firefly4.jpg" class="image" alt="Imagen 4"> <!-- pájaro azul -->
            <img src="public/images/firefly5.jpg" class="image" alt="Imagen 5"> <!-- gatitos -->
            <img src="public/images/firefly6.jpg" class="image" alt="Imagen 6"> <!-- montaña -->
            <img src="public/images/designer1.jpeg" class="image" alt="Imagen 7"> <!-- mariposa -->
            <img src="public/images/firefly7.jpg" class="image" alt="Imagen 8"> 
            <img src="public/images/firefly9.jpg" class="image" alt="Imagen 9"> 
            <img src="public/images/firefly8.jpg" class="image" alt="Imagen 10"> 
            <img src="public/images/firefly10.jpg" class="image" alt="Imagen 11"> 
        </div>
    </body>
    <div class="introduccion">
        <p>La creación de imágenes generadas por inteligencia artificial ha revolucionado el ámbito visual y artístico en los últimos años. Estas imágenes han alcanzado niveles de realismo y creatividad que antes eran impensables. La capacidad de las IA para producir obras de arte, fotografías y gráficos con alta precisión y detalle no solo ha democratizado la creación visual, permitiendo a personas sin habilidades artísticas tradicionales generar contenido impactante, sino que también ha planteado desafíos significativos en cuanto a la autenticidad y la percepción de la realidad.</p>
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
  <!-- Primer scroller -->
  <Scroller
    top={top}
    threshold={threshold}
    bottom={bottom}
    bind:count={count}
    bind:index={index}
    bind:offset={offset}
    bind:progress={progress}
  >
    <div slot="background">
      <Medallero deportistas={filteredDeportistas} />
    </div>
    <div slot="foreground" class="foreground_container">
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Todos los deportistas</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas femeninas</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas masculinos</p>
        </div>
      </section>
      <section class="step_foreground">
        <div class="epi_foreground">
          <h3>Seccion {index + 1}</h3>
          <p>Deportistas americanos</p>
        </div>
      </section>
    </div>
  </Scroller>

  <div class="lorem_ipsum">
    <Loremipsum />
  </div>
  

  <!-- Segundo scroller -->
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
  </Scroller>
</main>

<div class="lorem_ipsum">
  <Loremipsum />
</div>

<style>
 
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  /* .main {
    background-color: black;
  } */
  .main {
  /* Set maximum width and center the container horizontally */
    /* max-width: 800px; */
    margin: 0 auto;
  }
  .header {
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    /* margin-top: 50px; */
    margin-bottom: 50px;
    background-color:black;
    height: 100vh;
    position: static;
    margin-bottom: 100px;
    /* word-wrap: break-word; */
    /* width: 100vw; */

    /* width: 100; */
  }

  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
    margin-bottom: 50px;
    background-color:black;
    word-wrap: break-word;
    position: static;
    /* width: 100; */
  }

  .headline {
    /* font-size: 100px; */
    line-height: 1.2;
    font-weight: black;
    text-align: center;
    margin: 20px;
    color:white;
    font-family: 'IBM Plex Mono';
    width: 100%;
  }
  .subtitulo {
    font-size: 40px;
    line-height: 1.2;
    font-family: 'IBM Plex Mono';
    color:white;
  }
  .bajada {
    
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
    font-family:'IBM Plex Mono';
    color:white
    
  }

  a {
    color:mediumpurple;
    font-family:'IBM Plex Mono';
    font-weight: bold;
    text-decoration: underline;
  }

  .headline b {
    display: block;
    font-size: 70px;
  }

  .introduccion {
    background-color: black;
    color: white;
    font-family: 'IBM Plex Mono';
    font-size:larger;
    text-align: justify;
    

  }

  /* Estilos para el scroller */
  .foreground_container {
    pointer-events: none;
    padding-left: 50%;
    /* background-color: aquamarine; */
  }

  .step_foreground { /* los recuadros con borde negro de la derecha */
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100vh;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: white;
    padding: 1em;
    margin: 0 0 2em 0;
  }
  .epi_foreground { /* recuadro negro donde dice la seccion */
    padding: 20px;
    max-width: 150px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .lorem_ipsum {
    margin: 100px auto;
    max-width: 740px;
    color: white;
  }
  .image_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
