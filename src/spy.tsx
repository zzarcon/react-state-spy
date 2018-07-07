import * as React from 'react';
import {Component} from 'react';
import Cristal from 'react-cristal';

export interface SpyProps {
  state: {[name: string]: any};
  props: {[name: string]: any};
}

export interface SpyState {
  
}

export class Spy extends Component<SpyProps, SpyState> {
  renderProps = () => {
    const {props} = this.props;

    return (
      <div>
        Props
      </div>
    );
  };

  renderState = () => {
    const {state} = this.props;

    return (
      <div>
        State
      </div>
    );
  }

  render() {
    return (
      <Cristal>
        {this.renderProps()}
        {this.renderState()}
      </Cristal>
    );
  }
}