import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    error: false,
    success: false,
    loading: false
}

// Register an user and sign-in
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    const data = await authService.register(user);
    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0])
    }
    return data;
})

// Enviar formulário
export const submitForm = createAsyncThunk("auth/submitForm", async (formData, thunkAPI) => {
    const data = await authService.submitForm(formData);
    if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0])
    }
    return data;
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.user = null;
            })
            // Adicionando reducers para submitForm
            .addCase(submitForm.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(submitForm.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;