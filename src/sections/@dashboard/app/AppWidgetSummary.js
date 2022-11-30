// @mui
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

// const StyledIcon = styled('div')(({ theme }) => ({
//   margin: 'auto',
//   display: 'flex',
//   borderRadius: '50%',
//   alignItems: 'center',
//   width: theme.spacing(8),
//   height: theme.spacing(8),
//   justifyContent: 'center',
//   marginBottom: theme.spacing(3),
// }));

const StyledIconLeft = styled('div')(({ theme }) => ({
  // margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(5),
  height: theme.spacing(5),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  const [iconType, setIconType] = useState(icon);
  console.log(iconType);
  return (
    <Card
      sx={{
        py: 5,
        pl: 5,
        boxShadow: 4,
        textAlign: 'left',
        bgcolor: (theme) => alpha(theme.palette.common.white),
        ...sx,
      }}
      {...other}
    >
      {iconType === 'users1' ? (
        <img
          alt="Alt Name"
          src="/assets/images/avatars/icon.png"
          style={{ marginBottom: '8px' }}
          width={40}
          height={40}
        />
      ) : null}
      {iconType === 'users2' ? (
        <img
          alt="Alt Name"
          src="/assets/images/avatars/icon_1.png"
          style={{ marginBottom: '8px' }}
          width={40}
          height={40}
        />
      ) : null}
      {iconType === 'users3' ? (
        <img
          alt="Alt Name"
          src="/assets/images/avatars/icon_2.png"
          style={{ marginBottom: '8px' }}
          width={40}
          height={40}
        />
      ) : null}
      {iconType === 'users4' ? (
        <img
          alt="Alt Name"
          src="/assets/images/avatars/icon_3.png"
          style={{ marginBottom: '8px' }}
          width={40}
          height={40}
        />
      ) : null}
      {/* sss */}
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
      <Typography variant="h3">{fShortenNumber(total)}</Typography>
    </Card>
  );
}
