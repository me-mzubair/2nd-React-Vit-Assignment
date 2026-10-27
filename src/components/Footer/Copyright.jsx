import { Col, Row, Typography } from "antd"

const { Paragraph } = Typography
const now = new Date().getFullYear()
const Copyright = () => {
    return (
        <>
            <div className="container bg-primary text-center">
                <Row>
                    <Col span={24}>
                        <Paragraph className="mb-0 fs-4 text-white">&copy; {now} All Rights Reserved By Zee-Dev.</Paragraph>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Copyright