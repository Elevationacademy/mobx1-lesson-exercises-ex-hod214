import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import DevTools from 'mobx-react-devtools'

@observer
class App extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    let store = this.props.store
    return <div className="App">
      < DevTools />
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {store.list.map((i, index) => <Item item={i}
          key={index}
          store={this.props.store} />)}
      </div>
    
  }
}

export default App;
