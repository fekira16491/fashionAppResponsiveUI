import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from "../../redux/store/slice/counterSlice"
export default configureStore({
  reducer: {
    counter: counterReducer,

  },
})
