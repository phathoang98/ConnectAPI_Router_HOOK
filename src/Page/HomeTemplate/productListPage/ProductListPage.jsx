import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductList from '../../../Components/productList/ProductList';
import { actFetchProductsRequest } from '../../../Redux/actions';

function ProductListPage(props) {

    // --- Phải dispatch action để show dữ liệu Tổng ra Component cha

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchProductsRequest())
    }, [])

    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <Link to="/product/add" className="btn btn-info">
                        Thêm sản phẩm
                    </Link>

                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default ProductListPage;