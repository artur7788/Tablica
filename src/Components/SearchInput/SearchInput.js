import React from "react";
import {searchPosts} from "../../app/features/postSlice";
import {useDispatch, useSelector} from "react-redux";

export const SearchInput = () =>{

    const {searchedItem} = useSelector(state => state.post)
    const dispatch = useDispatch()

    return(
        <div className="input-group">
            <input type="text" className="search" placeholder="Поиск" value={searchedItem} name="search" onChange={(e)=>{
                dispatch(searchPosts(e.target.value))
            }} />
        </div>
    )
}