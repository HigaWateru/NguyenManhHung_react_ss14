import React, {Component} from "react"
interface State {
    male: "male" | "female" | "other"
}

class FormGender extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            male: "male"
        }
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ male: e.target.value as "male" | "female" | "other" });
    }
    submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    renderGender = () => {
        if (this.state.male === "male") return "Nam"
        else if (this.state.male === "female") return "Nữ"
        else return "Khác"
    }
    render(): React.ReactNode {
        return(
            <form action="">
                <p>Giới tính: {this.renderGender()} </p>
                <input type="radio" name="gender" value="male" checked={this.state.male === "male"} onChange={this.handleChange} />
                <label htmlFor="male">Nam</label><br />
                <input type="radio" name="gender" value="female" checked={this.state.male === "female"} onChange={this.handleChange} />
                <label htmlFor="female">Nữ</label><br />
                <input type="radio" name="gender" value="other" checked={this.state.male === "other"} onChange={this.handleChange} />
                <label htmlFor="other">Khác</label><br />
                <input type="submit" onClick={this.submitForm} />
            </form>
        )
    }
}
export default FormGender