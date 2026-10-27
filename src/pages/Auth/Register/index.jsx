import { Button, Col, Form, Input, message, Row, Typography } from "antd"
import { useState } from "react"

const { Title } = Typography
const initialState = { fullName: "", email: "", password: "", confirmPassword: "" }

const Register = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (e) => setState(previousState => ({ ...previousState, [e.target.name]: e.target.value }))

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setState({ ...state, [name]: value })
    // }


    const handleRegister = () => {

        let { fullName, email, password, confirmPassword } = state
        if (confirmPassword !== password) { return message.error("Password does not matched") }

        const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
        const user = { fullName, email, password, id, status: "pending", createdAt: new Date().getTime() }

        const users = JSON.parse(localStorage.getItem("users")) || []
        const isUserFound = users.find((user) => { return user.email === email })

        if (isUserFound) { return message.error("User already exist") }

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))

        setIsProcessing(true)
        setTimeout(() => {
            setIsProcessing(false)
            message.success("A New User Is Registered Successfully")
        }, 1000)
        console.log("state", state)
    }
    return (
        <>
            <main className="auth">
                <div className="card p-3 text-center">
                    <Title level={1}>Register</Title>
                    <Form layout="vertical">
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Full Name:-" required>
                                    <Input type="text" size="large" placeholder="Enter Your Full Name" name="fullName" onChange={handleChange} />
                                </Form.Item>
                            </Col>
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
                                <Form.Item label="Confirm Password" required>
                                    <Input.Password size="large" placeholder="Enter Your Confirm Password" name="confirmPassword" onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" block className="p-3 fs-4" loading={isProcessing} onClick={handleRegister} htmlType="submit">Register</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </main >
        </>
    )
}

export default Register