class SiteLogo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="site-logo">
        <img class="site-logo__image" src="" alt="Логотип организации в виде четырех стрелок, указывающих в центр">
        <p class="site-logo__text">PlayHTML</p>
      </div>
    `;
  }
}

customElements.define('site-logo', SiteLogo);