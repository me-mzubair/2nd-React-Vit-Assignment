import { Col, Row, Typography } from "antd"

const {Title}=Typography
const PageNotFound = () => {
  return (
    <>
    <div className="container text-center mt-4">
        <Row>
            <Col span={24}>
            <Title type="danger" level={1}>Page Not Found</Title>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default PageNotFound