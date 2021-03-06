import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar(props) {
    const history = useHistory();
    const toggleNavbar = useSelector(state => state.toggleNavbar);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active3, setActive3] = useState(false);
    const signOut = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userID')
        history.push('/login')
    }
    const handleActive = (value) => {
        console.log(value)
        switch (value) {
            case 1:
                setActive1(!active1);
                break;
            case 2:
                setActive2(!active2);
                break;
            case 4:
                setActive4(!active4);
                break;
            case 3:
                setActive3(!active3);
                break;
            default:
                return;
        }
    }
    return (
        <div id="wrapper" style={{ height: '100%' }}>
            <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${!toggleNavbar ? "toggled" : ""}`} id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/product/list">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Book Shop <sup><i class="fas fa-book"></i></sup></div>
                </Link>

                <li className="nav-item active">
                    <span className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </span>
                </li>
                <li className="nav-item" onClick={() => handleActive(1)}>
                    <span className="nav-link collapsed" style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", cursor: 'pointer' }}>
                        <span>
                            <i className="fas fa-tasks"></i>
                            S???n ph???m
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                    <Collapse
                        isOpened={active1}
                    >
                        <div id="collapsePages" className={`collapse ${active1 ? "show" : ''}`} >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Qu???n l??</h6>
                                <Link className="collapse-item" to="/product/list">Danh s??ch s???n ph???m</Link>
                                <Link className="collapse-item" to="/product/category" >Gian h??ng s???n ph???m</Link>
                                <Link className="collapse-item" to='/product/type'>Th??? lo???i, nh?? xu???t b???n</Link>
                            </div>
                        </div>
                    </Collapse>
                </li>
                <li className="nav-item">
                    <Link to="/code" className="nav-link collapsed" style={{ cursor: "pointer", display: 'flex' }}>
                        <i class="fas fa-code"></i>
                        <span>M?? gi???m gi??</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link collapsed" style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                        <span onClick={() => handleActive(2)} style={{ cursor: 'pointer' }}>
                            <i className="fas fa-book-open"></i>
                            B??i vi???t
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                    <Collapse isOpened={active2}>
                        <div id="collapsePages" className={`collapse ${active2 ? "show" : ''}`}>
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Qu???n l??</h6>
                                <Link to="/Blog" className="collapse-item">Danh s??ch b??i vi???t</Link>
                                <Link to="/Blog/add" className="collapse-item">T???o b??i vi???t</Link>
                            </div>
                        </div>
                    </Collapse>
                </li>
                <li className="nav-item">
                    <span className="nav-link collapsed" style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                        <span onClick={() => handleActive(3)} style={{ cursor: 'pointer' }}>
                            <i className="fas fa-book-open"></i>
                            Ng?????i d??ng
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                    <Collapse isOpened={active3}>
                        <div id="collapsePages" className={`collapse ${active3 ? "show" : ''}`}>
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Qu???n l??</h6>
                                <Link to="/users/list" className="collapse-item">Danh s??ch ng?????i d??ng</Link>
                                <Link to="/users/add" className="collapse-item">T???o t??i kho???n</Link>
                            </div>
                        </div>
                    </Collapse>
                </li>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link collapsed" style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", cursor: 'pointer' }}>
                        <span style={{ cursor: "pointer" }}>
                            <i className="fas fa-book-open"></i>
                            ????n H??ng
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link collapsed" style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", cursor: 'pointer' }}>
                        <span onClick={() => handleActive(4)} style={{ cursor: "pointer" }}>
                            <i className="fas fa-user"></i>
                            T??i kho???n
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                    <Collapse isOpened={active4}>
                        <div id="collapsePages" className={`collapse ${active4 ? "show" : ''}`} >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Chi ti???t t??i kho???n</h6>
                                <Link to="/profile" className="collapse-item" >Profile</Link>
                                <span
                                    onClick={signOut}
                                    className="collapse-item" >????ng xu???t</span>
                            </div>
                        </div>
                    </Collapse>
                </li>

            </ul>
        </div>
    );
}

export default Navbar;