import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeleteProductRequest } from '../../Redux/actions';

function ProductItem(props) {

    let { product, index } = props;

    // status : True --> Còn hàng , False --> Hết hàng
    let statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    let statusClass = product.status ? 'success' : 'secondary'

    // ----- Dispatch action lên cho Reducer
    const dispatch = useDispatch()

    /**
     * ---------- Xóa Sản Phẩm
     */
    const onDelete = (id) => {
        dispatch(actDeleteProductRequest(id))
    }


    /**
     *  ---------- Sửa Sản Phẩm
     */

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`badge badge-${statusClass}`}>
                    {statusName}
                </span>
            </td>

            <td>
                <Link
                    to={`/product/${product.id}/edit`}
                    className="btn btn-info mr-2">
                    <i className="far fa-edit"></i> Sửa
                </Link>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDelete(product.id)}>
                    <i className="far fa-trash-alt"></i>
                     Xóa
                </button>
            </td>
        </tr>
    );
}

export default ProductItem;