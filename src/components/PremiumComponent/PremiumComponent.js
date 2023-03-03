import React from "react";
import { Row, Col } from "react-grid-system";
import "./PremiumComponent.css";
// import PrimaryButtonComp from "../PrimaryButtonComponent/PrimaryButtonComponent";

import {
    ElevatedCard,
    Typography,
    Button,
} from "@cred/neopop-web/lib/components";

import {
    mainColors,
    fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";

import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const PremiumCardComponent = () => {
    return (
        <ElevatedCard

            borderColor="white"
            backgroundColor="#1a1a1b"
            edgeColors={{
                bottom: "#FFFAE5",
                right: "#FFFAE5",
            }}
            style={{
                // width: '426px',
                height: "163px",
            }}
        >
            <ContentWrapper>
                <Row>
                    <Col>
                        <Typography
                            className="title"
                            {...fontNameSpaces.tc12b}
                            color={mainColors.white}
                            fontSize={25}
                        >
                            Premium
                        </Typography>
                    </Col>
                    <Col className="diamond"></Col>
                </Row>
                <Button
                    variant="secondary"
                    kind="elevated"
                    fullWidth="true"
                    colorConfig={{
                        backgroundColor: "#67FF88",
                        edgeColors: { right: "#FFFAE5", bottom: "#FFFAE5" },
                        borderColor: "black",
                        color: "black",
                    }}
                >
                    Try Now
                </Button>
            </ContentWrapper>
        </ElevatedCard>
    );
};

export default PremiumCardComponent;
