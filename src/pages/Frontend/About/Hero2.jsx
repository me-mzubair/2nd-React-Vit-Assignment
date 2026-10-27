import { Col, Row, Typography } from "antd"
import { useRef } from "react"


const { Title } = Typography
const Hero2 = () => {
    const mainHeading = useRef(null);

    console.log("mainHeading", mainHeading.current)

    return (
        <>
            <audio src="src/assets/audio/music.mp3"></audio>
            <div className="container text-center mt-4">
                <Row>
                    <Col span={24}>
                        <Title level={1}>About Page</Title>
                        <Title level={3}>Hero section of about page</Title>
                        <h1 ref={mainHeading}>Heading 1 Content</h1>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero2