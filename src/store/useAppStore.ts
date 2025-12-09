import { create } from 'zustand';

interface AppState {
  // 示例状态
  isLoading: boolean;
  // 可以添加更多状态
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));

