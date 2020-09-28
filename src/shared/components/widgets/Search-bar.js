import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import './Search-bar';




const SearchBar = () => {

  /*  
const useStyles = useStyles((theme) => ({
    root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        iconButton: {
          padding: 10,
        },
        divider: {
          height: 28,
          margin: 4,
        },
      })); 

*/
    //const classes = useStyles();
    return ( 
   <Paper component="form" className="search-bar-root" id="search-bar">
        <InputBase
            className=""
            placeholder="Search product or Client"
            inputProps={{ 'aria-label': 'search Product' }}
        />
        <IconButton type="submit" className="{classes.iconButton} "aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
     );
}
 
export default SearchBar;