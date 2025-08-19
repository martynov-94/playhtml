class NoEmailWarning extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="no-email-warning">
        <p class="no-email-warning__text">Если вы не видите данное письмо, перейдите по <a class="no-email-warning__link" href="#">ссылке</a></p>
      </section>
    `;
  }
}

customElements.define('no-email-warning', NoEmailWarning);