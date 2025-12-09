import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Code, Palette, Zap, BookOpen, ArrowRight } from 'lucide-react';

/**
 * 示例页面 - 项目介绍与使用指南
 * 
 * 这是一个面向产品和设计师的项目介绍页面，采用暖色调设计，适合阅读。
 * 使用 Tailwind 任意值实现 Anthropic 风格的米色暖色调。
 */
export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] w-full">
      {/* 主容器 - 使用暖色调背景，确保完全覆盖全局背景 */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-[#2c2c2c]">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-[#f5f3f0]">
            <Sparkles className="w-8 h-8 text-[#8b7355]" />
          </div>
          <h1 className="text-5xl font-semibold mb-4 text-[#1f1f1f]">
            AI PRD & 设计生成工具
          </h1>
          <p className="text-xl leading-relaxed text-[#4a4a4a]">
            专为产品和设计师准备的 React 模板项目<br />
            通过自然语言快速生成符合规范的网页原型和设计稿
          </p>
        </div>

        {/* 核心特性卡片 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-[#f5f3f0]">
                <Code className="w-6 h-6 text-[#8b7355]" />
              </div>
              <CardTitle className="text-xl mb-2 text-[#1f1f1f]">
                开箱即用
              </CardTitle>
              <CardDescription className="text-[#555555] leading-relaxed">
                完整的项目结构和配置，集成 shadcn/ui 组件库（40+ 组件），无需从零开始搭建
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-[#f5f3f0]">
                <Palette className="w-6 h-6 text-[#8b7355]" />
              </div>
              <CardTitle className="text-xl mb-2 text-[#1f1f1f]">
                规范明确
              </CardTitle>
              <CardDescription className="text-[#555555] leading-relaxed">
                详细的开发规范和最佳实践，生成的代码符合开发规范，便于后续开发人员无缝接手
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-[#f5f3f0]">
                <Zap className="w-6 h-6 text-[#8b7355]" />
              </div>
              <CardTitle className="text-xl mb-2 text-[#1f1f1f]">
                快速生成
              </CardTitle>
              <CardDescription className="text-[#555555] leading-relaxed">
                通过 Trae 编辑器的自然语言对话，直接描述需求即可生成页面原型，无需编写代码
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-[#f5f3f0]">
                <BookOpen className="w-6 h-6 text-[#8b7355]" />
              </div>
              <CardTitle className="text-xl mb-2 text-[#1f1f1f]">
                示例完整
              </CardTitle>
              <CardDescription className="text-[#555555] leading-relaxed">
                包含示例页面和组件模板，帮助你快速理解项目结构和使用方法
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* 使用指南区域 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-[#1f1f1f]">
            如何使用
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-[#e8e5e0] text-[#8b7355]">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 text-[#1f1f1f]">
                  启动项目
                </h3>
                <p className="leading-relaxed mb-3 text-[#4a4a4a]">
                  在 Trae 编辑器中打开终端，运行 <code className="px-2 py-1 rounded text-sm bg-[#f5f3f0] text-[#7a6345] font-medium">npm run dev</code>，
                  然后点击终端中显示的链接（通常是 <code className="px-2 py-1 rounded text-sm bg-[#f5f3f0] text-[#7a6345] font-medium">http://localhost:5173</code>）打开页面。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-[#e8e5e0] text-[#8b7355]">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 text-[#1f1f1f]">
                  描述你的需求
                </h3>
                <p className="leading-relaxed mb-3 text-[#4a4a4a]">
                  在 Trae 的聊天窗口中，用自然语言描述你想要创建的页面。例如：
                </p>
                <div className="p-4 rounded-lg my-3 bg-[#f5f3f0] border-l-4 border-[#d4c4b0]">
                  <p className="text-sm leading-relaxed text-[#4a4a4a]">
                    "帮我新建一个订单列表页面。这个页面包含：搜索框、筛选器（状态、日期）、数据表格（显示订单号、金额、状态、创建时间）、分页组件。请用 Mock 数据填充表格，生成 10 条示例数据。"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-[#e8e5e0] text-[#8b7355]">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 text-[#1f1f1f]">
                  AI 自动生成
                </h3>
                <p className="leading-relaxed mb-3 text-[#4a4a4a]">
                  AI 会根据你的描述自动生成符合项目规范的代码，包括组件结构、样式和 Mock 数据。
                  生成的代码可以直接运行，无需手动编写。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-[#e8e5e0] text-[#8b7355]">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 text-[#1f1f1f]">
                  迭代优化
                </h3>
                <p className="leading-relaxed mb-3 text-[#4a4a4a]">
                  如果生成的页面不符合预期，可以继续与 AI 对话进行调整。例如："把按钮改成圆角"、
                  "调整表格的列宽"、"优化一下颜色搭配" 等。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 技术栈信息 */}
        <Card className="border-0 shadow-sm mb-16 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl mb-4 text-[#1f1f1f]">
              技术栈
            </CardTitle>
            <CardDescription className="text-[#555555] leading-relaxed">
              项目基于现代化的技术栈构建，确保代码质量和开发效率：
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-[#1f1f1f]">核心框架</h4>
                <ul className="space-y-1 text-sm text-[#555555]">
                  <li>• React 19.2.1</li>
                  <li>• TypeScript 5.9.3</li>
                  <li>• Vite 7.2.7</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-[#1f1f1f]">UI 框架</h4>
                <ul className="space-y-1 text-sm text-[#555555]">
                  <li>• Tailwind CSS 4.1.17</li>
                  <li>• shadcn/ui 组件库</li>
                  <li>• Framer Motion 动画</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 行动号召 */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium bg-[#8b7355] text-white border-none hover:bg-[#7a6345] transition-colors"
          >
            开始使用
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-4 text-sm text-[#666666]">
            查看 <a href="#" className="underline text-[#8b7355] hover:text-[#7a6345] font-medium">产品设计协作手册</a> 了解更多详情
          </p>
        </div>
      </div>
    </div>
  );
}

