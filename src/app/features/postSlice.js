import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getposts", async ()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
})


const postSlice = createSlice(({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        indexOfLastPost:0,
        indexOfFirstPost:0,
        currentPosts:[],
        currentPage:1,
        postsPerPage:10,
        totalPosts:0,
        searchedItem:'',
        sortPosts:true,
        sortedPosts:[]
    },

    reducers:{
        paginate:(state,action)=>{
            state.currentPage = action.payload

        },
        previousPage:(state,action)=>{
            if (state.currentPage != 1){
                state.currentPage -=1
            }else{
                state.currentPage = 1
            }
        },
        nextPage:(state,action)=>{
            if (state.currentPage != state.totalPosts/state.postsPerPage){
                state.currentPage +=1
            }else{
                state.currentPage = 10
            }
        },
        searchPosts:(state,action)=>{
            state.searchedItem = action.payload
        },
        clickTitle:(state,action)=>{
            state.sortedPosts = action.payload
            state.sortPosts = !state.sortPosts
        }
    },
    extraReducers:{
        [getPosts.pending]:(state,action)=>{
            state.loading = true
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.loading = false
            state.posts = action.payload
            state.indexOfLastPost = state.currentPage * state.postsPerPage
            state.indexOfFirstPost = state.indexOfLastPost - state.postsPerPage
            state.currentPosts = state.posts.slice(state.indexOfFirstPost,state.indexOfLastPost)
            state.totalPosts = state.posts.length
            if (state.sortedPosts.length){
                state.currentPosts = state.sortedPosts
            }
        },
        [getPosts.rejected]:(state,action)=>{
            state.loading = false
        }
    },
}))

export const {paginate,nextPage,previousPage,searchPosts,clickTitle} = postSlice.actions
export default postSlice.reducer