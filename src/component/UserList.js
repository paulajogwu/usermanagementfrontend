import { useState,useContext } from 'react';
import { Table, Button, Popconfirm, Image, message, Space, Avatar  } from 'antd';
import { useNavigate } from 'react-router-dom';
import {Context} from '../context/contextAPI.js'
import { successToast} from "../component/index";
const UserList = ({ users, setUsers }) => {
  const {deleteUser} = useContext(Context);
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const handleDelete = (_id) => {
    let deleted = deleteUser(_id)
    if(deleted){
      successToast('User deleted successfully')
    window.location.reload()
    }
  };

  const columns = [
    {
      title: 'Photo',
      // dataIndex: 'picURL',
      render: (photo) => (
        <Space>
        <Avatar icon={ <Image
                src={`https://usermanagementbackend-eeit.onrender.com/uploads/${photo.picURL}`}
              alt="user profile image"
              height="100%"
              width="100%"
             
            />} />
            
      
      </Space>

      ),
    },
    { title: 'First Name', dataIndex: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Role', dataIndex: 'role' },
    { title: 'Status', dataIndex: 'status' },
    {
      title: 'Actions',
      render: (_, record) => (
        <>
          <Button
            type="link"
            onClick={() => navigate(`/edit-user/${record._id}`)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record._id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleTableChange = (newPagination) => {
    setPagination(newPagination);
  };

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="id"
      pagination={pagination}
      onChange={handleTableChange}
      responsive
    />
  );
};

export default UserList;