import { createSlice } from '@reduxjs/toolkit'

type loginStateType = {
    authToken: null | string;
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    authToken: null
  },
  reducers: {
    login: (state,action)=>{
        state.authToken = action.payload;
    },
    logout: (state) =>{
        state.authToken = null
    }
  },
})

export const { login,logout } = loginSlice.actions


export const getAuthToken = (state:any) => state.authToken;

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value

export default loginSlice.reducer
