import React from 'react';
import { useSelector } from 'react-redux';

const Mission = () => {
  const missions = useSelector((store) => store.missions);
  console.log(missions);
  return <h2>Welcome to mission page</h2>;
};

export default Mission;
