// 动态引入公共样式文件
const styles = [
  '/static/css/oimmei.css',
  '/static/css/vendor_oi_ux_assets_scss_spacing_scss.css',
  '/static/css/frontend.css',
  '/static/css/oi-expandable.css',
  '/static/css/frontend-services.css',
  '/static/css/cover.css'
]

styles.forEach(href => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
})
