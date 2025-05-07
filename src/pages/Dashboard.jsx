import { useState, useContext, useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import UserList from '../component/UserList';
import {Context} from '../context/contextAPI.js'
// Mock data for users


const Dashboard = () => {
  const navigate = useNavigate();
   const {findAll} = useContext(Context);
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    
    const res = await findAll()
    setUsers(res)
    console.log("list",res)
  }
  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <Button type="primary" onClick={() => navigate('/add-user')}>
          Add User
        </Button>
      </div>
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default Dashboard;