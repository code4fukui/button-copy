export class ButtonCopy extends HTMLElement {
  constructor() {
    super();
    const btn = document.createElement("button");
    btn.textContent = this.textContent;
    this.textContent = "";
    this.appendChild(btn);

    btn.onclick = async () => {
      const target = this.getAttribute("target");
      const inp = document.getElementById(target);
      inp.select();
      inp.setSelectionRange(0, 99999); // for mobile
      try {
        await navigator.clipboard.writeText(inp.value);
      } catch (e) {
        console.log(e);
        alert("コピーに失敗しました。" + e);
      }
    };
  }
};
customElements.define("button-copy", ButtonCopy);
