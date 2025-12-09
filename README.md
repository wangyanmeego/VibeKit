# AI PRD & 设计生成工具 - 模板项目

一个专为产品和设计师准备的 React 模板项目，支持通过自然语言（Trae 编辑器）快速生成符合规范的网页原型和设计稿。

## 📖 项目简介

这是一个 AI-Native 的 React 模板项目，旨在让非技术人员（产品经理、设计师）能够通过自然语言直接构建网页原型。生成的代码符合开发规范，便于后续开发人员无缝接手。

### 核心特性

- ✅ **开箱即用**：完整的项目结构和配置
- ✅ **组件丰富**：集成 shadcn/ui 组件库（40+ 组件）
- ✅ **规范明确**：详细的开发规范和最佳实践
- ✅ **示例完整**：包含示例页面和组件模板
- ✅ **类型安全**：完整的 TypeScript 支持
- ✅ **样式规范**：Tailwind CSS + 语义化颜色变量（支持深色模式）

## 🛠️ 技术栈

### 核心框架
- **React 19.2.1** - 现代化的 React 框架
- **TypeScript 5.9.3** - 类型安全的 JavaScript 超集
- **Vite 7.2.7** - 快速的前端构建工具

### UI 框架与样式
- **Tailwind CSS 4.1.17** - 实用优先的 CSS 框架
- **shadcn/ui** - 基于 Radix UI 的高质量组件库
- **Framer Motion 12.23.25** - 强大的动画库
- **Lucide React** - 精美的图标库

### 状态管理与路由
- **Zustand 5.0.9** - 轻量级状态管理
- **React Router DOM 7.10.1** - 声明式路由

### 开发工具
- **ESLint** - 代码质量检查
- **TypeScript ESLint** - TypeScript 代码检查
- **PostCSS & Autoprefixer** - CSS 后处理

## 📁 目录结构

```
RoboOpenPlatform/
├── .trae/                    # Trae 编辑器配置
│   └── rules/                # AI 规则文件
│       └── project_rules.md  # 项目开发规则
├── docs/                     # 文档目录
│   ├── 开发规范.md          # 开发规范文档
│   └── 组件使用指南.md      # 组件使用指南
├── public/                   # 静态资源目录
├── src/                      # 源代码目录
│   ├── assets/              # 资源文件（图片、字体等）
│   ├── components/          # 组件目录
│   │   ├── ui/             # shadcn/ui 基础组件
│   │   └── biz/           # 跨页面复用的业务组件
│   ├── lib/                # 工具函数库
│   │   ├── mock/          # Mock 数据
│   │   └── utils.ts       # 工具函数
│   ├── pages/             # 页面组件
│   │   └── [FeatureName]/ # 功能页面目录
│   │       ├── index.tsx  # 页面入口
│   │       └── components/ # 页面独有组件
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理
│   ├── types/             # 全局类型定义
│   ├── App.tsx            # 应用主组件
│   ├── index.css          # 全局样式
│   └── main.tsx           # 应用入口文件
├── 产品设计协作手册.md    # 产品/设计师使用指南
├── components.json        # shadcn/ui 配置
├── eslint.config.js       # ESLint 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
└── vite.config.ts         # Vite 构建配置
```

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0 或 **pnpm**: >= 8.0.0 或 **yarn**: >= 1.22.0

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install

# 或使用 yarn
yarn install
```

### 开发模式

启动开发服务器，支持热模块替换（HMR）：

```bash
npm run dev
```

开发服务器默认运行在 `http://localhost:5173`

### 构建生产版本

构建优化后的生产版本：

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览生产构建

预览生产构建结果：

```bash
npm run preview
```

### 代码检查

运行 ESLint 检查代码质量：

```bash
npm run lint
```

## 📚 使用指南

### 对于产品/设计师

请先阅读 **[产品设计协作手册.md](./产品设计协作手册.md)**，了解如何使用 Trae 编辑器通过自然语言生成页面。

### 对于开发人员

请阅读以下文档了解项目规范：

1. **[开发规范.md](./docs/开发规范.md)** - 详细的开发规范和最佳实践
2. **[组件使用指南.md](./docs/组件使用指南.md)** - 组件使用示例和说明

## 🎯 核心工作流

### 1. 创建新页面

在 Trae 编辑器中，你可以这样告诉 AI：

```
帮我新建一个订单列表页面。
这个页面包含：
- 搜索框
- 筛选器（状态、日期）
- 数据表格（显示订单号、金额、状态、创建时间）
- 分页组件
请用 Mock 数据填充表格，生成 10 条示例数据。
```

### 2. Mock 数据规范

- **简单页面**：在文件顶部定义 `// --- Mock Data ---` 区域
- **复杂页面**：提取到 `src/lib/mock/[feature].ts`

### 3. TODO 标记

所有需要开发人员对接的地方必须添加 TODO 标记：

```typescript
// TODO: [Dev] 对接真实 API 接口
// TODO: [Dev] 处理表单提交逻辑
```

## 🔧 配置说明

### 路径别名

项目配置了路径别名 `@` 指向 `src` 目录：

```typescript
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
```

### TypeScript 配置

项目使用多个 TypeScript 配置文件：
- `tsconfig.json` - 基础配置
- `tsconfig.app.json` - 应用代码配置
- `tsconfig.node.json` - Node 环境配置

### Tailwind CSS

使用 Tailwind CSS 4.x 版本，支持：
- 语义化颜色变量（支持深色模式）
- 自定义主题色（tech-blue, neon-purple）
- 自定义动画和工具类

### 环境变量

复制 `env.example` 为 `.env` 并配置环境变量：

```bash
cp env.example .env
```

## 📝 开发规范要点

1. **严禁在 JSX 中写死数据**，必须使用 Mock 数据
2. **严禁创建 `.css` 文件**，必须使用 Tailwind CSS
3. **严禁使用行内样式** `style={{}}`
4. **必须使用语义化颜色变量**，支持深色模式
5. **必须添加 TODO 标记**，标注需要开发人员对接的地方

详细规范请查看 [开发规范.md](./docs/开发规范.md)

## 🎨 可用组件

项目已集成 shadcn/ui 组件库，包含 40+ 高质量组件：

- Button, Card, Input, Dialog, Table, Form
- Select, Tabs, Badge, Avatar, Alert, Toast
- 等等...

查看完整列表和使用示例：[组件使用指南.md](./docs/组件使用指南.md)

## 📄 相关文档

- [产品设计协作手册.md](./产品设计协作手册.md) - 产品/设计师使用指南
- [docs/开发规范.md](./docs/开发规范.md) - 开发规范文档
- [docs/组件使用指南.md](./docs/组件使用指南.md) - 组件使用指南
- [.trae/rules/project_rules.md](./.trae/rules/project_rules.md) - Trae AI 规则

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目为私有项目。

---

**Happy Coding! 🚀**
