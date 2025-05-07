import React,{useContext} from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter, Routes, Route ,useNavigate,Navigate} from "react-router-dom";
import {ContextProvider} from './context/contextAPI.js'
import {Context} from './context/contextAPI.js'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login'; 
import Dashboard from './pages/Dashboard';
import AddUser from './pages/usermanagement/AddUser';
import EditUser from './pages/usermanagement/EditUser';
 



const { Header, Content } = Layout;

const ProtectedRoute = ({ children }) => {
  console.log('Children:', Context);
  const {isAuthenticated} = useContext(Context);
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppHeader = () => {
  const {isAuthenticated,logout} = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Header className="header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'white', margin: 0 }}>User Management</h1>
        {isAuthenticated() && (
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </Header>
  );
};
 const App =()=>{

return(

<BrowserRouter>

<ContextProvider>
<ToastContainer/>

<Layout>
        <AppHeader />
        <Content className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-user"
              element={
                <ProtectedRoute>
                  <AddUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-user/:id"
              element={
                <ProtectedRoute>
                  <EditUser />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Content>
      </Layout>

  </ContextProvider>
</BrowserRouter>
)

 }
 export default App;

