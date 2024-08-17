<script lang="ts">
	import LoadingSkeleton from '$lib/components/LoadingSkeleton.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let loading = true;
	let posts = [];

	onMount(async () => {
		try {
			// await new Promise((resolve) => setTimeout(resolve, 50));
			posts = data.posts.map((post) => post.node);
			console.log(posts);
			return;
		} catch (error) {
			console.error('Error loading posts:', error);
		} finally {
			loading = false;
		}
	});
</script>

<section class="blog-list sm:bg-[#F1F1F9] w-full relative rounded-lg max-sm:p-2 py-5 Exo">
	<div class="max-sm:bg-[#F1F1F9] max-w-screen-2xl mx-auto flex-col lg:flex-row rounded-lg p-4">
		{#if loading}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
				<!-- <p class="text-xl">Loading ...</p> -->
				<LoadingSkeleton />
				<LoadingSkeleton />
				<LoadingSkeleton />
				<LoadingSkeleton />
			</div>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
				{#each posts as post}
					<a
						href={`/v1/blog/${post.databaseId}/${post.slug}`}
						class="border rounded-lg overflow-hidden hover:shadow-lg"
					>
						{#if post.featuredImage?.node?.sourceUrl}
							<img
								src={post.featuredImage.node.sourceUrl}
								alt={post.title}
								class="w-full h-52 object-cover"
							/>
						{:else}
							<div class="h-52 bg-gray-200"></div>
						{/if}
						<div class="p-4 flex flex-col justify-between">
							<div class="min-h-24">
								<h2 class="text-xl font-semibold mb-2 line-clamp-3">
									{post.title}
								</h2>
							</div>
							<div class="mt-auto">
								<p class="text-gray-600">
									{new Date(post.date).toLocaleDateString()}
								</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}

		<div class="max-lg:p-5 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto"></div>
	</div>
</section>
