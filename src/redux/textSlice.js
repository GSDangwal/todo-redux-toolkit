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
        i === action.payload.index
          ? {
              title: action.payload.editText,
              date: items.date,
              isCompleted: items.isCompleted,
            }
          : items
      );
    },
    isChecked(state, action) {
      return state.map((items, i) =>
        i === action.payload.index
          ? {
              title: items.title,
              date: items.date,
              isCompleted: !items.isCompleted,
            }
          : items
      );
    },
  },
});

export const { add, remove, edit, isChecked } = textSlice.actions;
export default textSlice.reducer;
