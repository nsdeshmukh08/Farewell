import 'antd/dist/antd.less'
import './App.css';
import Header from './component/Header/Header';
import { Layout } from 'antd';
import Side from './component/Side/Side';
import NotesContainer from './component/NotesContainer/NotesContainer';
import { useState } from 'react';
const { Header : AntHeader, Sider, Content } = Layout;

function App() {
  const [refreshNotes, setRefreshNotes] = useState(true)

  return (
    <div className='App'>
      <Layout>
        <AntHeader>
          <Header setRefreshNotes = {setRefreshNotes}/>
        </AntHeader>
        <Layout className='body-layout'>
          <Sider>
            <Side/>
          </Sider>
          <Content>
            <NotesContainer refreshNotes = {refreshNotes} setRefreshNotes = {setRefreshNotes}/>
          </Content>
        </Layout>
      </Layout>
    </div>

  );
}

export default App;
