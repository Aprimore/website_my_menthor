<!-- <script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log('DATA: ... \n', data.props.posts);
</script>

<h1 class="text-white">Blog test</h1>
{#if data.props.posts}
	<h1>BLOG:</h1>
	<ul>
		{#each data.props.posts as post}
			<li>{@html post.id}</li>
			<li>{@html post.title}</li>
			<li>{@html post.content}</li>
		{/each}
	</ul>
{/if} -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

</script>

<!-- {#if data.posts}
	<h1>BLOG:</h1>
	<ul>
		{#each data.posts.data.posts.nodes as post}
			<li>{@html post?.id}</li>
			<li>{@html post?.title}</li>
			<li>{@html post?.content}</li>
		{/each}
	</ul>
{/if} -->
<h1>Blog.</h1>
<section class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo">
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg"
	>
		<div class="max-lg:p-5 lg:w-2/3 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			{#if data.posts}
				<h1 class="text-4xl font-bold mb-8">BLOG:</h1>
				<ul class="list-disc space-y-4">
					{#each data.posts.data.posts.nodes as post}
						<li class="prose">
							<h2 class="text-2xl font-bold mb-2">{post?.title}</h2>
							<div class="prose">{@html post?.content}</div>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</section>
