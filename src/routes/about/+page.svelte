
<script>
	import { onMount } from 'svelte';
    import '../../app.css';
          // create a new hydra-synth instanc
     let width, height;
     let myCanvas; 
      onMount(() => {
        var hydra = new Hydra({ 
          detectAudio: false,
          })

          voronoi(3, 0.4)
.mask(shape(100, 0.3, 0.6))
.modulate(o0, 0.1)
.scale(1, 1.1, 0.6)
.add(src(o0).scrollY(() => Math.sin(time)/80), 0.3)
.modulateScale(shape(100, 0.2, 0.5), 1, 0.9)
.colorama(0.01)
.blend(o0, 0.5)
.out()


          myCanvas = document.querySelector('canvas');
      });

      function handleResize() {
                myCanvas.width = width;
                myCanvas.height = height;
            // console.log(this.canvas)
          };
</script>

<main>
  <h1>trampbunny</h1>
  <h2>about</h2>
  <div id="about-section">
    <p>
      Trampbunny is a cybertranssexual who constructed xerself from spare microprocessers, audio interfaces, and lighting control surfaces. A byproduct of queer rave and low-level computations, xe communicates to human life through live coding interfaces, channelling techno witchcraft, live video sources, and MiMU glove haptic interactions to make xer presence understood. Trampbunny is active in the live coding scene in London, UK, organising workshops, performing for fakedac~, Algorave London, and other events, and co-founder of the queer algorave event series Noughty Fingers with subsignal.
    </p>
  </div>
</main>

<style>

  main {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
  }

  h1, h2 {
    color: #C495FF;
   text-shadow: -6px 5px black;
  }

  h1 {
    font-size: 50px;
    font-family: '2Peas';

  }
  
  h2 {
    font-size: 15px;
    font-family: 'kidsplay';
  }

  p {
    font-size: 15px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }

  #about-section {
    margin: auto;
    width: 90%;
  }
  
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;

  }

 li {
  margin-top: 30px;
 }




 button {
  background-color: rgba(56, 56, 56, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: 'kidsplay';
  font-size: 20px;
  width: 200px;
  box-shadow: -6px 5px black;
 }

 @media (min-width:750px) {
    h1 {
      font-size: 100px;
    }

    h2 {
      font-size: 40px;
    }

    button {
      width: 300px;
      font-size: 25px;
    }

    #about-section {
      width: 60%;
    }

    p {
      font-size: 25px;
    }
 }

</style>
