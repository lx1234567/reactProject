import React from "react";

export default class CycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            count2: 3
        }
    }

    componentDidMount() {
        console.log("componetdidmount");
    }

    componentWillUpdate(){
        console.log("componentwillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidupdate");
    }

    shouldComponentUpdate(){
        console.log("shuodcomplupdate");
        return true;
    }

    onClickHandle = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <h2>{this.props.cycleDemoStr}</h2>
                <button onClick={this.onClickHandle}>addCount</button>
            </div>
        )
    }
}