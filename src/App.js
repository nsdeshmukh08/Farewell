import 'antd/dist/antd.less'
import './App.css';
import Header from './component/Header/Header';
import { Layout } from 'antd';
import Side from './component/Side/Side';
import NotesContainer from './component/NotesContainer/NotesContainer';
const { Header : AntHeader, Sider, Content } = Layout;

function App() {
  return (
    <div className='App'>
       <Layout>
        <AntHeader>
          <Header/>
        </AntHeader>
        <Layout className='body-layout'>
          <Sider>
            <Side/>
          </Sider>
          <Content>
            <NotesContainer/>
          </Content>
        </Layout>
      </Layout>
    </div>
   
  );
}

export default App;
