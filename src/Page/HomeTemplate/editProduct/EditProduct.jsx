import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Prompt } from 'react-router-dom';
import {
    actAddProductRequest,
    actGetProductRequest,
    actUpdateProductRequest
} from '../../../Redux/actions'



function EditProduct(props) {

    // --- State lưu dữ liệu nhập vào Input

    let [dataInput, setData] = useState({

        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: "",
        img: '',
        status: false
    })

    let { id, txtName, txtPrice, chkbStatus, status, img } = dataInput
    let { history, match } = props


    // ---- Lấy dữ liệu sản phẩm đc Edit về
    let itemEditing = useSelector(state => state.itemEditing)

    // ---- Hàm Dispatch action lên Reducer
    const dispatch = useDispatch()


    /**
     * ----- Chạy useEffect ở đây để LẤY CÁC THÔNG TIN của Item
     *              mà ta "Click Vào Sửa"   
     */

    useEffect(() => {
        if (match) {
            let id = match.params.id
            dispatch(actGetProductRequest(id))
        }
    }, [])

    // ----- Đổ dữ liệu lấy đc ra Input

    useEffect(() => {
        if (itemEditing) {
            setData({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                img: itemEditing.img,
                chkbStatus: itemEditing.status
            })
        }

    }, [itemEditing])

    // --- Khi đổ dữ liệu xong và goBack về , ấn "THÊM SẢN PHẨM" clear hết dữ liệu đã đổ ra sửa trước đó
    useEffect(() => {

        setData({
            id: "",
            txtName: "",
            txtPrice: "",
            chkbStatus: "",
            img: ''
        })
    }, [])


    /**
     *  ---- Lấy giá trị Nhập vào từ input
     */

    const onChange = (e) => {
        let target = e.target;

        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;

        const newProduct = {
            ...dataInput,
            [name]: value
        }

        /**
         *  ------- Kiểm tra xem người dùng có muốn rời đi khỏi trang web ko 
         *      Gán Cờ dùng xem trường hợp có tồn tại ko
         *      true: đc gán ban đầu nghĩa là chưa tồn tại trường hợp 
         */

        let valid = true

        for (let key in newProduct) {
            // Nếu duyệt qua các thuộc tính KHÔNG PHẢI status :

            if (key !== "status") {

                // mà các thuộc tính đó rỗng thì tồn tại trường hợp 
                if (newProduct[key] === "") {
                    valid = false
                }
            }
        }

        // valid : false --> tồn tại trường hợp trên 
        if (!valid) {
            newProduct.status = true // -->  thông báo hộp thoại cho người dùng 
        }
        else {
            newProduct.status = false
        }

        setData(newProduct)
    }

    /**
     *  -------------- Nút onSave
     */

    let onSave = (e) => {
        e.preventDefault();

        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus,
            img: img
        }

        // ------ SỬA SẢN PHẨM
        if (id) {
            dispatch(actUpdateProductRequest(product))
            history.goBack()
        }

        // ------ THÊM SẢN PHẨM 
        else {
            dispatch(actAddProductRequest(product))
            history.goBack()
        }

    }


    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <form onSubmit={onSave}>

                        <div className="form-group">
                            <label> <b>Tên sản phẩm:</b></label>
                            <input
                                type="text" className="form-control"
                                name="txtName" required value={txtName}
                                onChange={onChange} />
                        </div>

                        <div className="form-group">
                            <label> <b>Giá:</b> </label>
                            <input
                                type="number" className="form-control"
                                name="txtPrice" required value={txtPrice}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label> <b>Hình ảnh:</b> </label>
                            <input
                                type="text" className="form-control"
                                name="img" required value={img}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label> <b>Trạng thái:</b> </label>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    type="checkbox" className="form-check-input"
                                    name="chkbStatus"
                                    checked={chkbStatus}
                                    onChange={onChange} />
                                Còn hàng
                            </label>
                        </div>

                        <div className="mt-4">
                            <Link to="/product-list" className="btn btn-secondary mr-2">
                                <i className="fas fa-arrow-circle-left"></i> Trở lại
                            </Link>

                            <button type="submit" className="btn btn-primary">
                                <i className="fas fa-check"></i> Lưu lại
                            </button>

                        </div>

                        <Prompt
                            when={status}
                            message={() => {
                                return "Bạn có chắc sẽ rời khỏi trang ? "
                            }} />

                    </form>
                </div>
            </div>
        </div>

    );
}

export default EditProduct;