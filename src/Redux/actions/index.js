import callApi from '../../Utils/apiCaller'
import * as Types from '../constants'

// ----- LẤY DỮ LIỆU TỔNG TỪ SERVER

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return (
            callApi('products', 'GET', null)
                .then((res) => {
                    /**
                     *  --- Phải đợi Fetch dữ liệu về THÀNH CÔNG xong , rồi sau đó 
                     *    mới dispatch 1 action (kèm theo dữ liệu đã đc fetch thành công)
                     *    đem bỏ vào Reducers
                     */
                    dispatch(actFetchProducts(res.data))
                })
        )
    }
}

const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

// ----------- THÊM SẢN PHẨM 

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return (
            callApi('products', 'POST', product)
                .then((res) => {
                    dispatch(actAddProduct(res.data))
                })
        )
    }
}

const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

// ------------- XÓA SẢN PHẨM

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return (
            callApi(`products/${id}`, 'DELETE', null)
                .then((res) => {
                    dispatch(actDeleteProduct(id))
                })
        )
    }
}

const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

// ---------- LẤY THÔNG TIN SẢN PHẨM TA MUỐN SỬA (đổ ra Input)

export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return (
            callApi(`products/${id}`, 'GET', null)
                .then((res) => {
                    dispatch(actGetProduct(res.data))
                })
        )
    }
}

const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

// ----------- CẬP NHẬT SẢN PHẨM (Nút On-Save)


export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return (
            callApi(`products/${product.id}`, 'PUT', product)
                .then((res) => {
                    dispatch(actUpdateProduct(res.data))
                })
        )
    }
}

const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}


// ------ TÌM KIẾM TÊN SẢN PHẨM

export const actSearchProduct = (keyword) => {
    return {
        type: Types.SEARCH_PRODUCT,
        keyword
    }
}
