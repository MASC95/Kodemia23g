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
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF', 
    },
  },
});

const Navbar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
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
  },
}));

export default function NavbarComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Logo variant="h6" noWrap>
            Jobinder
          </Logo>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <LoginButton>Iniciar sesión</LoginButton>
        </Toolbar>
      </Navbar>
    </ThemeProvider>
  );
}
