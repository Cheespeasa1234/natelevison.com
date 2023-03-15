<script>
	export let title, content, date, reactions, revindex
	let fireclicked, eyesclicked, flexclicked;
	import ReactionButton from './ReactionButton.svelte'

	function onFireClick() {
		if(!fireclicked)
			reactions.fire++; 
		fireclicked=true;
		reactToMessage(revindex, "fire")
	}

	function reactToMessage(idReversed, reaction) {
		fetch('https://leon.cheespeasa.repl.co/like/'+idReversed+"/"+reaction+"/"+new Date().getTime(), 
			{
				method: "GET",
				mode: 'cors',
				cache: "no-cache",
				credentials: 'same-origin'
			})
				.then(response => response.json())
				.then(res => console.log(res))
	}
</script>

<svelte:head>
	<title>JASON LEON LORE</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<style>
	.title {
		font-weight: bold;
		font-size: 20px;
	}
	.date {
		font-size: smaller;
		color: gray;
	}
	.content {
		transform: translateX(10px)
	}
	hr {
		margin: 10px;
	}
	div {
		transform: translateX(10px);
	}
</style>

<hr>
<div>
	<span class="title">{title}</span> -
	<span class="date">{date}</span>	
</div>
<p class="content">{content}</p>
<!-- <ReactionButton emoji="=" count={reactions.fire} on:click={onFireClick}/>
	<ReactionButton emoji="=" count={reactions.flex} on:click={()=>{if(!flexclicked)reactions.flex++; flexclicked=true;}}/>
		<ReactionButton emoji="=" count={reactions.eyes} on:click={()=>{if(!eyesclicked)reactions.eyes++; eyesclicked=true;}}/> -->