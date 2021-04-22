import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductList from '../../../Components/productList/ProductList';
import Search from '../../../Components/search/Search';
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

                    <div className="row">
                        <div className="col-5">
                            <Link to="/product/add" exact className="btn btn-info">
                                <i class="fas fa-plus-square mr-1"></i> Thêm sản phẩm
                            </Link>
                        </div>

                        <div className="col-7">
                            <Search />
                        </div>
                    </div>


                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default ProductListPage;