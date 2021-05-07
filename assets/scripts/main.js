
export default function Main(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    selectedCategory: null,
    selectedOption: "all",
    render: function () {
      let html = `
      <section></section>
      `;
      this.parent.innerHTML = html;
    }

  }
}