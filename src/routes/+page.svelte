

<script>
	import { onMount } from 'svelte';
          // create a new hydra-synth instance
          onMount(() => {
            var hydra = new Hydra({ detectAudio: false })
            src(o0).layer(osc(5, 0.1, 0.1).colorama(0.99).luma(()=>Math.sin(time*0.9)*0.5))
  .modulate(shape(4).repeat(4,4).luma(), 2)
  .modulateRepeat(osc(10, 0.01).rotate(1), 0.6,4, 0.1, 0.01)
  .modulate(noise(0.8), 0.3)
  .out(o0)
          });

</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

