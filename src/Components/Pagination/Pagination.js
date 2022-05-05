import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './Pagination.css'
import {paginate,nextPage,previousPage} from '../../app/features/postSlice'



const Pagination = () =>{

    const {postsPerPage,totalPosts} = useSelector(state => state.post)

    const dispatch = useDispatch()

    const pageNumbers = []
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }

    return(
            <footer className="d-flex justify-content-around">
                <div className='buttons'>
                    <p onClick={()=> dispatch(previousPage())}>НАЗАД</p>
                </div>
                <ul className='pagination'>
                    {pageNumbers.map(number =>(
                        <li key={number} className='page-item'>
                            <a onClick={()=> dispatch(paginate(number))} href="!#" className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='buttons'>
                    <p onClick={()=> dispatch(nextPage())}>ДАЛЕЕ</p>
                </div>
            </footer>
    )
}

export default Pagination