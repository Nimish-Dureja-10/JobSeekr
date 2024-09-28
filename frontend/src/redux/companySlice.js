import {createSlice} from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState : {
        singleCompany : null,
        allCompanies : [],
        searchCompanyByKeyword : []
    },
    reducers: {
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setAllCompanies:(state,action)=> {
            state.allCompanies = action.payload;
        },
        setSearchCompanyByKeyword:(state,action)=>{
            state.searchCompanyByKeyword = action.payload;
        }
    }
});

export const {setSingleCompany,setAllCompanies,setSearchCompanyByKeyword} = companySlice.actions;
export default companySlice.reducer;