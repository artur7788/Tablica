import React from "react";
import {useSelector} from "react-redux";
import './Todos.css'

export const Todos = () =>{

    const {searchedItem,currentPosts,posts} = useSelector(state => state.post)

    if (searchedItem === ''){
        return(
            currentPosts.map(post => {
                return(
                    <tr key={post.id}>
                        <td className='idSpace'>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )
            })
        )
    }else{
        return(
            posts.filter((val)=>{
                if(val.title.toLowerCase().includes(searchedItem.toLowerCase())){
                    return val
                }
            }).map(post => {
                return(
                    <tr key={post.id}>
                        <td className='idSpace'>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )
            })
        )
    }


}