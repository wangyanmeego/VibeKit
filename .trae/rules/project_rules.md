# Project Rules (AI-Native Template)

当前项目是一个专门为非技术人员（产品/设计）准备的 React 模板。
你的核心任务是：**生成看起来是“成品”，但内部结构便于开发人员接手（Mock Data）的代码。**

## 1. 技术栈约束 (Strict)
- **框架**: React (v18+) + Vite
- **语言**: TypeScript (严格模式)
- **UI 库**: shadcn/ui (位于 `@/components/ui`)。**优先复用现有组件**，严禁重复造轮子。
- **样式**: Tailwind CSS。**严禁**创建 `.css` / `.scss` 文件，**严禁**使用 `style={{}}` 行内样式。
- **图标**: Lucide React (`lucide-react`)。

## 2. 目录与文件结构
遵守以下文件组织方式，不要随意新建文件夹：
- `src/pages/[FeatureName]/index.tsx`: 页面入口
- `src/pages/[FeatureName]/components/`: 页面独有的拆分组件
- `src/components/biz/`: 跨页面复用的业务组件
- `src/types/`: 全局类型定义

## 3. 核心工作流：Mock 数据与开发交接 (最重要)
为了让开发人员能轻松接手，生成页面时必须遵守：

1.  **数据分离**：严禁在 JSX 中写死数据。
    * ❌ 错误: `<div className="text-xl">张三</div>`
    * ✅ 正确: 定义 `const MOCK_USER = { name: "张三" }`，然后使用 `{MOCK_USER.name}`。
2.  **Mock 位置**：
    * 简单页面的假数据定义在文件顶部的 `// --- Mock Data ---` 区域。
    * 复杂页面的假数据提取到 `@/lib/mock/[feature].ts`。
3.  **待办标记**：
    * 在所有涉及数据请求（API）、点击交互（跳转/提交）的地方，必须添加注释：
    * `// TODO: [Dev] 对接真实 API 接口`
    * `// TODO: [Dev] 处理表单提交逻辑`

## 4. 视觉设计规范 (针对设计师/产品)
- **颜色**：必须使用语义化变量（如 `bg-primary`, `text-muted-foreground`），不要使用硬编码颜色（如 `bg-blue-500`），以支持深色模式。
- **布局**：页面容器统一使用 `flex flex-col gap-4 p-6` 作为基础结构。
- **响应式**：默认优先考虑桌面端 (Desktop First)，因为这是管理后台模板。

## 5. 错误修正指引
- 如果用户说“这个按钮太丑了”，请优先检查是否正确使用了 shadcn 的 `variant` (default, destructive, outline, ghost)。
- 如果用户说“布局乱了”，请检查 `flex` 或 `grid` 结构，不要添加 `margin` 负值这种脏代码。