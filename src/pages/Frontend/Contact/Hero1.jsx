import { Button, Col, Divider, Row, Typography } from "antd"
import { useEffect, useRef, useState } from "react"

const { Title } = Typography
const Hero1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const mainHeading=useRef(null)


    const handleIncrease = () => {
        setCount(count + 1)
        console.log("mainHeading", mainHeading.current)
    }
    const handleDecrease = () => {
        setCount((previousValue) => { return previousValue > 0 ? previousValue - 1 : 0 })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)

    return (
        <>
            <div className="container text-center mt-4">
                <Row>
                    <Col span={24}>
                        <Title level={1}>Contact Page</Title>
                        <Title level={3}>Hero section of Contact page</Title>
                    </Col>
                    <Col span={24}>
                        <Divider />
                        <Title level={1}>UseState</Title>
                        <div className="d-flex flex-direction-column justify-content-center align-item-center space-between">
                            <Button type="primary" size="large" onClick={handleIncrease}>Increase</Button>
                            <Title level={1} className="mx-5">{count}</Title>
                            <Button type="primary" danger size="large" onClick={handleDecrease}>Decrease</Button>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Divider />
                        <Title level={1}>UseEffect</Title>
                        <Title level={3}><u>Users</u></Title>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Company Name</th>
                                    <th>City</th>
                                    <th>Adress</th>
                                </tr>
                                {users.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.address.street}{user.address.suit}{user.address.zipcode}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </Col>
                    <Col span={24}>
                        <Divider />
                        <Title level={1}>UseRef</Title>
                        <h1 ref={mainHeading}>Heading 1</h1>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero1