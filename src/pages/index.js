import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Page from '../components/Page';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Drawer from '../components/Drawer';
import CardContainer from '../components/CardContainer';

const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

const styles = theme => ({
  toolbarSpacer: theme.mixins.toolbar,
});

function HomePage(props) {
  const { classes } = props;
  const { site } = useStaticQuery(homePageQuery);
  return (
    <Page>
      <Seo title="Home" />
      <Header
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={"Access Guide"}
      />
      <Drawer />
      <Container>
        <div className={classes.toolbarSpacer} />
        <main>
          <CardContainer />
        </main>
      </Container>
      <Footer />
    </Page>
  );
}

export default withStyles(styles)(HomePage);
