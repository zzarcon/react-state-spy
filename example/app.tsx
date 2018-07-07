import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import Spy from '../src';
import {AppWrapper} from './styled';

export interface AppState {
  
}
const repoUrl = 'https://github.com/zzarcon/react-state-spy';
export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <Spy props={this.props} state={this.state} />
      </AppWrapper>
    )
  }
}