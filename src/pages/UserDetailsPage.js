import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Avatar,
  CardHeader,
} from '@mui/material';
// components
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';

// sections
import { AppTasks, AppNewsUpdate, AppTrafficBySite } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function UserDetailsPage() {
  const theme = useTheme();
  const [newUserData, setNewUserData] = useState(JSON.parse(localStorage.getItem('items')));

  // useEffect(() => {
  //   const getUserInfo = localStorage.getItem('items');

  //   console.log(getUserInfo);
  //   if (getUserInfo == null) {
  //     console.log('storage does not exist');
  //   } else {
  //     console.log('New storage does exists');
  //     console.log(JSON.parse(getUserInfo));
  //     setNewUserData(JSON.parse(localStorage.getItem('items')));
  //   }
  // }, []);

  console.log(newUserData);

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
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <Scrollbar>
                <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                  <Grid item xs={7} sm={6} md={4} style={{ padding: '15px' }}>
                    <Link color="inherit" variant="h4" underline="hover" noWrap>
                      {`${newUserData.profile.firstName} ${newUserData.profile.lastName}`}
                    </Link>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                      {`${newUserData.userName}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sm={6} md={4} style={{ padding: '15px' }}>
                    <Link color="inherit" variant="body2" underline="hover" noWrap>
                      {'User’s Tier'}
                    </Link>

                    <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                      <Grid item xs={1} sm={6} md={1} style={{ padding: '0px' }}>
                        <Box
                          component="img"
                          alt="img_alt"
                          src="/assets/images/covers/Vector.png"
                          sx={{ width: 12, height: 12, borderRadius: 1.5, flexShrink: 0 }}
                        />
                      </Grid>
                      <Grid item xs={1} sm={6} md={1} style={{ padding: '0px' }}>
                        <Box
                          component="img"
                          alt="img_alt"
                          src="/assets/images/covers/Vector.png"
                          sx={{ width: 12, height: 12, borderRadius: 1.5, flexShrink: 0 }}
                        />
                      </Grid>
                      <Grid item xs={1} sm={6} md={1} style={{ padding: '0px' }}>
                        <Box
                          component="img"
                          alt="img_alt"
                          src="/assets/images/covers/Vector2.png"
                          sx={{ width: 12, height: 12, borderRadius: 1.5, flexShrink: 0 }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} style={{ padding: '15px' }}>
                    <Link color="inherit" variant="h5" underline="hover" noWrap>
                      {`${newUserData.accountBalance}`}
                    </Link>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                      {`${newUserData.accountNumber}/Providus Bank`}
                    </Typography>
                  </Grid>
                </Grid>
              </Scrollbar>
              <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                <Grid item xs={6} sm={6} md={2} style={{ padding: '5px' }}>
                  <Button size="small" style={{ fontSize: '15px', fontWeight: '100' }} sx={{ px: 3 }} color="inherit">
                    General Details
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={2} style={{ padding: '5px' }}>
                  <Button size="small" style={{ fontSize: '15px', fontWeight: '100' }} sx={{ px: 3 }} color="inherit">
                    Documents
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={2} style={{ padding: '5px' }}>
                  <Button size="small" style={{ fontSize: '15px', fontWeight: '100' }} sx={{ px: 3 }} color="inherit">
                    Bank Details
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={2} style={{ padding: '5px' }}>
                  <Button size="small" style={{ fontSize: '15px', fontWeight: '100' }} sx={{ px: 3 }} color="inherit">
                    Loans
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={2} style={{ padding: '5px' }}>
                  <Button size="small" style={{ fontSize: '15px', fontWeight: '100' }} sx={{ px: 3 }} color="inherit">
                    Savings
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={2} style={{ padding: '5px' }}>
                  <Button size="small" style={{ fontSize: '15px', fontWeight: '100' }} sx={{ px: 3 }} color="inherit">
                    App and System
                  </Button>
                </Grid>
              </Grid>
              {/* <Divider /> */}
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardHeader title={'Personal Information'} />
              <Scrollbar>
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                  <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                    <Grid item xs={6} sm={6} md={2} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'FULL NAME'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.profile.firstName} ${newUserData.profile.lastName}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'PHONE NUMBER'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.profile.phoneNumber}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'EMAIL ADDRESS'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.email}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'BVN'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.profile.bvn}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'GENDER'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.profile.gender}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                          paddingTop: '8px',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'MARITAL STATUS'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {'Single'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                          paddingTop: '8px',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'CHILDREN'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {'None'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                          paddingTop: '8px',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'TYPE OF RESIDENCE'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {'Parent’s Apartment'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
                <Divider />
                <CardHeader title={'Education and Employment'} />
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                  <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'LEVEL OF EDUCATION'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.level}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'EMPLOYMENT STATUS'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.employmentStatus}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'SECTOR OF EMPLOYMENT'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.sector}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'DURATION OF EMPLOYMENT'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.duration}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                          paddingTop: '8px',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'OFFICE EMAIL'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.officeEmail}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                          paddingTop: '8px',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'MONTHLY INCOME'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.monthlyIncome[0]} - ${newUserData.education.monthlyIncome[1]}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                          paddingTop: '8px',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'LOAN REPAYMENT'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.education.loanRepayment}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
                <Divider />
                <CardHeader title={'Socials'} />
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                  <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'TWITTER'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.socials.twitter}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'FACEBOOK'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.socials.facebook}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'INSTAGRAM'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.socials.instagram}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
                <Divider />
                <CardHeader title={'Guarantor'} />
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                  <Grid container spacing={3} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'FULL NAME'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.guarantor.firstName} ${newUserData.guarantor.lastName}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'PHONE NUMBER'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.guarantor.phoneNumber}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'ADDRESS'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.guarantor.address}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} style={{ padding: '15px' }}>
                      <Link
                        color="inherit"
                        variant="body4"
                        style={{
                          // fontFamily: 'Work Sans',
                          fontStyle: 'normal',
                          fontSize: '12px',
                          lineHeight: '14px',
                          color: '#545F7D',
                        }}
                        underline="hover"
                        noWrap
                      >
                        {'GENDER'}
                      </Link>

                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: '500',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: '#545F7D',
                        }}
                        sx={{ color: 'text.secondary' }}
                        noWrap
                      >
                        {`${newUserData.guarantor.gender}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Scrollbar>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
