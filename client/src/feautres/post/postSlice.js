import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
    posts: [],
    post: [],
    isError:false,
    isSuccess: false,
    isLoading: false,
    message:  ""
}

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
 return await postService.getAllPosts()
})

export const getPostByCategory = createAsyncThunk('posts/getPostsByCategory', async (category) => {
    return await postService.getPostByCategory(category)
})
export const getSinglePost = createAsyncThunk('posts/getSinglePost', async (linkText) => {
    return await postService.getSinglePost(linkText)
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
        })
        .addCase(getPostByCategory.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPostByCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload
        })
        .addCase(getPostByCategory.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
        })
        .addCase(getSinglePost.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getSinglePost.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.post = action.payload
        })
        .addCase(getSinglePost.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.message = action.type
        })
    }
})

export const {reset} = postSlice.actions

export default postSlice.reducer