import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { selectStudentList, studentActions } from '../studentSlice';

const ListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);

  console.log(useAppSelector(selectStudentList));

  return <div>Student List Page</div>;
};

export default ListPage;
