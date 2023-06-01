/* eslint-disable quotes */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
          <p>Restaurant website created by <a href="https://github.com/Fadiyaqp" target="_blank" rel="noreferrer">Fadiya Qistina P</a></p>
        </footer>
      `;
  }
}

customElements.define("custom-footer", CustomFooter);
