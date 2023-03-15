<script>

	import Article from './Article.svelte';
	import { fly } from 'svelte/transition'
	
	let articles;
	let shownotice = true;
	
	let fetcher = fetch('https://leon.cheespeasa.repl.co/articles/d'+new Date().getTime(), {
		mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
	})
	.then(response => response.json())
	.then(res => articles = res['articles'].reverse())
	
</script>

<style>
	h1 {
		text-align: center;
	}
	p {
		color: rgba(255, 0, 0);
		opacity: 20%;
	}
	.noticeholder:hover * {
		opacity: 100%;
	}
	.okay {
		opacity: 0%;
	}
	.noticeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.noticeholder * {
		font-size: small;
		transition: opacity 0.5s;
	}
	p {
		text-align: center;
	}
	
	
</style>

{#if shownotice}
<div class="noticeholder" out:fly="{{ y: -50, duration: 1000 }}">
	<p style="notice">
	Notice: This site stores a <a href="https://en.wikipedia.org/wiki/Hash_function">hash</a> of your IP for security purposes. @nlevison25 for questions.
</p>
	<button on:click={()=>{shownotice=false}} class="okay">Okay</button>	
</div>
{/if}

<h1>= JASON LEON LORE =</h1>
{#await fetcher}
	<p>...waiting</p>
{:then number}
	{#each number as article, index}
		<Article {...article} index={index}, revindex={articles.length - index - 1} />
	{/each}
{:catch error}
	<p style="color: red">Oops! Something went wrong. Try reloading this page.</p>
{/await}