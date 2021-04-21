import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../productItem/ProductItem';

function ProductList(props) {

    // ---- Lấy Dữ Liệu cho ProductItem
    let products = useSelector(state => state.products)

    let showProducts = (products) => {
        if (products.length > 0) {
            return products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            })
        }
    }


    return (
        <div className="border border-primary mt-3 p-4">
            <h3 className="bg-warning p-2 text-white">Danh Sách Sản Phẩm</h3>

            <table className="table table-bordered table-hover text-center">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {showProducts(products)}
                </tbody>

            </table>
        </div>
    );
}

export default ProductList;