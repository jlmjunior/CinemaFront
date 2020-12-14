import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button, MenuItem, makeStyles, Divider, Menu, Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { ThemeContext } from '../../context/GlobalContext'

const LoginMenu = (props) => {
  const [status, setStatus] = React.useState(null);

  const anchorClick = (event) => {
    setStatus(event.currentTarget);
  };

  const closeMenu = () => {
    setStatus(null);
  };

  const {userConfig, setUserConfig} = React.useContext(ThemeContext)
  const {loading, setLoading} = React.useContext(ThemeContext)

  const Logout = () => {
    setLoading(true)
    localStorage.removeItem('userconfig')
    setUserConfig(null)
    setLoading(false)
  }

  return (
    <div>
      <Button 
        color="inherit"
        startIcon={<Avatar style={{ marginRight:"2px", backgroundColor:"#5A5A5A" }}>{props.user[0]}</Avatar>}
        endIcon={<ArrowDropDownIcon style={{ marginLeft:"10px"}} />} 
        aria-controls="user-menu" 
        aria-haspopup="true" 
        onClick={anchorClick}>
        {props.user}
      </Button>
      <Menu
        id="user-menu"
        anchorEl={status}
        keepMounted
        open={Boolean(status)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Perfil</MenuItem>
        {
          userConfig.userInfo.Role === 1 ?
          (
            <MenuItem component={Link} to="/Admin">Painel do administrador</MenuItem>
          ) :
          (
            <MenuItem component={Link} to="/Ingressos">Meus ingressos</MenuItem>
          )
        }
        <Divider />
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default LoginMenu