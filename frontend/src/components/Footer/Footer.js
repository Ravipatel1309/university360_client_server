import React from 'react'
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer
            style={{
                width: "100%",
                // position: "relative",
                // bottom: 0,
                display: "flex",
                justifyContent: "center",
                textAlign: 'center'
            }}
        >
            <Container>
                {/* <Row> */}
                <p>
                    <i class="fa fa-copyright"></i> copyright 2023 || All rights reserved
                </p>
                {/* </Row> */}
            </Container>
        </footer>
    )
}

export default Footer
