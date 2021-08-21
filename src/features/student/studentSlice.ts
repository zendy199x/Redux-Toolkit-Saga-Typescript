import { RootState } from './../../app/store';
import {
  ListParams,
  ListResponse,
  PaginationParams,
} from './../../models/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface StudentState {
  loading?: boolean;
  list: Student[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: StudentState = {
  loading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 15,
  },
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    fetchStudentList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchStudentListSuccess(
      state,
      action: PayloadAction<ListResponse<Student>>
    ) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchStudentListFailed(state, action: PayloadAction<string>) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const studentActions = studentSlice.actions;

// Selectors
export const selectStudentLoading = (state: RootState) => state.student.loading;
export const selectStudentList = (state: RootState) => state.student.list;
export const selectStudentFilter = (state: RootState) => state.student.filter;
export const selectStudentPagination = (state: RootState) =>
  state.student.pagination;

// Reducer
const studentReducer = studentSlice.reducer;
export default studentReducer;
