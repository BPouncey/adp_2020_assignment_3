import React from 'react'
import useStyles from './header.styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar' 
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'

const Header = () => {
    const classes = useStyles()
    const token = localStorage.getItem('jwt')

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.toolBar}>

                    <Link className={classes.link} to="/">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Link>

                    <div className={classes.linkDiv}>
                        <Typography>
                            {token ? (
                                <Link
                                    className={classes.link} 
                                    onClick={() => (
                                        localStorage.removeItem('jwt')
                                    )} to="/home" >Log Out</Link> 
                            ):(  
                                <Link className={classes.link} to="/login">Login</Link>
                            )}
                           
                        </Typography>
                        <Typography>
                            {token ? (
                                <Link
                                    className={classes.link}
                                    to="/feed"
                                    >Feed
                                </Link>
                            ):(
                                <Link
                                    className={classes.link}
                                    to="/signup"
                                >Create Account
                                </Link>
                            )}
                        </Typography>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header