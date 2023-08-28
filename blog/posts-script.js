// get all the blog posts
function getResults(postList) {
    postList.innerHTML = "";
    fetch("https://natelevison.com/blog/all?sort=date").then(res => res.json()).then(postsJSON => {
        const posts = postsJSON.filtered;
        // display the posts on a list element
        posts.forEach(post => {
            
            const container = document.createElement("div");

            const tags = document.createElement("div");
            tags.classList.add(["post-tags"]);
            for(let i = 0; i < post.tags.length; i++) {
                const tag = document.createElement("span");
                tag.classList.add(["post-tag"]);
                tag.innerHTML = post.tags[i];
                tags.appendChild(tag);
            }

            const title = document.createElement("span");
            title.classList.add(["post-title"]);
            title.innerHTML = post.title;

            const date = document.createElement("span");
            date.classList.add(["post-date"]);
            date.innerHTML = " - " + new Date(post.created).toLocaleDateString();

            container.appendChild(title);
            container.appendChild(date);
            container.appendChild(tags);

            container.classList.add(["post-container"])
            container.addEventListener("click", (ev) => {
                if(post.id == 0) window.location.href = "https://natelevison.com/blog/updates"
                else window.location.href = "https://natelevison.com/blog/article/" + post.name;
            });
            // clear postlist
            postList.appendChild(container);
        });
    });
}


function search() {
    postList.innerHTML = "Searching...";
    // make it look like something is happening ;)
    setTimeout(() => {
        getResults(postList);
    }, 500);
}

const postList = document.querySelector("#results");
const searchButton = document.querySelector("#search");
searchButton.onclick = search;
search();

const configButton = document.querySelector("#config");
const configModal = document.querySelector("#search-config-modal");
const configTags = document.querySelector("#search-config-tags");
const configFilteredMsg = document.querySelector("#filtered-msg")
const configIcon = document.querySelector("#config-icon");

let modalInvisible = true;
configButton.addEventListener("click", (ev) => {
    const movement = [
        {transform: "translateY(0%)"},
        {transform: "translateY(-200%)"},
    ];
    const motion = {
        duration: 200,
        easing: "ease-in-out"
    }

    // move the modal
    motion.direction = modalInvisible ? "reverse" : "normal";
    configModal.animate(movement, motion);
    configModal.style.transform = !modalInvisible ? "translateY(-200%)" : "translateY(0%)";
    modalInvisible = !modalInvisible;

    // animate the icon
    const iconMovement = [
        {transform: "rotate(0deg)"},
        {transform: "rotate(120deg)"},
    ];
    const iconMotion = {
        duration: 300,
        easing: "ease-in-out"
    }

    if(!selectedAny)
        configIcon.animate(iconMovement, iconMotion);
})

// get all tags
let selectedAny = false;
fetch("https://natelevison.com/blog/tags").then(res => res.json()).then(tagsJSON => {
    const tags = tagsJSON.tags;
    for(let tagName of tags) {
        const tag = document.createElement("span");
        tag.classList.add(["post-tag"]);
        tag.classList.add(["config-tag"]);
        tag.innerHTML = tagName; 
        tag.addEventListener("click", () => {
            tag.classList.toggle("tag-selected");

            const count = document.querySelectorAll(".tag-selected").length;
            configFilteredMsg.innerHTML = `Filtered Tags: ${count}`
            
            if(count > 0 != selectedAny) {
                // make it ease out of the rotation
                configIcon.classList.toggle("rotate");

                selectedAny = !selectedAny;
            }
        });
        configTags.appendChild(tag);
    }
});