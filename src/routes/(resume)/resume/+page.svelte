<script lang="ts">

</script>

<div class="no-print">This will not show while printing.</div>
<p>Hello World</p>

<style>

    @page {
        size: 8.5in 11in;
        margin: 0.5in;
    }

    :global(body) {
        width: 7.5in;
        margin: 0 auto;
    }

    @media print {
        .no-print {
            display: none !important;
        }

        .yes-print {
            display: block !important;
        }
    }

</style>