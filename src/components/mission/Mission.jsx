import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission } from '../../store/missions';
import './missions.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [missions.list]);

  const handelJoinMission = (id) => {
    dispatch(joinMission(id));
  };
  return (
    <section className="missions">
      {missions.loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, th: { border: '1px solid var(--clr-gray)' } }} aria-label="missions table">
            <TableHead>
              <TableRow>
                <TableCell>Mission</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {missions.list.map((mission) => (
                <TableRow
                  key={mission.id}
                  sx={{
                    td: { border: '1px solid var(--clr-gray)' },
                    '&:nth-of-type(odd)': { background: '#F2F2F2' },
                  }}
                >
                  <TableCell sx={{ maxWidth: 150 }} component="th" scope="row">
                    {mission.name}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 600 }}>{mission.description}</TableCell>
                  <TableCell align="center">
                    {!mission.resolved ? <p className="badge badge--grayed">NOT A MEMBER</p> : <p className="badge badge--active">Active Member</p>}
                  </TableCell>
                  <TableCell align="center">
                    {!mission.resolved ? (
                      <button
                        type="button"
                        onClick={() => {
                          handelJoinMission(mission.id);
                        }}
                        className="btn btn--outline"
                      >
                        Join mission
                      </button>
                    ) : (
                      <button type="button" className="btn btn--outline btn--red">
                        Leave Mission
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </section>
  );
};

export default Mission;
