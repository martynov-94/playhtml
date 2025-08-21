const dateCardFolderPath = "../components/date-card";

class DateCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="date-card">
        <span class="date-card__month">июнь</span>
        <span class="date-card__date">20</span>
        <span class="date-card__time">17:00</span>
        <a class="date-card__webinar-link" href="#">На вебинар</a>
      </div>
    `;
  }
}

customElements.define('date-card', DateCard);