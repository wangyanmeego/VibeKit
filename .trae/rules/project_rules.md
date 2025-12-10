# Project Rules: Product & Design Prototype Mode (React/Vite)

当前项目是一个 **高保真交互原型**，使用者是 **产品经理或设计师**。
你的核心目标是：**快速产出视觉完美、交互逼真、但完全基于 Mock 数据（无后端）的演示代码。**

## 1. 核心原则 (Zero Backend, 100% Mock)
- **绝对无后端**：假设没有服务器。所有数据必须是静态的 Mock 数据。
- **模拟真实感**：
    - 点击“保存/提交”时，必须使用 `setTimeout` (500ms-1000ms) 模拟网络请求延迟。
    - 延迟结束后，必须使用 `toast` 组件提示“操作成功”或“加载完成”。
    - **严禁**写空函数（如 `onClick={() => {}}`），必须有视觉反馈。
- **数据驱动 UI**：
    - 严禁在 JSX 中硬编码重复内容（如列表）。
    - 必须先定义 `const MOCK_DATA = [...]`，然后通过 `.map()` 渲染。

## 2. 技术栈约束 (Strict)
- **框架**: React (v18+) + Vite (SPA模式)
- **语言**: TypeScript (用于定义数据结构，方便开发理解)
- **UI 组件库**: shadcn/ui (位于 `@/components/ui`)。
    - **默认优先**：只要 shadcn 有的组件（Button, Input, Table, Dialog, Sheet 等），必须复用，严禁手写 CSS 布局。
- **样式**: Tailwind CSS。
    - **禁止**: 写 `.css` 文件或 `style={{}}`。
    - **布局**: 页面容器统一使用 `flex flex-col h-full w-full`。
- **图标**: Lucide React。

## 3. Mock 数据规范 (便于开发交接)
为了让开发人员后续能直接替换 API，请严格遵守：

1.  **类型定义 (Types)**：
    - 在 `src/types/` 或组件顶部先定义 TypeScript 接口，例如 `interface User { id: string; name: string; status: 'active' | 'inactive' }`。
2.  **数据位置**：
    - **简单页面**：在文件头部 `// --- Mock Data ---` 区域定义常量。
    - **复杂表格/看板**：在 `@/lib/mock/` 下创建对应文件（如 `dashboard-data.ts`）并导出。
3.  **Todo 标记**：
    - 在所有模拟请求的地方添加注释：
    - `// TODO: [Dev] 替换为真实 API 请求 (GET /api/...)`
    - `// TODO: [Dev] 处理表单提交 (POST /api/...)`

## 4. 沟通与代码风格 (针对非技术人员)
- **少问多做**：不要问用户“你要用 Flex 还是 Grid？”，直接根据设计描述选择最佳方案。
- **视觉容错**：如果用户描述模糊（如“要一个漂亮的卡片”），默认使用 shadcn 的 `Card` + `CardHeader` + `CardContent` 组合，并加上适当的 `shadow-sm` 和 `border`。
- **颜色规范**：仅使用语义化变量（如 `bg-primary`, `text-muted-foreground`, `border-border`），确保看起来专业且支持未来扩展。

## 5. 目录结构
保持结构清晰，不要过度拆分：
- `src/pages/[FeatureName]/`: 功能页面入口
- `src/components/ui/`: 基础 UI 组件 (Shadcn)
- `src/components/biz/`: 业务组件 (如 `UserCard`, `OrderTable`)
- `src/lib/mock/`: 所有的假数据源

## 6. 错误修正指引
- **如果用户觉得“太素了/不好看”**：
    - 检查是否忘记加 `gap-4` 或 `p-6` 导致内容挤在一起。
    - 检查是否使用了 shadcn 的默认样式，尝试给 Card 增加 `className="hover:shadow-md transition-all"`。
- **如果用户说“点击没反应”**：
    - 检查是否忘记绑定 `onClick`。
    - 检查是否忘记加 `toast` 反馈。