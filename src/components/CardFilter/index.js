import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';

import FilterMenu from './FilterMenu';
import Button from '../Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  search: {
    width: '100%',
    marginRight: theme.spacing(2),
    position: 'relative',
    borderRadius: '0',
    border: '2px solid black',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: fade(theme.palette.background.paper, 0.15),
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
});

function CardFilter(props) {
  const { classes, ...other } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root} {...other}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search guidelines…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'Search guidelines' }}
        />
      </div>
      <Button aria-controls="filter-menu" aria-haspopup="true" onClick={handleOpen}>Tags</Button>
      <FilterMenu {...{ open, anchorEl, handleClose}}/>
    </Box>
  );
}

export default withStyles(styles)(CardFilter);

CardFilter.propTypes = {};
