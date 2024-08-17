<script lang="ts">
	import { post } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		if (data && data.post) {
			document.title = `${data.post.title} | My Menthor` ?? 'Blog Post | My Menthor';
		}
	});
</script>

<section class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo">
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg"
	>
		<div class="max-lg:p-5 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			{#if data.post}
				<article class="prose lg:prose-xl">
					<h1 class="text-4xl font-bold mb-8">{data.post.title}</h1>
					{#if data.post.featuredImage?.node?.sourceUrl}
						<img
							src={data.post.featuredImage.node.sourceUrl}
							alt={data.post.title}
							class="mb-4 rounded-lg shadow-lg"
						/>
					{/if}
					<div class="text-gray-600 mb-4">
						<p>{new Date(data.post.date).toLocaleDateString()}</p>
					</div>
					<div class="">
						<article class="prose lg:prose-xl">
							{@html data.post.content}
						</article>
					</div>
				</article>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
</section>
