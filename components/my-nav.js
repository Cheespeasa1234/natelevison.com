let a=(active)=>{
  class MyNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <nav>
        <div>
          <a class="nav-link${active[0]?' active':''}" href="${ROOT}">Home</a>
          <a class="nav-link${active[1]?' active':''}" href="${ROOT}about">About</a>
          <a class="nav-link${active[2]?' active':''}" href="${ROOT}blog">Blog</a>
          <a class="nav-link${active[3]?' active':''}" href="${ROOT}my_projects">Projects</a>
        </div>
        <div>
          <a class="nav-link scl" href="https://www.github.com/Cheespeasa1234" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="nav-link scl" href="https://www.twitter.com/CiY310" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a class="nav-link scl" href="mailto:natelevison@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </nav>
    `;
    }
  }
  customElements.define('my-nav', MyNav);
}