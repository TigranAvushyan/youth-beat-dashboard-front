import './App.css';
import { ConfigProvider } from 'antd';
import { Layout } from './components/layout/Layout';
import { Body } from './components/Body/Body';

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
      <Layout>
        <Body />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
