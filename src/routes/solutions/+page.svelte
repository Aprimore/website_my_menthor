<script lang="ts">
	import Section1 from '$lib/components/Solucoes/Section1.svelte';
	import Section2 from '$lib/components/Solucoes/Section2.svelte';
	import Section3 from '$lib/components/Solucoes/Section3.svelte';
	import Section4 from '$lib/components/Solucoes/Section4.svelte';
	import Section5 from '$lib/components/Solucoes/Section5.svelte';

	export let data;
	// console.log(data);
</script>

<div>
	<Section1 />
	<Section2 {data} />
	<Section3 />
	<Section4 />
	<Section5 />
</div>
