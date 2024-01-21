import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appState',
    initialState: [
        {
            id: 1,
            name: 'Anushthan',
            address: 'BH1'
        },
        {
            id: 2,
            name: 'Tanmay',
            address: 'BH2'
        }
    ],
    reducers: {
        addPatient: (state, action) => {
            state.push(action.payload);
        },
        removePatient: (state, action) => {
            const {name} = action.payload;
            state.filter(patient => patient.name != name)
        }
    }
});

export default appSlice.reducer;
export const { addPatient, removePatient } = appSlice.actions;