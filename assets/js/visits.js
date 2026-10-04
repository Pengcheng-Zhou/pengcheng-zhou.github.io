// Count only public visits, never local previews.
if (location.hostname === "pengcheng-zhou.github.io") {
  const script = document.createElement("script");
  script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  script.async = true;
  document.head.appendChild(script);
}
