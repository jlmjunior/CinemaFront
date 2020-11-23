import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

import { Link } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import InfoIcon from '@material-ui/icons/Info';

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <ListItem button component={ Link } to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Página inicial' />
        </ListItem>

        <ListItem button component={ Link } to="/vagas">
          <ListItemIcon>
            <MovieFilterIcon />
          </ListItemIcon>
          <ListItemText primary='Em alta' />
        </ListItem>

        <ListItem button component={ Link } to="/sobre">
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