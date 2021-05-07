
export default function Main(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    selectedCategory: null,
    selectedOption: "all",
    render: function () {
      let html = `
      <section class="js-main-content">
        <h2>BSALE STORE/h2>
      </section>
      `;
      this.parent.innerHTML = html;
    }

  }
}