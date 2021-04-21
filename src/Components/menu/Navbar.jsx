import React from 'react';
import { NavLink } from "react-router-dom"
import "./style.css"


// --- Mảng duyệt thông tin các Mục menu
const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },

    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    },
]



function Navbar() {

    // Duyệt mảng menus --> In Các Mục trên thanh menu

    let showMenus = (menus) => {

        if (menus && menus.length > 0) {
            return menus.map((menu, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <NavLink
                            activeClassName="activeMenu"
                            className="text-white nav-link active" exact={menu.exact} to={menu.to}>
                            {menu.name}
                        </NavLink>
                    </li>
                )
            })
        }
    }

    return (
        <div>
            {/* --------------- Menu ------------------ */}

            <nav>
                <ul className="nav bg-dark text-white py-3 d-flex align-items-center">

                    <NavLink
                        to='' className="mx-3"
                        style={{ textDecoration: 'none', color: 'white', fontSize: "30px" }}>
                        LOGO
                    </NavLink>

                    {showMenus(menus)}

                </ul>
            </nav>
        </div>
    );
}

export default Navbar;