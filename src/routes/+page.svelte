<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ posts } = data)
	function reRunLoadFunction() {
		// a) using depends
		invalidate('posts')

		// b)
		// invalidate('api/posts')

		// c)
		// invalidate((url) => url.href.includes('posts'))

		// d)
		// invalidateAll()
	}
</script>

<h1>Posts</h1>

<button on:click={reRunLoadFunction}>Rerun</button>

<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<ul>
		<li>
			<a href="/posts/{slug}">{title}</a>
		</li>
	</ul>
{/each}
