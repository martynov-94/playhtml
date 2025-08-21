const siteLogoFolderPath = "../components/site-logo";

class SiteLogo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <img class="site-logo" src="${siteLogoFolderPath}/img/logo.svg" width="140" height="24" alt="Логотип организации в виде четырех стрелок, указывающих в центр">
    `;
  }
}

customElements.define('site-logo', SiteLogo);