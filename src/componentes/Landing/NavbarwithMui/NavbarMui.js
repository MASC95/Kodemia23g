import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Box,
  
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import imgLogo from '../../Recruiter/assets/img/logo.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
  },
});

const Navbar = styled(AppBar)(({ theme }) => ({
  position: 'fixed', 
  width: '100%',
  zIndex: theme.zIndex.drawer + 1,
  marginBottom: theme.spacing(5), 
}));

const Logo = styled(Typography)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    marginRight: theme.spacing(25),
  },
}));

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 516,
  },
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    marginLeft: theme.spacing(2),
    backgroundColor: '#498BA6',
    color: theme.palette.common.white,
    width: '8%',
    height: '4%',
    padding: '10px',
    borderRadius: '7px',
    '&:hover': {
      backgroundColor: '#2E676F',
    },
  },
}));

export default function NavbarComponent() {
  return (
    <ThemeProvider theme={theme}>
        <AppBar>
      <Navbar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Logo variant="h6" noWrap>
            <img src={imgLogo} style={{width:"150px"}} alt=''/>
          </Logo>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <LoginButton>Iniciar sesión</LoginButton>
         */}
          

        </Toolbar>
      </Navbar>
      </AppBar>
    </ThemeProvider>
  );
}
