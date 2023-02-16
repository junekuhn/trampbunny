

<script>
	import { onMount } from 'svelte';
          // create a new hydra-synth instance
          onMount(() => {
            var hydra = new Hydra({ detectAudio: false })
      osc(4, 0.1, 1.2).out()
          });

</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

