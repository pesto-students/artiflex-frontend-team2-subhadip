import React from 'react';
import { Container, Row, Col } from "react-grid-system";
import "./PremiumComponent.css"
import PrimaryButtonComp from '../PrimaryButtonComponent/PrimaryButtonComponent';

import {
    ElevatedCard,
    Typography,
    HorizontalSpacer,
    Tag,
    Button,
} from '@cred/neopop-web/lib/components';

import {
    mainColors,
    colorPalette,
    colorGuide,
    fontNameSpaces,
    getButtonConfig,
} from '@cred/neopop-web/lib/primitives';

import styled from 'styled-components';

const ContentWrapper = styled.div`
    padding: 20px;
`;

const Card = () => {
    return (
        <ElevatedCard
            backgroundColor="#1a1a1b"
            edgeColors={{
                bottom: 'white',
                right: 'white',
            }}
            style={{
                width: '426px',
                height: '163px',
            }}
        >
            <ContentWrapper>
                <Row>
                    <Col>
                        <Typography {...fontNameSpaces.tc12b} color={mainColors.white} fontSize={25}>
                            Premium
                        </Typography>
                    </Col>
                    <Col className="diamond">

                    </Col>
                </Row>
                <Row>
                <PrimaryButtonComp size="medium" text="Try Now" color="black" backgroundColor="white"/>
                </Row>

            </ContentWrapper>
        </ElevatedCard>
    );
};

export default Card;