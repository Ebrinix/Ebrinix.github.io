import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import PropTypes from 'prop-types';

// import { faker } from '@faker-js/faker';
// @mui
// import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography } from '@mui/material';
import {
  Grid,
  Card,
  Table,
  // Link,
  Paper,
  Avatar,
  // Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../components/label';
import Scrollbar from '../components/scrollbar';
import Iconify from '../components/iconify';
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';

// sections
import {
  // AppTasks,
  // AppNewsUpdate,
  // AppOrderTimeline,
  // AppCurrentVisits,
  // AppWebsiteVisits,
  // AppTrafficBySite,
  AppWidgetSummary,
  // AppCurrentSubject,
  // AppConversionRates,
} from '../sections/@dashboard/app';
// mock
// import USERLIST from '../_mock/user';
// import USERLIST2 from '../_mock/mockUsers.json';
// import USERLIST2 from '../_mock/userData.json';

// console.log(USERLIST);
// console.log(USERLIST2);

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'orgName', label: 'ORGANIZATION', alignRight: false },
  { id: 'userName', label: 'USERNAME', alignRight: false },
  { id: 'email', label: 'EMAIL', alignRight: false },
  { id: 'phoneNumber', label: 'PHONE NUMBER', alignRight: false },
  { id: 'createdAt', label: 'DATE JOINED', alignRight: false },
  { id: 'status', label: 'STATUS', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

// ----------------------------------------------------------------------

DashboardAppPage.propTypes = {
  sx: PropTypes.object,
};

export default function DashboardAppPage({ sx, ...other }) {
  // const theme = useTheme();
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('userName');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [USERLIST2, setUSERLIST2] = useState([]);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleOpenMenu = (event, row) => {
    setOpen(event.currentTarget);
    console.log(event.currentTarget.id);
    console.log(row);

    localStorage.setItem('items', JSON.stringify(row));
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  useEffect(() => {
    axios
      .get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users', null, config)
      .then((data) => {
        console.log(data, 'chukwubuike');

        setUSERLIST2(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST2.map((n) => n.userName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST2.length) : 0;

  const filteredUsers = applySortFilter(USERLIST2, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="USERS" total={714000} icon={'users1'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="ACTIVE USERS" color="success" icon={'users2'} total={1352831} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="USERS WITH LOANS" total={1723315} color="primary" icon={'users3'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="USERS WITH SAVINGS" total={234} color="error" icon={'users4'} />
          </Grid>
        </Grid>

        <Card
          sx={{
            mt: 5,
            boxShadow: 8,
            ...sx,
          }}
        >
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST2.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, userName, orgName, status, email, phoneNumber, createdAt } = row;
                    const selectedUser = selected.indexOf(userName) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, userName)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Typography variant="subtitle2" noWrap>
                            {orgName}
                          </Typography>
                        </TableCell>

                        <TableCell align="left">{userName}</TableCell>

                        <TableCell align="left">{email}</TableCell>

                        <TableCell align="left">{phoneNumber}</TableCell>

                        <TableCell align="left">{createdAt}</TableCell>
                        <TableCell align="left">{createdAt}</TableCell>

                        {/* <TableCell align="left">
                          <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell> */}

                        <TableCell align="right">
                          <IconButton
                            size="large"
                            color="inherit"
                            id={id}
                            onClick={(event) => handleOpenMenu(event, row)}
                          >
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST2.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Link to="/dashboard/user/details">
          <MenuItem>
            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
            View Details
          </MenuItem>
        </Link>
        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Blacklist User
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Activate User
        </MenuItem>
      </Popover>
    </>
  );
}
