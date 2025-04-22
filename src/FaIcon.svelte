<script lang="ts">
    const { cat, ico, classes, ..._rest }: { cat: string, ico: string, classes?: string, _rest?: any[] } = $props();
</script>
    <i class="{cat} {ico} {classes}"></i>

<style>
    .cont {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .faicon-small {
        font-size: small;
    }
</style>