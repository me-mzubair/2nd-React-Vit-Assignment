import { Button, Col, Form, Input, message, Row, Typography } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const { Title } = Typography
const initialState = { email: "", password: "" }

const Login = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const navigate=useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleLogin = () => {

        let { email, password } = state
        const users = JSON.parse(localStorage.getItem("users")) || []
        const user = users.find((user) => { return user.email === email && user.password === password })
        if (!user) { return message.error("Invalid Credentials") }
        localStorage.setItem("user", JSON.stringify(user))

        setIsProcessing(true)
        setTimeout(() => {
            setIsProcessing(false)
            message.success("Login Successfully")
        }, 1000)
        navigate("/")
    }
    return (
        <>
            <main className="auth">
                <div className="card p-3 text-center">
                    <Title level={1}>Login</Title>
                    <Form layout="vertical">
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Email:-" required>
                                    <Input type="text" size="large" placeholder="Enter Your Email" name="email" onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Password" required>
                                    <Input.Password size="large" placeholder="Enter Your Password" name="password" onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" block className="p-3 fs-4" loading={isProcessing} onClick={handleLogin} htmlType="submit">Login</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </main >
        </>
    )
}

export default Login