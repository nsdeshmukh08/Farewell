import React, { useState } from 'react'
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 21,
    span: 14,
  },
};

export default function NoteModel({visible = false, setRefreshNotes = () => {}, setVisible = () => {}}) {

  const [name,setName] = useState('');
  const [projectName,setProjectName] = useState('');
  const [note,setNote] = useState('');

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    axios.post("https://nutanix-farewell.herokuapp.com/api/saveNote", {
      name,
      projectName,
      // user incoming ?
      user: "user",
      note
    }).then(res => {
      setRefreshNotes(true);
    })
    .catch(error => {;
      console.error(error);
    });
    setVisible(false);
    onReset();
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Modal
        title="Your message to Atreyee."
        centered
        visible={visible}
        onOk={() => form.submit()}
        onCacel={() => {onReset();  setVisible(false);}}
        width={500}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: 'Please add your Name' }]}
          >
            <Input
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            />
          </Form.Item>


          <Form.Item
            name="projectName"
            label="Team/Project Name"
            rules={[{ required: true, message: 'Please add your Team Name' }]}
          >
            <Input
            value = {projectName}
            onChange = {(e) => setProjectName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="note"
            label="Farewell Note"
            rules={[{ required: true, message: 'Please add Note' }]}
          >
            <Input.TextArea
            rows={4} showCount maxLength={200}
            value = {note}
            onChange = {(e) => setNote(e.target.value)}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button  type="link" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>

          <strong>Note:</strong> Once you add a message you can not modify it.
        </Form>
      </Modal>
  )
}
