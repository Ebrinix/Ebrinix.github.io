// @mui
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
      <StyledIconLeft
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={14} height={14} />
      </StyledIconLeft>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
      <Typography variant="h3">{fShortenNumber(total)}</Typography>
    </Card>
  );
}
