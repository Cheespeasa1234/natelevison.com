class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <footer>
      <div class="footer-sec">
        <h5>This Website</h5>
        <ul>
          <li class="footer-link"><a href="${ROOT}">Home</a></li>
          <li class="footer-link"><a href="${ROOT}about/">About</a></li>
          <li class="footer-link"><a href="${ROOT}contact">Contact</a></li>
          <li class="footer-link"><a href="${ROOT}my_projects/">Projects</a></li>
        </ul>
      </div>
      <div class="footer-sec">
        <h5>Links & Resources</h5>
        <ul>
          <li class="footer-link">
            <a href="https://www.codecademy.com">Learn code</a>
          </li>
          <li class="footer-link">
            <a href="https://www.w3schools.com">Learn code</a>
          </li>
          <li class="footer-link">
            <a href="../about-site">About this site</a>
          </li>
        </ul>
      </div>
      <div class="footer-sec">
        <h5>Contact & Help</h5>
        <ul>
          <li class="footer-link">
            <a href="mailto:natelevison@gmail.com">Email me</a>
          </li>
          <li class="footer-link">
            <a
              href="https://github.com/Cheespeasa1234/cheespeasa1234.github.io/issues/new"
              >Report an issue</a
            >
          </li>
          <li class="footer-link">
            <a href="mailto:natelevison@gmail.com">Legal</a>
          </li>
        </ul>
      </div>
    </footer>
    `;
  }
}

customElements.define("my-foot", MyFooter);