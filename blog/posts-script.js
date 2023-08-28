// get all the blog posts
function getResults(postList) {
    fetch("https://natelevison.com/blog/all").then(res => res.json()).then(postsJSON => {
        const posts = postsJSON.filtered;
        console.log("Got the posts: " + JSON.stringify(posts))
        // display the posts on a list element
        posts.forEach(post => {
            const container = document.createElement("div")
            const date = new Date(post.created).toDateString();
            let tagsStr = "";
            for (let tag of post.tags)
                tagsStr += `<span class="post-tag">${tag}</span>`;
            container.innerHTML = /* html */ `
                <span class="post-title">${post.title}</span> - <span class="post-date">${date}</span>
                <br>
                <div class="post-tags">${tagsStr}</div>
            `;
    
            container.classList.add(["post-container"])
            postList.appendChild(container);
        });
    });
}

const postList = document.querySelector("#results");
getResults(postList);
const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", (ev) => {
    getResults(postList);
})