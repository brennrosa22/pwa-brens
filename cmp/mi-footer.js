class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      De la Rosa Arguello Brenda`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
