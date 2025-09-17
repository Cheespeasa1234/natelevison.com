<script lang="ts">
    import { generalSeoTags, since } from "$lib/frontend_util";
    import Seo from "../../../Seo.svelte";
</script>

<svelte:head>
    <Seo
        title="About Bowie"
        desc="The portfolio of Bowie Lucy Levison."
        keys={[generalSeoTags, "dog", "portfolio"]}
        canonUrl="https://natelevison.com/about/bowie"
    />
</svelte:head>

<div class="cardcont">

<div class="card">
    <div class="card-body top-part" style="width: 100%">
        <h1 class="text-center card-title h5">About Bowie Lucy Levison</h1>
        <h2 class="mb-3 text-center card-subtitle mb-2 text-muted h6">Eating Napkins && Barking</h2>
        <p class="card-text">
            Bowie is a 6 year old, female, black goldendoodle, whose diverse hobbies include eating napkins, eating paper towels, dropping kibble all over the house, barking at literally nothing, and randomly deciding to be incredibly cute and likable at completely unpredictable intervals.
        </p>
        <p class="card-text">
            Bowie values eating, whether or not it is "edible". Napkins, paper towels, TOILET PAPER!, and literally anything smelly enough have made it into Bowie's stomach, and the two times she's had it pumped show you that.
        </p>
        <p class="card-text">
            Bowie means a lot to Nate, who relied on her emotional support throughout the tumultuous times of High School, and who appreciated her presence in many moments. She also has dedicated her life to causing trouble in the Levison household- but bringing the family together nonetheless.
        </p>
        <div style="margin-top: 20px; width: 100%; text-align: center; align-items: center;">
            <h2 class="card-subtitle mb-2 text-muted h6">Still interested?</h2>
            <div>
                <button disabled style="width: 200px" class="btn disabled">Bowie doesn't have a blog</button>
                <button disabled  style="width: 200px" class="btn disabled">Bowie doesn't have projects</button>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <img class="bowie-photo card-img-top" src="/img/bowie robotics.jpg" alt="Bowie wearing goggles and a robotics team brand sweatshirt.">
    <div class="card-body">
        <p class="mbcard-subtitle mb-2 text-muted h6">Bowie with Nate after a robotics tournament, March 18, 2025</p>
        <p class="card-text">Nate was a member of the robotics team in his Junior and Senior year. Bowie occasionally allowed Nate to put accessories on her.</p>
    </div>
</div>

</div>

<style>
    .bowie-photo {
        object-fit: cover;
        max-height: 60vh;
        width: auto;
        height: auto;
    }

    .cardcont {
        /* max-height: 80%; */
        max-width: 100%;
        display: flex;
        gap: 10px;
    }

    .card {
        width: 50%;
    }
</style>