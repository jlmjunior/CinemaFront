import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

import { NavLink } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import InfoIcon from '@material-ui/icons/Info';

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <ListItem button component={ NavLink } to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Página inicial' />
        </ListItem>

        <ListItem button component={ NavLink } to="/alta">
          <ListItemIcon>
            <MovieFilterIcon />
          </ListItemIcon>
          <ListItemText primary='Em alta' />
        </ListItem>

        <ListItem button component={ NavLink } to="/sobre">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='Sobre' />
        </ListItem>

        <Divider />

      </List>
    </div>
  )
}

export default Listas