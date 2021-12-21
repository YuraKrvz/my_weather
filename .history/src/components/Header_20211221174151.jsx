import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
//
import {CurrentCountryByName} from '../config';
import {useDispatch} from 'react-redux';
import {addCity} from '../store';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const [searchName, setSearchName] = React.useState('');
  const dispatch = useDispatch();
  const nameRef = React.useRef();

  React.useEffect(()=>{
    if(searchName !== ''){
      fetch( CurrentCountryByName(searchName) )
      .then(res => {
        if(res.ok){
          return res.json()
        }
        throw new Error(res.status)
      })
      .then(res => dispatch(addCity(res)))
      .catch(error => console.error(error))
    }
  }, [searchName])

  const handlerSearch = () => {
    setSearchName(nameRef.current.getElementsByTagName('input')[0].value);
      // console.log(nameRef.current.getElementsByTagName('input')[0].value)
    nameRef.current.getElementsByTagName('input')[0].value = '';
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My weather
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=""
              inputProps={{ 'aria-label': 'search' }}
              ref={nameRef}
              onBlur={()=> handlerSearch()}
            />
            </Search>
            <Button variant="contained" style={{marginLeft: '10px'}} endIcon={<SendIcon />}>
              Search
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
