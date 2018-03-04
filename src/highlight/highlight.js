import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';

import '../main.css';

class Highlight extends Component {
  render() {
    const style = {
      width: 100,
      height: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    }

    return (
      <div>
        <Grid container>
          <Grid item>
            <Paper style={style} zDepth={1} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Highlight;
