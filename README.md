# 鑫空回响

「鑫空回响——鑫信腾 ITC 乐队校园音乐分享会」微信公众号推文预览页，基于秀米公开音乐会模板适配。

## 在线预览

GitHub Pages 首页：`https://tinysymphony2007.github.io/`（以仓库 Pages 设置为准）

建议用手机宽度（375–430px）或浏览器开发者工具的移动视图查看。

## 模板来源

- 秀米公开免费模板：音乐会音乐节毕业季艺术节迎新晚会社团表演社团招新吉他社夏令营十佳歌手
- 模板链接：<https://b.xiumius.cn/board/v5/3FOLa/631106866>（2025-06-19 发布，秀米风格模板官方账号）
- 保留的模板结构：顶部标识区 → 主视觉文案区 → 日期地点信息卡 → `PART.01` 章节列表（CHAPTER + 编号条目 + 浅灰条目卡）→ `PART.02` 胶囊标签图文区 → `PART.03` 二维码区
- 保留的模板配色：蓝紫 `rgb(117,162,255)`、柠檬黄 `rgb(251,238,78)`、浅灰 `rgb(249,249,249)`
- 装饰素材（`images/xiumi-music-template/`）来自该模板公开 CDN，已本地化保存，避免外链失效

## 图片占位说明（正式发布前必须替换）

- 嘉宾照片 / 活动海报：当前为占位图（`images/xinkong-placeholder.jpg`），替换 `index.html` 中对应 `img src`
- 索票二维码 / 报名入口：尚未提供，页面中为虚线占位区，切勿以模板原二维码代替
- 面向公众号后台的粘贴版（无 script/style/svg、全内联样式）位于项目源目录：`鑫空回响-公众号粘贴版.html`

## 部署方法

```powershell
git add .
git commit -m "Update event preview"
git push
```

推送后 GitHub Pages 会自动更新（如未开启 Pages，请在仓库 Settings → Pages 中将分支设为 `main`）。
