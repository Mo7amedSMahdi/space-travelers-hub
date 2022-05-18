import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../store/missions';
import './profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [missions.list]);

  return (
    <section className="profile flex">
      <div className="missions flex flex--column">
        <div className="title">
          <h2>My Missions</h2>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, th: { border: '1px solid var(--clr-gray)' } }} aria-label="missions table">
            <TableBody>
              {missions.list
                .filter((mission) => mission.reserved)
                .map((mission) => (
                  <TableRow
                    key={mission.id}
                    sx={{
                      td: { border: '1px solid var(--clr-gray)' },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {mission.name}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="rockets flex flex--column">
        <div className="title">
          <h2>My Rockets</h2>
          <p>**Replace mission with rockets**</p>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, th: { border: '1px solid var(--clr-gray)' } }} aria-label="missions table">
            <TableBody>
              {missions.list
                .filter((mission) => mission.reserved)
                .map((mission) => (
                  <TableRow
                    key={mission.id}
                    sx={{
                      td: { border: '1px solid var(--clr-gray)' },
                    }}
                  >
                    <TableCell sx={{ maxWidth: 150 }} component="th" scope="row">
                      {mission.name}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Profile;
