import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: [
            {
                id: 1,
                name: 'John',
                email: 'abc@123',
            },
            {
                id: 2,
                name: 'Smith',
                email: 'abc@456',
            }
        ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const user = state.find(user => user.id === id);
            if(user) {
                user.name = name;
                user.email = email;
            }
        }
    }
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;