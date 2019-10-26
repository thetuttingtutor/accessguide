import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const navQuery = graphql`
  query {
    allContentfulCategory(sort: {fields: createdAt, order: ASC}) {
      nodes{
        id
        name
        subcategories {
          id
          name
        }
      }
    }
  }  
`;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbarSpacer: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

function Drawer(props) {
  const { classes } = props;
  const { allContentfulCategory } = useStaticQuery(navQuery);

  return (
    <MuiDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbarSpacer} />
      <List>
        {allContentfulCategory.nodes.map((category, i) => (
          <Fragment key={`category-${i}`}>
            <ListItem button>
              <ListItemText primary={category.name} />
            </ListItem>
            <List component="div" disablePadding>
              {category.subcategories.map((subcategory, j) => (
                <ListItem button key={`subcategory-${i}-${j}`} className={classes.nested}>
                  <ListItemText primary={subcategory.name} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </List>
    </MuiDrawer>
  );
};

Drawer.propTypes = {}

export default withStyles(styles)(Drawer);
