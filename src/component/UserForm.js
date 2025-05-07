import { useState } from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { Option } = Select;

const UserForm = ({ initialValues, onSubmit, isEdit }) => {
  const [form] = Form.useForm();
 
  const [fileList, setFileList] = useState(
    initialValues?.picURL
      ? [{ uid: '-1', url: `${'https://usermanagementbackend-eeit.onrender.com/uploads/'}`+initialValues.picURL, status: 'done' }]
      : []
  );

  const handleUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFinish = (values) => {
    // const file = fileList.length > 0 ? fileList[0].url || URL.createObjectURL(fileList[0].originFileObj) : '';
    console.log("--===",values)
    //onSubmit({ ...values,file});
    onSubmit(values);
    form.resetFields();
    setFileList([]);
  };
  console.log(initialValues,'20202022*****************')

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Form.Item
        label="first Name"
        name="firstName"
        rules={[{ required: true, message: 'Please enter the first Name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please enter the last Name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter the email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter the Password' },
         
        ]}
      >
        <Input type='password'/>
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: 'Please select a role' }]}
      >
        <Select>
          <Option value="Admin">Admin</Option>
          <Option value="User">User</Option>
        </Select>
      </Form.Item>
      
      <Form.Item label="Profile Photo" name="files">
        <Upload
          listType="picture"
          fileList={fileList}
          onChange={handleUpload}
          beforeUpload={() => false} // Prevent auto-upload
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Upload Photo</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEdit ? 'Update User' : 'Add User'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;