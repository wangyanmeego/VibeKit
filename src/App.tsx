import { useAppStore } from '@/store/useAppStore';

function App() {
  const { isLoading, setLoading } = useAppStore();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">AI PRD & 设计生成工具</h1>
        <p className="text-muted-foreground mb-4">通过自然语言生成PRD或设计页面</p>
        <p className="text-sm text-muted-foreground">
          Zustand 已集成 | 加载状态: {isLoading ? '加载中...' : '空闲'}
        </p>
      </div>
    </div>
  );
}

export default App;
