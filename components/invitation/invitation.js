const invitationFolderPath = "../components/invitation";

class Invitation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="invitation">
        <h1 class="invitation__title">Хотите научиться web-разработке?</h1>
        <p class="invitation__welcome-text">Приглашаем Вас<br>на бесплатный вебинар<br>«Тренды Frontend-разработки 2020»</p>
        <date-card class="invitation__date"></date-card>
        <img class="invitation__image" src="${invitationFolderPath}/img/man_with_laptop.png" width="256" height="234" alt="Человек сидит в позе лотоса с ноутбуком и проводит вебинар">
      </section>
    `;
  }
}

customElements.define('invitation-block', Invitation);