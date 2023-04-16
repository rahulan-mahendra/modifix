import { Outlet, useNavigate } from "react-router-dom"
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import { useEffect } from "react";


const AdminLayout = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
      if(!user){
        navigate('/');
      }
    
    }, [navigate, user])
    

    if(user){
        return (
            <div id="wrapper">
                <SideBar/>
                
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar/>
                        
                        <div className="container-fluid">
                            <Outlet/>
                        </div>
    
                    </div>
    
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default AdminLayout