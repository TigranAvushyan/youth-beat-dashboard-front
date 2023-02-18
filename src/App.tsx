import './App.css';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { AnalyticsPage } from './pages/analytics/AnalyticsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/analytics',
    element: <AnalyticsPage />
  }
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8C64D8',
          colorText: '#252525',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
