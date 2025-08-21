import React, {Component} from "react"
interface State {
    myName: string
}

class Exercise01 extends Component<{}, State> {
    state: State = {
        myName: "Nguyễn Mạnh Hùng"
    }

    render() {
        return (
            <div>
                <p>{this.state.myName}</p>
            </div>
        )
    }
}

export default Exercise01;