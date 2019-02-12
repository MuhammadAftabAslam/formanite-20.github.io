import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class History extends Component {
  constructor(props) {
    super(props)

    this.state = {
      historyList: [],
      historyToggle: true
    }
  }

  static getDerivedStateFromProps(prop, state) {
    if (prop.history != null) {
      let History = prop.history,
        List = state.historyList.slice(),
        toggle = true;
      List.unshift(History);
      if (List.length > 4) {
        List.pop();
      }
      if (state.historyList.length > 1) {
        toggle = false;
      }
      return ({historyList: List, historyToggle: toggle})
    }
  }


  render() {
    return (
      <div>
        <Grid container>
          <Paper elevation={5} style={{width: '80%', margin: 'auto'}} hidden={this.state.historyToggle}>
            <div style={{padding: '1rem'}}>
              <Typography variant="h5" component="h3">
                History
              </Typography>
              {this.state.historyList.map((url, index) => {
                return (
                  (index > 0 && url !== '') ?
                    <div style={{padding: '0.5rem'}}>
                      <Chip
                        label={this.state.historyList[index]}
                        onClick={this.props.click}
                        color="primary"
                      />
                      <br/>
                    </div> : <div></div>
                )
              })}
            </div>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default History;