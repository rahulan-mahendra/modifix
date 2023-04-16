import React from 'react';
import { Routes, Route  } from "react-router-dom"
import AdminLayout from './components/AdminLayout';
import Dashboard from './views/Dashboard';
import Users from './views/users/Users';
import CreateUser from './views/users/createUser';
import Login from './views/auth/Login';
import NotFound from './views/other/404';
import Products from './views/product/Products';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>

            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="users">
                    <Route index element={<Users />} />
                    <Route path='new' element={<CreateUser />} />
                </Route>

                <Route path="products">
                    <Route index element={<Products />} />
                    <Route path='new' element={<CreateUser />} />
                </Route>

                <Route path="*" element={<NotFound/>} />

            </Route>
            
            <Route path="*" element={<NotFound/>} />
        </Routes>   
    );
}

export default App;
