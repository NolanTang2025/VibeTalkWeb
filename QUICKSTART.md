# VibeTalk 快速部署指南

## 🚀 一键部署到 Vercel

### 准备工作（5分钟）

1. **创建 Vercel 账户**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账户登录

2. **准备邮箱配置**
   - 登录 Gmail 账户
   - 开启两步验证
   - 生成应用专用密码（用于发送邮件）

### 部署步骤（10分钟）

#### 方法一：使用 Vercel Dashboard（推荐）

1. **导入项目**
   ```bash
   # 首先将代码推送到 GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **在 Vercel 中创建项目**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 框架选择 "Create React App"
   - 点击 "Deploy"

3. **配置环境变量**
   在 Vercel 项目设置中添加：
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=你的Gmail邮箱
   SMTP_PASS=你的Gmail应用专用密码
   CONTACT_EMAIL=partnerships@vibetalk.com
   NODE_ENV=production
   ```

#### 方法二：使用命令行

```bash
# 安装 Vercel CLI
npm i -g vercel

# 运行部署脚本
./deploy.sh
```

### 域名配置（15分钟）

1. **在 Vercel 中添加域名**
   - 项目设置 → Domains
   - 添加 `VibeTalk.site`

2. **配置 DNS 记录**
   在你的域名提供商处添加：
   ```
   类型: A
   名称: @
   值: 76.76.19.61 (Vercel IP)
   
   类型: A  
   名称: www
   值: 76.76.19.61
   ```
   
   或使用 CNAME：
   ```
   类型: CNAME
   名称: www
   值: cname.vercel-dns.com
   ```

### 验证部署（5分钟）

1. **访问网站**
   - 打开 `https://VibeTalk.site`
   - 检查页面是否正常显示

2. **测试联系表单**
   - 填写并提交联系表单
   - 检查是否收到确认邮件
   - 检查是否收到表单提交邮件

## ✅ 部署完成！

你的 VibeTalk 网站现在已经成功部署并可以通过 `https://VibeTalk.site` 访问了。

## 🔧 常见问题

**Q: 邮件发送失败怎么办？**
A: 检查 Gmail 应用密码是否正确，确保开启了两步验证。

**Q: 域名无法访问？**
A: DNS 传播需要时间，请等待 24-48 小时。可以使用 DNS 检查工具验证。

**Q: 表单提交没有反应？**
A: 检查浏览器控制台错误，确认 API 路由配置正确。

## 📞 获取帮助

- 查看详细部署文档：`DEPLOYMENT.md`
- Vercel 文档：[vercel.com/docs](https://vercel.com/docs)
- 遇到问题请创建 GitHub Issue 