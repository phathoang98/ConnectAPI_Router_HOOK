import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actSearchProduct } from '../../Redux/actions'

function Search(props) {

    // ----- State lưu giá trị nhập vô Input để tìm kiếm 

    let [dataInput, setData] = useState({

        keyword: ''
    })

    let { keyword } = dataInput

    const dispatch = useDispatch()

    // ----- Lấy giá trị ô Input

    let onChange = (e) => {
        let target = e.target

        let name = target.name
        let value = target.value

        setData({
            ...dataInput,
            [name]: value
        })
    }

    // ---- NÚT TÌM KIẾM

    let onSearch = (e) => {
        e.preventDefault()

        dispatch(actSearchProduct(keyword))
    }


    return (
        <div>

            <form className="form-group d-flex justify-content-center p-0">

                <input
                    type="text"
                    style={{ width: 500, outline: 'none' }} className="mr-4"
                    placeholder=" Nhập từ khóa..."
                    name="keyword" onChange={onChange}
                    value={keyword}
                />

                <span>
                    <button className="btn btn-secondary" onClick={onSearch}>
                        <i className="fas fa-search"></i>  Tìm kiếm
                    </button>
                </span>

            </form>

        </div>
    );
}

export default Search;