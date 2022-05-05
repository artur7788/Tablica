import React, {useEffect} from 'react';
import './App.css';
import {Todos} from "./Components/Todos";
import Pagination from './Components/Pagination/Pagination'
import {getPosts} from "./app/features/postSlice";
import {useDispatch, useSelector} from "react-redux";
import {SearchInput} from "./Components/SearchInput";
import {TitleSorting} from "./Components/TitleSorting";

function App() {

    const {currentPage,sortPosts} = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[sortPosts,currentPage])

    return (
    <div className="App">
        <div className="container">
                <SearchInput/>
            <table className="table">
                <thead>
                   <TitleSorting/>
                </thead>
                <tbody className='table-bordered'>
                    <Todos/>
                </tbody>
            </table>
            <Pagination/>
        </div>
    </div>

  );
}

export default App;
