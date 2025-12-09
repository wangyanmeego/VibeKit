import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ExamplePage from '@/pages/Example';

/**
 * 路由配置
 * 新增页面时，请在这里添加路由配置
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ExamplePage />,
      },
    ],
  },
]);

