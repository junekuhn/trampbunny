<script>
	import { onMount } from 'svelte';
    import '../app.css';
          // create a new hydra-synth instanc
     let width, height;
     let myCanvas; 
      onMount(() => {
        var hydra = new Hydra({ 
          detectAudio: false,
          })

        src(o0).layer(osc(5, 0.1, 0.1).colorama(0.99).luma(()=>Math.sin(time*0.9)*0.5))
          .modulate(shape(4).repeat(4,4).luma(), 2)
          .modulateRepeat(osc(10, 0.01).rotate(1), 0.6,4, 0.1, 0.01)
          .modulate(noise(0.8), 0.3)
          .out(o0);

          myCanvas = document.querySelector('canvas');
      });

      function handleResize() {
                myCanvas.width = width;
                myCanvas.height = height;
            // console.log(this.canvas)
          };

  </script>

<!-- <svelte:window on:resize={handleResize} bind:innerWidth={width} bind:innerHeight={height}/> -->

<slot></slot>