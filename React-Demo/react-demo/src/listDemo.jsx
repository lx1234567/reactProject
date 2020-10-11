
import React from "react";

export default class ListDemo extends React.Component {
    render() {
        const arr = this.props.listName;
        return (
            <div>
                <ol>
                    {
                        arr.map((value, index) => {
                            return <ul key={index}>{value}</ul>
                        })
                    }
                </ol>
            </div>
        )
    }
}