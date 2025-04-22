<script>
    import Logo from "./Logo.svelte";

</script>
<div class='main'>
    <div class="logo-area">
        <Logo />
        <div class="hr"></div>
    </div>
    <div>
        <div class="row">
            <div>Mon-Fri 11:00AM-10:00PM</div>
            <div>+1(877) 527-7454</div>
        </div>
        <div class="row">
            <div>411 Elm Street, Dallas TX</div>
        </div>
    </div>
</div>

<style>
    .main {
        border: 3px solid var(--color-300);
        width: 8in;
        height: 4in;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        font-size: 2em;

    }

    .logo-area {
        margin: auto;
        width: fit-content;
    }

    .hr {
        border: 3px solid var(--color-300);
        width: 100%;
        height: 0;
        margin-top: 20px;
    }

    .row {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
</style>