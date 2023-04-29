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

export const personalThunk = createAsyncThunk(
  "create/personal",
  async ({ first_name, last_nme, dob, email }, thunkAPI) => {
    const body = JSON.stringify({ first_name, last_nme, dob, email });

    try {
      const res = await fetch(`/api/account/personal`, {
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

export const contactThunk = createAsyncThunk(
  "create/contact",
  async ({ state, lga, address, addressAlt }, thunkAPI) => {
    const body = JSON.stringify({ state, lga, address, addressAlt });

    try {
      const res = await fetch(`/api/account/contact`, {
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

export const loginThunk = createAsyncThunk(
  "create/contact",
  async ({ login, password }, thunkAPI) => {
    const body = JSON.stringify({ login, password });

    try {
      const res = await fetch(`/api/account/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });
      const data = await res.json();
      if (res.status === 200) {
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
  user: {
    details: null,
    lastLogin: null
  },
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
      .addCase(loginThunk.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = !!0;
        state.user.details = action.payload?.success?.user_details;
        state.user.lastLogin = action.payload?.success?.last_login;
        state.registrationStage = action.payload?.success?.registration_stage;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(contactThunk.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(contactThunk.fulfilled, (state, action) => {
        state.loading = !!0;
        state.registrationStage = action.payload?.success?.registration_stage;
      })
      .addCase(contactThunk.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(personalThunk.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(personalThunk.fulfilled, (state, action) => {
        state.loading = !!0;
        state.registrationStage = action.payload?.success?.registration_stage;
      })
      .addCase(personalThunk.rejected, (state) => {
        state.loading = !!0;
      })
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
