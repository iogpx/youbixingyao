# 右弼星曜 - 占卜算命获客网页

## 项目描述

这是一个为占卜、算命服务设计的专业获客网页。通过优雅的设计和直观的用户体验，帮助您吸引潜在客户，提供详细的服务介绍、成功案例、咨询流程等信息。

## 核心功能

- **服务介绍**：展示六大核心服务（性格分析、事业判断、感情分析等）
- **成功案例**：展示客户的咨询成果和五星评价
- **咨询流程**：清晰展示四步咨询流程，降低客户咨询门槛
- **在线表单**：收集客户的微信号、问题等信息，用于精准跟进
- **微信二维码**：支持展示二维码，让客户直接扫码加微信
- **常见问题**：回答客户常见疑虑，建立信任
- **响应式设计**：完美支持桌面端和移动端
- **神秘优雅风格**：深色调背景、星空效果、金色点缀

## 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **CSS3** - 现代样式和动画

## 项目结构

```
src/
├── components/          # React组件
│   ├── Header.tsx      # 顶部导航栏
│   ├── Hero.tsx        # 首屏Banner
│   ├── Services.tsx    # 服务介绍
│   ├── Cases.tsx       # 成功案例
│   ├── Process.tsx     # 咨询流程
│   ├── ContactForm.tsx # 联系表单
│   ├── FAQ.tsx         # 常见问题
│   ├── Footer.tsx      # 页脚
│   └── *.css          # 对应组件样式
├── App.tsx            # 主应用组件
├── App.css            # 应用全局样式
├── main.tsx           # 入口文件
└── index.css          # 全局样式
```

## 快速开始

### 前置要求

- 建议安装 Node.js 16+ 和 npm/yarn。如果您当前系统尚未全局配置 Node.js，项目已经包含一个本地便携版 Node.js，可直接运行。

### 安装依赖

```bash
# 使用本地便携 Node
./node-portable/node-v20.20.2-win-x64/npm.cmd install
```

### 开发模式

```bash
./node-portable/node-v20.20.2-win-x64/npm.cmd run dev
```

访问 http://localhost:5173 查看页面

### 也可以使用 VS Code 任务

打开命令面板后选择“任务: 运行任务”，然后选择：
- Install Dependencies
- Run Dev Server
- Build Project

### 生产构建

```bash
npm run build
# 或
yarn build
```

### 预览生产构建

```bash
npm run preview
```

## 自定义配置

### 当前联系方式

- 微信号：`youbixingyao`
- 邮箱：`1939196383@qq.com`

### 添加微信二维码

1. 在 `public` 文件夹中放入您的微信二维码图片，命名为 `wechat-qrcode.png`
2. 页面会自动读取该图片并展示在“直接扫码加我”区块。

### VS Code 任务

如果您使用的是 VS Code，可以直接运行以下任务：
- `Install Dependencies`
- `Run Dev Server`
- `Build Project`

任务会使用项目内的便携 Node.js 运行环境，无需全局安装 Node.js。
### 配置表单邮件发送

可使用以下服务之一：

#### 方案1：EmailJS（推荐）

1. 注册 [EmailJS](https://www.emailjs.com/)
2. 获取 Service ID 和 Template ID
3. 在 `src/components/ContactForm.tsx` 中集成

#### 方案2：后端API

连接您的后端API处理表单提交

### 颜色主题

主要颜色定义在CSS文件中：
- 金色强调：`#d4af37`
- 深蓝背景：`#0f3460`、`#16213e`
- 文本颜色：`#e0e0e0`、`#a0a0a0`

## 部署

### 部署到Vercel（推荐）

```bash
npm install -g vercel
vercel
```

### 部署到其他平台

生成的 `dist/` 文件夹可部署到任何静态网站托管服务：
- GitHub Pages
- Netlify
- Cloudflare Pages
- 阿里云OSS
- 腾讯云COS等

## 功能扩展建议

1. **动态内容管理** - 集成CMS管理服务和案例
2. **用户评价系统** - 支持客户动态添加评价
3. **在线预约** - 集成日历，支持自动排期
4. **数据分析** - 集成Google Analytics或百度统计
5. **多语言支持** - 支持中英文切换
6. **支付集成** - 支持在线预付款
7. **客户管理系统** - 后端CRM系统管理客户数据

## 浏览器兼容性

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- 移动浏览器 (iOS Safari, Chrome Mobile)

## 常见问题

**Q: 如何修改页面标题？**
A: 编辑 `index.html` 中的 `<title>` 标签

**Q: 如何添加更多服务项？**
A: 在 `src/components/Services.tsx` 的 `services` 数组中添加新项

**Q: 如何修改颜色主题？**
A: 在各组件的 CSS 文件中修改金色 `#d4af37` 为其他颜色

## 许可证

MIT

## 联系支持

如有问题或建议，请通过微信或邮箱与我们联系。

---

**看懂人生阶段，减少错误选择 —— 右弼星曜**
