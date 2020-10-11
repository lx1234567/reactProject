import React from 'react';
import ReactDOM from 'react-dom';
import CycleDemo from './cycleDemo'
import ListDemo from './listDemo'

class ParenDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleDemoStr: 1
    }
  }

  onClickHandle = () => {
    this.setState({ cycleDemoStr: this.state.cycleDemoStr + 1 })
  }

  render() {
    return (
      <div>
        {/* <CycleDemo cycleDemoStr={this.state.cycleDemoStr} />
        <button onClick={this.onClickHandle}>参数Add</button> */}
        <ListDemo listName={["xiaom","xiaohoang","sixoa","fsdfas"]}/>
      </div>
    )
  }
}

ReactDOM.render(
  <ParenDemo />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
