import * as React from 'react';
import {Component} from 'react';
import Cristal, {InitialPosition} from 'react-cristal';
import Cute from 'react-cute';
import {Title, Content, Empty, CuteWrapper} from './styled';

export interface SpyProps {
  state: {[name: string]: any};
  props: {[name: string]: any};
  initialPosition?: InitialPosition;
}

export interface SpyState {
  isCristalVisible: boolean;
}

export class Spy extends Component<SpyProps, SpyState> {
  state: SpyState = {
    isCristalVisible: true
  }

  renderProps = () => {
    const {props} = this.props;
    const isEmpty = !Object.keys(props).length;

    return (
      <CuteWrapper>
        <Title>Props</Title>
        {isEmpty ? <Empty>No props</Empty> : <Cute json={props} />}
      </CuteWrapper>
    );
  };

  renderState = () => {
    const {state} = this.props;
    const isEmpty = !Object.keys(state).length;

    return (
      <CuteWrapper>
        <Title>State</Title>
        {isEmpty ? 'No state' : <Cute json={state} />}
      </CuteWrapper>
    );
  }

  hideCristal = () => {
    this.setState({
      isCristalVisible: false
    });
  }

  renderCristal = () => {
    const {isCristalVisible} = this.state;
    if (!isCristalVisible) return null;
    const {initialPosition} = this.props;

    return (
      <Cristal
        title="State spy"
        initialPosition={initialPosition}
        onClose={this.hideCristal}
      >
        <Content>
          {this.renderProps()}
          {this.renderState()}
        </Content>
      </Cristal>
    )
  }

  render() {
    return this.renderCristal();
  }
}