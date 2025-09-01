#!/bin/bash

echo "🚀 VibeTalk 部署脚本"
echo "===================="

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装"
    echo "正在安装 Vercel CLI..."
    npm install -g vercel
fi

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功"
else
    echo "❌ 构建失败"
    exit 1
fi

# 部署到 Vercel
echo "🌐 部署到 Vercel..."
vercel --prod

echo "🎉 部署完成！"
echo ""
echo "接下来的步骤："
echo "1. 在 Vercel Dashboard 中配置环境变量"
echo "2. 添加自定义域名 VibeTalk.site"
echo "3. 测试联系表单功能"
echo ""
echo "详细说明请查看 DEPLOYMENT.md" 