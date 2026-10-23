const ip = "SimpleVanilla.ru-cc.ru";
const ipNode = document.getElementById("serverIp");
const copyButton = document.getElementById("copyIp");
const feedback = document.getElementById("copyFeedback");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (ipNode) ipNode.textContent = ip;
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ip);
      feedback.textContent = "IP скопирован! Добавь его в Minecraft Java.";
      copyButton.innerHTML = "Скопировано ✓";
    } catch (e) {
      feedback.textContent = "Скопируй адрес вручную: " + ip;
    }
    window.setTimeout(() => {
      feedback.textContent = "";
      copyButton.innerHTML = 'Копировать <span>▣</span>';
    }, 3500);
  });
}
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();