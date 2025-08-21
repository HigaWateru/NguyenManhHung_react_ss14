import './Ex5.css'
import React, {Component, ChangeEvent, FormEvent} from 'react'
interface State {
    email: string
    password: string
    errors: {
        email?: string
        password?: string
        auth?: string
    }
}
class FormSignIn extends Component<{}, State> {
    state: Readonly<State> = {
        email: "",
        password: "",
        errors: {}
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        this.setState({[name]: value} as Pick<State, keyof State>)
    }
    validateForm = (): boolean => {
        const errors: State['errors'] = {}
        if(!this.state.email.trim()) errors.email = "Email không được để trống"
        else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email)) errors.email = "Email không hợp lệ"
        if(!this.state.password.trim()) errors.password = "Mật khẩu không được để trống"
        this.setState({errors})
        return Object.keys(errors).length === 0
    }
    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (this.validateForm()) {
            const formData = JSON.parse(localStorage.getItem("formData") || "[]")
            if(Array.isArray(formData)) {
                const user = formData.find((item: any) => item.email === this.state.email && item.password === this.state.password)
                if(user) {
                    alert("Đăng nhập thành công")
                    this.setState({email: "", password: "", errors: {}})
                } else {
                    this.setState({errors: {auth: "Email hoặc mật khẩu không đúng"}})
                }
            } else {
                this.setState({errors: {auth: "Không có dữ liệu tài khoản"}})
            }
        }
    }
    render(): React.ReactNode {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h2>Đăng nhập tài khoản</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <p className='error-message'>{this.state.errors.email}</p>
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <p className='error-message'>{this.state.errors.password}</p>
                {this.state.errors.auth && <p className='error-message'>{this.state.errors.auth}</p>}
                <button type="submit">Đăng nhập</button>
            </form>
        )
    }
}
export default FormSignIn