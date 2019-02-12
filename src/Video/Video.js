import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ''
    }
    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl = (e) => {
    if (this.state.url !== e.currentTarget.innerText) {
      this.setState({url: e.currentTarget.innerText})
    }
  }

  renderPlayerWrapper = () => {
    if (this.state.url != '') {
      return (<div className='player-wrapper' style={{position: 'relative', paddingTop: '56.25%'}}>
          <ReactPlayer url={this.state.url} controls={true}
                       style={{margin: 'auto', position: 'absolute', top: '0', left: '0'}} playing width='100%'
                       height='100%'/>
        </div>
      )
    }
  }

  render() {
    const {url} = this.state;

    return (
      <div style={{padding: '5rem'}}>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={12} lg={12}>
            <Grid container spacing={24} justify="center">
              <TextField
                id="video-search"
                label="Enter Video URL"
                inputRef={input => {
                  this.urlInput = input
                }}
                variant="outlined"
                style={{width: '60%'}}
              />
              <Button variant="contained" color="primary" onClick={() => this.setState({url: this.urlInput.value})}>
                Go
              </Button>

            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            {this.renderPlayerWrapper()}
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>

          </Grid>
        </Grid>
      </div>
    );
  }
}