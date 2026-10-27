import { Button, Col, ColorPicker, message, Row, Space, Typography } from "antd"
import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton"

const { Title } = Typography
const Hero = () => {

    const [fullName, setFullName] = useState("")
    const [backgroundColor, setBackground] = useState("#baba9e")
    const [user, setUser] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setUser(user)
            console.log("user", user)
        }
    }, [])
    const handleChange = () => {
        setBackground("#8f8f1a")
        message.success("Background color has been changed")
    }

    return (
        <>
            <div className="container text-center mt-4" style={{ backgroundColor: backgroundColor, height: "100vh" }}>
                <Row>
                    <Col span={24}>
                        <Title level={1}>Home Page</Title>
                        <Title level={3}>Hero section of home page</Title>
                        <Title level={3}>UID:-{user.id}</Title>
                        <Title level={3}>Full Name:-{user.fullName}</Title>
                        <Title level={3}>Email:-{user.email}</Title>
                        <Title level={3}>Password:-{user.password}</Title>
                        <Title level={3}>Status:-{user.status}</Title>
                        <Space>
                            <Button onClick={() => { setFullName("Muhammad Zubair") }}>Click me</Button>
                            <Button onClick={handleChange}>Click me to change background color</Button>
                            <ColorPicker value={backgroundColor} onChange={(value, color) => { setBackground(color) }} />
                        </Space>
                    </Col>
                    <Col span={24}>
                        <Space className="mt-4">
                            <CustomButton type="primary" text="Primary" />
                            <CustomButton type="secondary" text="Secondary" />
                            <CustomButton type="info" text="Info" />
                            <CustomButton type="warning" text="Warning" />
                            <CustomButton type="dark" text="Dark" />
                            <CustomButton text="Light" />
                            <CustomButton type="success" />
                            <CustomButton type="danger" />
                        </Space>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero