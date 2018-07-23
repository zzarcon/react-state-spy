import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import Button from '@atlaskit/button';
import Badge from '@atlaskit/badge';
import {DatePicker} from '@atlaskit/datetime-picker';
import FieldRadioGroup from '@atlaskit/field-radio-group';
import FieldText from '@atlaskit/field-text';
import FieldTextArea from '@atlaskit/field-text-area';
import Spy from '../src';
import {AppWrapper, AppContent, DatePickerWrapper} from './styled';

export interface AppState {
  date: string;
  stars: number;
  color: string;
  fieldTextValue: string;
  fieldTextAreaValue: string;
}

const repoUrl = 'https://github.com/zzarcon/react-state-spy';
const props = {
  // languages: ['javascript']
};
const items = [
  { name: 'color', value: 'Red', label: 'Red' },
  { name: 'color', value: 'Black', label: 'Black', defaultSelected: true },
  { name: 'color', value: 'Yellow', label: 'Yellow' },
  { name: 'color', value: 'Green', label: 'Green' },
];
export default class App extends Component <{}, AppState> {
  state: AppState = {
    date: '2018-07-21',
    stars: 10,
    color: 'Black',
    fieldTextValue: 'Hola amigos!',
    fieldTextAreaValue: 'Bacon ipsum dolor amet meatloaf tri-tip burgdoggen, beef ribs swine kielbasa capicola bacon corned beef doner'
  }

  increment = () => {
    this.setState({
      stars: this.state.stars + 1
    });
  }

  onDateChange = (date: string) => {
    this.setState({date});
  }

  onRadioChange = (event: any) => {
    this.setState({
      color: event.target.value
    })
  }

  onFieldTextChange = (event: any) => {
    this.setState({
      fieldTextValue: event.target.value
    })
  }

  onFieldTextAreaChange = (event: any) => {
    this.setState({
      fieldTextAreaValue: event.target.value
    })
  }

  render() {
    const {stars, date, fieldTextValue, fieldTextAreaValue} = this.state;

    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <Spy
          initialPosition="top-center"
          props={props}
          state={this.state} 
        />
        <AppContent>
          <Badge appearance="primary">{stars}</Badge>
          <Button appearance="primary" onClick={this.increment}>
            Add stars
          </Button>
          <DatePickerWrapper>
            <DatePicker
              onChange={this.onDateChange} 
              defaultValue={date}
            />
          </DatePickerWrapper>
          <FieldRadioGroup
            items={items}
            label="Pick a color:"
            onRadioChange={this.onRadioChange}
          />
          <FieldText
            value={fieldTextValue}
            onChange={this.onFieldTextChange}
            label="say something"
          />
          <FieldTextArea
            value={fieldTextAreaValue}
            onChange={this.onFieldTextAreaChange}
            label="say something"
          />
        </AppContent>
      </AppWrapper>
    )
  }
}