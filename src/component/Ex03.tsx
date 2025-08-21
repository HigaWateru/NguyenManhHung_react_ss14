import React, {Component} from "react"

interface State {
    changeState: boolean
}
class Exercise03 extends Component<{}, State> {
    state: State = {
        changeState: false
    }

    toggleState = () => {
        this.setState({ changeState: !this.state.changeState })
    }

    render() {
        return (
            <div>
                <h1>Company: {this.state.changeState ? "Rikkei Soft" : "Rikkei Academy"}</h1>
                <button onClick={this.toggleState}>Change state</button>
            </div>
        )
    }
}

export default Exercise03