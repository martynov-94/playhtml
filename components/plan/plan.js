class Plan extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="plan">
        <p class="plan__description">
          Мы расскажем все детали о&nbsp;том, с чего начать свой путь в&nbsp;разработке сайтов, и как вырасти в востребованного специалиста. Все вопросы Вы сможете задать спикеру на&nbsp;вебинаре :)
        </p>
        <h3 class="plan__steps-title">План вебинара:</h3>
        <ul class="plan__steps-list">
          <li class="plan__steps-list-item">Кто такой frontend&#8209;разработчик?</li>
          <li class="plan__steps-list-item">Какие навыки сейчас востребованы?</li>
          <li class="plan__steps-list-item">Как устроиться в&nbsp;компанию после обучения?</li>
        </ul>
      </section>
    `;
  }
}

customElements.define('plan-block', Plan);