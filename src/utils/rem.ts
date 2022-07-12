// 移动端rem适配方案
(function () {
  function autoRootFontSize () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px'
  }
  window.addEventListener('resize', autoRootFontSize)
  autoRootFontSize()
})()
