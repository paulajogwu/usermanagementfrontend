import { useParams, useNavigate } from 'react-router-dom';
import React,{useContext,useEffect} from 'react'
import UserForm from '../../component/UserForm';
import { message } from 'antd';
import {Context} from '../../context/contextAPI.js'
import { successToast} from "../../component/index";


const EditUser = () => {
  const {findAll,updateUser} = useContext(Context);
  const { id } = useParams();
const [user, setUsers] = React.useState();

  const getUserById = async () => {
     const users = await findAll()
    let data =  users.find((user) => user._id === id);
     
     setUsers(data)
   };

  useEffect(()=>{
    getUserById()
    },[])

  
  const navigate = useNavigate();
  

  const handleSubmit = (values) => {
    // API call to update user
    let _id = id
    updateUser(_id,values)
    successToast('User updated successfully')
    // console.log('Updated User:', { id, ...values });
    // message.success('User updated successfully');
    navigate('/');
  };
  console.log('Updated User==============*****:',user);
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>Edit User</h2>
      <UserForm initialValues={user} onSubmit={handleSubmit} isEdit />
    </div>
  );
};

export default EditUser;

