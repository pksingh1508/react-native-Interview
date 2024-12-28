import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log("Constructor component initialized");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("get Derived props", props, state);
    return null;
  }

  // same as useEffect in functional component
  componentDidMount() {
    console.log("Component mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate: Should re-render',
      nextState.count !== this.state.count,
      nextProps
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: before update', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: after update', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: component removed');
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log("Ui rendered: Re-rendered");
    return(
      <View>
        <Text style={{marginTop: 200}}>Hello Friends.{this.state.count}</Text>
        <Button title='Increment' onPress={() => this.incrementCount()}/>
      </View>
    )
  }
}

export default ClassComponent;