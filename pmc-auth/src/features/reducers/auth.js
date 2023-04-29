// import { encrypt } from "@/secure";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// phone_number: encrypt(phoneNumber).toString(),
// password: encrypt(password).toString(),

export const createThunk = createAsyncThunk(
  "create/account",
  async ({ phoneNumber, password }, thunkAPI) => {
    const body = JSON.stringify({
      phone_number: phoneNumber,
      password,
    });

    try {
      const res = await fetch(`/api/account/create`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });
      const data = await res.json();
      if (res.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: !!0,
  loading: !!0,
  created_success: !!0,
  personal_success: !!0,
  contact_success: !!0,
  wsConnect: null,
  registrationStage: 'stage one'
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetCreate: (state) => {
      state.created_success = !!0;
    },
    resetPersonal: (state) => {
      state.personal_success = !!0;
    },
    resetContact: (state) => {
      state.contact_success = !!0;
    },
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(getFaq.pending, (state) => {
    //     state.loading = !!1;
    //   })
    //   .addCase(getFaq.fulfilled, (state, action) => {
    //     state.loading = !!0;
    //     state.faqs = action.payload;
    //   })
    //   .addCase(getFaq.rejected, (state) => {
    //     state.loading = !!0;
    //   })
    //   .addCase(postBlog.pending, (state) => {
    //     state.loading = !!1;
    //   })
    //   .addCase(postBlog.fulfilled, (state, action) => {
    //     state.loading = !!0;
    //     state.blogs = action.payload;
    //   })
    //   .addCase(postBlog.rejected, (state) => {
    //     state.loading = !!0;
    //   })
    //   .addCase(getBlog.pending, (state) => {
    //     state.loading = !!1;
    //   })
    //   .addCase(getBlog.fulfilled, (state, action) => {
    //     state.loading = !!0;
    //     state.blogs = action.payload;
    //   })
    //   .addCase(getBlog.rejected, (state) => {
    //     state.loading = !!0;
    //   })
    //   .addCase(postTestimonies.pending, (state) => {
    //     state.loading = !!1;
    //   })
    //   .addCase(postTestimonies.fulfilled, (state, action) => {
    //     state.loading = !!0;
    //     state.testimonies = action.payload;
    //   })
    //   .addCase(postTestimonies.rejected, (state) => {
    //     state.loading = !!0;
    //   })
      .addCase(createThunk.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(createThunk.fulfilled, (state, action) => {
        state.loading = !!0;
        state.wsConnect = action.payload?.success?.otp?.connection_id;
        state.registrationStage = action.payload?.success?.registration_stage;
      })
      .addCase(createThunk.rejected, (state) => {
        state.loading = !!0;
      });
  },
});

export const { resetCreate, resetPersonal, resetContact } = authSlice.actions;
export default authSlice.reducer;
