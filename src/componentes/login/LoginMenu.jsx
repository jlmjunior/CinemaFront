import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button, Popper, Grow, Paper, MenuList, MenuItem, ClickAwayListener, makeStyles, Divider } from '@material-ui/core';
import { ThemeContext } from '../../context/GlobalContext'

const options = ['Perfil', 'Configuração', 'Logout'];

const useStyles = makeStyles(() => ({
  paperCustom: {
    borderRadius: '1px',
  },
}))

const LoginMenu = (props) => {
  const classes = useStyles()

  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const {setUserConfig} = React.useContext(ThemeContext)
  const {loading, setLoading} = React.useContext(ThemeContext)

  const openClose = () => {
    setOpen(!open);
  };

  const close = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

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
        variant="text"
        size="small"
        ref={anchorRef}
        aria-controls={open ? 'split-button-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-label="menu do usuário"
        aria-haspopup="menu"
        onClick={openClose}
        endIcon={<ArrowDropDownIcon />}
      >{props.user}</Button>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paperCustom} elevation={2}>
              <ClickAwayListener onClickAway={close}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => {
                    if (index === 2)
                      return (
                        <span key={index}>
                          <Divider />
                          <MenuItem onClick={Logout}>
                            {option}
                          </MenuItem>
                        </span>
                      )
                    else
                      return (
                        <span key={index}>
                          <MenuItem onClick={close}>
                            {option}
                          </MenuItem>
                        </span>
                      )
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default LoginMenu