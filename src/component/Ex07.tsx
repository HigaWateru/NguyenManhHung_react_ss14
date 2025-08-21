import './Ex5.css'
import React, {Component, ChangeEvent, FormEvent} from "react"
interface State {
    name: string
    email: string
    password: string
    phone: string
    errors: {
        name?: string
        email?: string
        password?: string
    }
}
class Form extends Component<{}, State> {
    state: Readonly<State> = {
        name: "",
        email: "",
        password: "",
        phone: "",
        errors: {}
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        this.setState({[name]: value} as Pick<State, keyof State>)
    }
    validateForm = (): boolean => {
        const errors: State['errors'] = {}
        if(!this.state.name.trim()) errors.name = "Tên không được để trống"
        if(!this.state.email.trim()) errors.email = "Email không được để trống"
        else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email)) errors.email = "Email không hợp lệ"
        if(!this.state.password.trim()) errors.password = "Mật khẩu không được để trống"
        
        const formData = JSON.parse(localStorage.getItem("formData") || "[]")
        if(Array.isArray(formData)) {
            if(formData.some((item: any) => item.email === this.state.email)) errors.email = "Email đã tồn tại"
        }
        this.setState({errors})
        return Object.keys(errors).length === 0
    }
    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (this.validateForm()) {
            const formData = JSON.parse(localStorage.getItem("formData") || "[]")
            const updateData = Array.isArray(formData) ? formData : []
            updateData.push({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone
            })
            localStorage.setItem("formData", JSON.stringify(updateData))
            alert("Đăng ký thành công")
            this.setState({name: "", email: "", password: "", phone: "", errors: {}})
        }
    }
    render(): React.ReactNode {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h2>Đăng kí tài khoản</h2>
                <label htmlFor="name">Tên sinh viên</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <p className='error-message'>{this.state.errors.name}</p>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <p className='error-message'>{this.state.errors.email}</p>
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <p className='error-message'>{this.state.errors.password}</p>
                <label htmlFor="phone">Số điện thoại</label>
                <input type="tel" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} /><br />
                <button type="submit">Đăng kí</button>
            </form>
        )
    }
}
export default Form