import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import {
  dashboardActions,
  selectDashboardLoading,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingCityList,
  selectStatistics,
} from './dashboardSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectStatistics);
  const hightestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingCityList);

  console.log({
    loading,
    statistics,
    hightestStudentList,
    lowestStudentList,
    rankingByCityList,
  })

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return <div>Dashboard</div>;
};

export default Dashboard;
