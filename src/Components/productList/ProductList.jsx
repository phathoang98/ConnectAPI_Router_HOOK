import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../productItem/ProductItem';
import "./style.css"

function ProductList(props) {

    // ---- Lấy Dữ Liệu cho ProductItem
    let products = useSelector(state => state.products)
    let keyword = useSelector(state => state.search)
    let sort = useSelector(state => state.sort)

    // Sort  ( SẮP XẾP DỮ LIỆU TRONG MẢNG THEO "TÊN" VÀ TRẠNG THÁI "CÒN HÀNG, HẾT HÀNG")

    if (sort.by === 'name') {
        products.sort((a, b) => {
            if (a.name > b.name) return sort.value;
            else if (a.name < b.name) return -sort.value;
            else return 0;
        });
    }
    else {
        products.sort((a, b) => {
            if (a.status > b.status) return -sort.value;
            else if (a.status < b.status) return sort.value;
            else return 0;
        });
    }

    // --- Danh sách các Products được lọc ra khi "Search" 

    products = products.filter((product) => {
        return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    })


    /**
     *  ----------------- CHỨC NĂNG PHÂN TRANG 
     */

    let [pages, setPages] = useState({
        currentPage: 1, // Trang mặc định hiện ra từ ban đầu 

        newsPerPage: 5  // Số thông tin hiện trên mỗi trang , giá trị là TỔNG các dòng tin 
    })

    let { currentPage, newsPerPage } = pages

    // ---- NÚT CHỌN TRANG
    let chosePage = (event) => {

        setPages({
            ...pages, // Phải copy lại dữ liệu của State khi setState
            currentPage: Number(event.target.id) // phải có Hàm number mới active đc
        });
    }

    // --- CHỈ SỐ của dòng thông tin "CUỐI CÙNG" trong mỗi trang hiện hành
    let indexOfLastNews = currentPage * newsPerPage;

    // --- CHỈ SỐ của dòng thông tin "ĐẦU TIÊN" trong mỗi trang hiện hành
    let indexOfFirstNews = indexOfLastNews - newsPerPage;

    // ---- Dùng HÀM slice xuất ra mảng render( vị trí BẮT ĐẦU truy xuất, vị trí KẾT THÚC ) 
    let renderPages = products.slice(indexOfFirstNews, indexOfLastNews)

    // ----- Render SỐ TRANG
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(products.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }



    /**
     *  ------------ Show các ProductItem cho Danh Sách
     */

    let showProducts = (products) => {
        if (products.length > 0) {
            return products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index + (currentPage - 1) * newsPerPage}
                    />
                )
            })
        }
    }

    /**
     *  ------------ RENDER TỔNG 
     */

    return (
        <div className="borderList mt-3 p-4">
            <h3 className="bg-warning p-2 text-white">Danh Sách Sản Phẩm</h3>

            <table className="table table-bordered table-hover text-center">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã</th>
                        <th>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {showProducts(renderPages)}
                </tbody>
            </table>

            {/* NÚT CHỌN TRANG */}
            <div className="pagination-custom">
                <ul id="page-numbers">

                    {pageNumbers.map(number => {
                        // -- Nếu trang hiện hành === số Trang --> Active 
                        if (currentPage === number) {
                            return (
                                <li key={number} id={number} className="active">
                                    {number}
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={number} id={number} onClick={chosePage} >
                                    {number}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>





    );
}

export default ProductList;