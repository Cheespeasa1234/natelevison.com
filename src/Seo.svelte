<script lang="ts">
    import { onMount } from "svelte";

    const { title, desc, keys, canonUrl }: { title: string, desc: string, keys: (string | string[])[], canonUrl: string } = $props();
    const joined = [];
    for (const key of keys) {
        if (Array.isArray(key)) {
            joined.push(key.join(","));
        } else {
            joined.push(key);
        }
    }
    const strKeys = joined.join(",");

    const fullTitle = `${title} | Nate Levison`;

    onMount(() => {
        document.title = fullTitle;
    });
</script>

<title>{fullTitle}</title>
<link rel="canonical" href={canonUrl}>
<meta name="description" content={desc} />
<meta name="keywords" content={strKeys} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={desc} />
<meta property="og:url" content={canonUrl} />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={desc} />