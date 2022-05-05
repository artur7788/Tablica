import React from "react";
import {BsChevronDown} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {clickTitle} from "../../app/features/postSlice";

export const TitleSorting = ()=>{

    const {posts,sortPosts} = useSelector(state => state.post)
    const dispatch = useDispatch()


    const sorting = (col)=>{
        if (sortPosts === true){
            const sorting = [...posts].sort((a,b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1
            )
            console.log(posts)
            dispatch(clickTitle(sorting))

        }else if(sortPosts === false){
            const sorting =[...posts].sort((a,b)=>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1
            )
            console.log(sorting)
            dispatch(clickTitle(sorting))
        }
    }

    return(
        <tr>
            <th><span className='titleSpace'>ID</span> <BsChevronDown/></th>
            <th><span className='titleSpace' onClick={()=>sorting('title')}>Заголовок</span> <BsChevronDown/></th>
            <th><span className='titleSpace' onClick={()=>sorting('body')}>Описание</span> <BsChevronDown/></th>
        </tr>
    )
}