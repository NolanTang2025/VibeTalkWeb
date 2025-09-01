# VibeTalk 部署指南

## Vercel 部署步骤

### 1. 准备工作

1. 确保你有一个 [Vercel](https://vercel.com) 账户
2. 安装 Vercel CLI（可选）：
   ```bash
   npm i -g vercel
   ```

### 2. 项目准备

1. 确保所有代码已提交到 Git 仓库
2. 安装依赖：
   ```bash
   npm install
   ```
3. 构建项目测试：
   ```bash
   npm run build
   ```

### 3. 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=partnerships@vibetalk.com
NODE_ENV=production
```

#### 获取 Gmail App Password：

1. 登录 Google 账户
2. 启用两步验证
3. 生成应用专用密码
4. 使用生成的密码作为 `SMTP_PASS`

### 4. 部署到 Vercel

#### 方法一：通过 Vercel Dashboard

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 导入你的 Git 仓库
4. 配置项目设置：
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. 添加环境变量
6. 点击 "Deploy"

#### 方法二：通过 CLI

```bash
# 登录 Vercel
vercel login

# 部署项目
vercel

# 设置环境变量
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add CONTACT_EMAIL
vercel env add NODE_ENV

# 重新部署以应用环境变量
vercel --prod
```

### 5. 自定义域名配置

1. 在 Vercel Dashboard 中选择你的项目
2. 进入 "Settings" > "Domains"
3. 添加你的域名：`VibeTalk.site`
4. 按照提示配置 DNS 记录：
   - A 记录：指向 Vercel 的 IP 地址
   - 或 CNAME 记录：指向 `cname.vercel-dns.com`

### 6. SSL 证书

Vercel 会自动为你的域名配置 SSL 证书，通常在几分钟内完成。

### 7. 验证部署

1. 访问你的网站：`https://VibeTalk.site`
2. 测试联系表单功能
3. 检查邮件发送是否正常

## 故障排除

### 邮件发送失败

1. 检查 SMTP 配置是否正确
2. 确认 Gmail 应用密码有效
3. 查看 Vercel 函数日志

### 域名解析问题

1. 使用 DNS 检查工具验证记录
2. 等待 DNS 传播（可能需要 24-48 小时）
3. 清除浏览器缓存

### API 路由问题

1. 确认 `api/contact.js` 文件路径正确
2. 检查 `vercel.json` 配置
3. 查看部署日志

## 监控和维护

1. 设置 Vercel Analytics 监控网站性能
2. 定期检查邮件发送功能
3. 监控表单提交数据
4. 定期更新依赖包

## 支持

如有问题，请查看：
- [Vercel 文档](https://vercel.com/docs)
- [Nodemailer 文档](https://nodemailer.com/)
- 项目 GitHub Issues 