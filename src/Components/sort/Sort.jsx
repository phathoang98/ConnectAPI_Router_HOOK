import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actSortProduct } from '../../Redux/actions';
import "./style.css"

function Sort(props) {

    let sort = useSelector(state => state.sort)


    let dispatch = useDispatch()

    let onSort = (sortBy, sortValue) => {
        dispatch(actSortProduct({
            by: sortBy,
            value: sortValue
        }))
    }


    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sắp xếp
                </button>

                <div className="dropdown-menu" aria-labelledby="triggerId">
                    <a
                        className={
                            sort.by === "name" && sort.value === 1
                                ? "sort_selected dropdown-item"
                                : "dropdown-item"
                        }
                        onClick={() => onSort("name", 1)}>
                        <i class="fas fa-sort-alpha-down"></i> Tên A-Z
                    </a>

                    <a
                        className={
                            sort.by === "name" && sort.value === -1
                                ? "sort_selected dropdown-item"
                                : "dropdown-item"
                        }
                        onClick={() => onSort("name", -1)}>
                        <i class="fas fa-sort-alpha-down-alt"></i> Tên Z-A
                    </a>

                    <div className="dropdown-divider" />

                    <a
                        className={
                            sort.by === "status" && sort.value === 1
                                ? "sort_selected dropdown-item"
                                : "dropdown-item"
                        }
                        onClick={() => onSort("status", 1)}>Còn hàng</a>
                    <a
                        className={
                            sort.by === "status" && sort.value === -1
                                ? "sort_selected dropdown-item"
                                : "dropdown-item"
                        }
                        onClick={() => onSort("status", -1)}>Hết hàng</a>
                </div>
            </div>

        </div>
    );
}

export default Sort;