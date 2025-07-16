<script lang="ts">

    // How does scattergories work:
    // 1. Pick a letter (not x or y or z etc.)
    // 2. Pick 10 categories
    // 3. 2 minute timer

    const letters = "abcdefghijklmnoprstuvw".split("");
    const categories = [
        "Animal",
        "Book Title",
        "City",
        "Clothing",
        "Country",
        "Famous Person",
        "Food",
        "Fruit",
        "Game",
        "Historical Figure",
        "Instrument",
        "Job",
        "Movie Title",
        "Plant",
        "Restaurant",
        "School Subject",
        "Sport",
        "TV Show",
        "Vehicle",
        "Verb",
        "Color",
        "Brand",
        "Body Part",
        "Song Title",
        "Tool",
        "Vacation Destination",
        "Superhero",
        "Board Game",
        "Thing in the Kitchen",
        "Thing You Throw Away"
    ];

    let letter: string = $state("");
    let categoryIndices: number[] = $state([]);

    function uniqueIndices(listLength: number, count: number = 10): number[] {
        if (count > listLength) {
            throw new Error("Count cannot be greater than list length.");
        }

        const indices: Set<number> = new Set();
        while (indices.size < count) {
            const index = Math.floor(Math.random() * listLength);
            indices.add(index);
        }

        const list: number[] = [];
        for (const index of indices) {
            list.push(index);
        }

        return list;
    }


    function start() {
        letter = letters[Math.floor(Math.random() * letters.length)];
        categoryIndices = uniqueIndices(categories.length, 10);
    }

</script>

<button onclick={start}>Start</button>

<h2>{letter}</h2>
<ol>
    {#each categoryIndices as index}
        <li>{categories[index]}</li>
    {/each}
</ol>