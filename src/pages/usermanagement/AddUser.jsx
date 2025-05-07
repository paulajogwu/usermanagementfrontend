import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import UserForm from '../../component/UserForm';
import { message } from 'antd';
import {Context} from '../../context/contextAPI.js'

const AddUser = () => {
  const navigate = useNavigate();
  const {createUser} = useContext(Context);
  const handleSubmit = (values) => {
    
    console.log('New User:', values);
    createUser(values)
   
    message.success('User added successfully');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>Add New User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddUser;