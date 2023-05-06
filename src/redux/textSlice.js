const { createSlice } = require("@reduxjs/toolkit");

const textSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((e, i) => i !== action.payload.index);
    },
    edit(state, action) {
      return state.map((items, i) =>
        i === action.payload.index ? action.payload.editText : items
      );
    },
  },
});

export const { add, remove, edit } = textSlice.actions;
export default textSlice.reducer;
