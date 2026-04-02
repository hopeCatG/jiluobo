// 动态引入公共样式文件
const styles = [
  '/static/css/4e38c0f433ae46c0a6de119e369aa0ce.css',
  '/static/css/5b7e9e7b009044debcd7e0ce053f5040.css',
  '/static/css/b2138a91885043a39d736cb119970ad3.css',
]

styles.forEach(href => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
})


const localeScript = document.createElement('script')
localeScript.type = 'text/javascript'
localeScript.textContent = "var locale = 'en'"
document.body.appendChild(localeScript)

const js = [
  'static/js/oimmei.js',
  '/static/js/router.min.js',
  '/static/js/3d5a662a229040dcbde67886acc51e74.js',
  '/static/js/translator.min.js',
  '/static/js/6546da03a0d64c55b36c273bcccf5b52.js',
  '/static/js/0ea9f631baac41cdb407a0462346c2be.js',
  '/static/js/frontend.js',
  '/static/js/698d85a5da2a46f29d6efe78fa75f511.js',
  '/static/js/9e9a4180ea2b49a78662b934e0060376.js',
]

js.forEach(src => {
  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
  console.log(script)
})
