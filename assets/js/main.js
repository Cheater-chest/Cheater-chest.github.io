// 返回顶部按钮：滚动超过一屏后显示，点击回到顶部
(function () {
  "use strict";
  var btn = document.createElement("button");
  btn.id = "back-top";
  btn.type = "button";
  btn.setAttribute("aria-label", "返回顶部");
  btn.textContent = "↑";
  document.body.appendChild(btn);

  var show = false;
  function onScroll() {
    var shouldShow = window.scrollY > window.innerHeight;
    if (shouldShow !== show) {
      show = shouldShow;
      btn.classList.toggle("show", show);
    }
  }
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
