class IndexView {
  constructor() {
    window.addEventListener("hashchange", (e) => this.onRouteChange(e));
    this.slot = document.getElementById("slot");
    this.main = document.getElementById("main");
  }

  onRouteChange(e) {
    const hashLocation = window.location.hash.substring(1);
    this.loadContent(hashLocation);
  }

  loadContent(uri) {
      const contentUri = `${uri}.html`
       fetch(contentUri)
      .then((r) => r.text())
      .then((content) => this.updateSlot(content))
      .then((content) => this.updateMain(content))
  }

  updateSlot(content) {
    this.slot.innerHTML = content;
  }

  updateMain(content) {
    this.main.innerHTML = content;
  }
}
new IndexView();
