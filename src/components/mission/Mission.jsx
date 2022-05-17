import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import './missions.css';

const Mission = () => {
  const missions = useSelector((store) => store.missions);
  console.log(missions);
  return (
    <section className="missions">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, th: { border: '1px solid #a3a5a8' } }} aria-label="missions table">
          <TableHead>
            <TableRow>
              <TableCell>Mission</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {missions.map((mission) => (
              <TableRow key={mission.mission_id} sx={{ td: { border: '1px solid #a3a5a8' } }}>
                <TableCell component="th" scope="row">
                  {mission.mission_name}
                </TableCell>
                <TableCell>{mission.description}</TableCell>
                <TableCell>
                  <button type="button" className="btn">
                    Status
                  </button>
                </TableCell>
                <TableCell>
                  <button type="button" className="btn">
                    Leav or join
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Mission;
