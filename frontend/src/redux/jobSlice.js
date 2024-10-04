import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name : "job",
    initialState : {
        allJobs : [],
        allAdminJobs : [],
        singleJob : null,
        searchJobByKeyword : [],
        appliedJobs : [],
        searchQuery : "",
    },
    reducers: {
        setAllJobs : (state,action) => {
            state.allJobs = action.payload;
        },
        setSingleJob : (state,action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs : (state,action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByKeyword : (state,action) => {
            state.searchJobByKeyword = action.payload;
        },
        setAppliedJobs:(state,action) => {
            state.appliedJobs = action.payload;
        },
        setSearchQuery:(state,action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const {
    setAllJobs,
    setSingleJob,
    setAllAdminJobs,
    setSearchJobByKeyword,
    setAppliedJobs,
    setSearchQuery
} = jobSlice.actions;
export default jobSlice.reducer;