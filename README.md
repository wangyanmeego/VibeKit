# RoboOpenPlatform（高保真交互原型）

本项目面向产品经理与设计师，用于快速演示“视觉完善、交互逼真、零后端”的原型。

**核心原则**

- 100% Mock 数据，无任何后端依赖；保存/提交等操作用 `setTimeout(500ms~1000ms)` 模拟网络延迟并配合 `toast` 反馈。
- UI 统一使用 Tailwind CSS 与 shadcn/ui 组件，避免手写 CSS。
- 语义化主题变量（支持明暗模式）驱动组件配色，便于后续工程接入。

**技术栈**

- 框架：`React 18` + `Vite`
- 语言：`TypeScript`
- 样式：`Tailwind CSS`
- UI：`shadcn/ui`（已在 `src/components/ui/` 目录内提供常用简化组件）
- 图标：`lucide-react`

**项目用途**

- 快速搭建演示页面、流程与交互，评审需求与设计可行性。
- 为后续研发提供“可直接替换 API 的前端壳”，降低接入成本。

**架构说明**

- 单页应用（SPA），入口 `index.html` 挂载到 `#root`。
- 路由集中在 `src/router/index.tsx`，页面根组件 `src/App.tsx`。
- 组件：
  - 基础 UI 组件：`src/components/ui/`，所有配色依赖 Tailwind 语义类（如 `bg-background`、`text-foreground`）。
  - 工具函数：`src/lib/`（如 `cn.ts`、`utils.ts`）。
- 主题：`src/index.css` 定义 `:root` 与 `.dark` 语义化 CSS 变量，Tailwind 在 `tailwind.config.js` 中映射这些变量到类名。

**目录结构（关键目录）**

- `src/components/ui/`：基础 UI 组件（Button、Input、Card、Dialog、Tabs、Table 等）
- `src/lib/`：工具库（`cn.ts` 等）
- `src/router/`：路由配置（`index.tsx`）
- `src/App.tsx`：应用根组件
- `src/index.css`：Tailwind 指令与主题变量
- `tailwind.config.js`：Tailwind 配置与语义化颜色映射

**本地运行**

- 安装依赖：`npm i`
- 开发：`npm run dev`
- 构建：`npm run build`
- 预览：`npm run preview`
- 代码检查：`npm run lint`、`npm run check`

**约束与约定**

- 禁止直接写 `.css` 或内联样式，统一使用 Tailwind 类。
- 所有数据来源为 Mock（静态常量或 `src/lib/mock/`），操作必须有视觉反馈（按钮禁用、loading、toast）。
- 页面容器统一使用 `flex flex-col h-full w-full`，配合语义化颜色类以保证明暗模式一致性。

如需扩展页面与业务组件，建议遵循以上目录与语义化规范，保持演示体验与后续接入的平滑性。
