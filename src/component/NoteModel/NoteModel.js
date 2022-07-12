import React from 'react'
import { Button, Form, Input, Modal } from 'antd';
import postNotes from './post';


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

  const [form] = Form.useForm();

  const onFinish = (values) => {
    values["user"] = "Atreyee";
    console.log(values);
    postNotes(values);
    setRefreshNotes(true);
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
            <Input/>
          </Form.Item>


          <Form.Item
            name="projectName"
            label="Team/Project Name"
            rules={[{ required: true, message: 'Please add your Team Name' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            name="note"
            label="Farewell Note"
            rules={[{ required: true, message: 'Please add Note' }]}
          >
            <Input.TextArea
            rows={4} showCount maxLength={200}
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
