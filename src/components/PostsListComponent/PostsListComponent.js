import React from 'react';

import { RiHeartAddLine, RiDiscussLine, RiShareLine } from "react-icons/ri";
import PrimaryButtonComponent from ".././PrimaryButtonComponent/PrimaryButtonComponent"
import SecondaryButtonComp from '../SecondaryButton/SecondaryButton';


import {
    ElevatedCard,
    Column,
    Row,
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

import "./PostsListComponent.css"
import { Col } from 'react-grid-system';

const ContentWrapper = styled.div`
    padding: 20px;
`;

const Card = () => {
    return (
        <>
            <ElevatedCard
                backgroundColor="#FFFAE5"
                edgeColors={{
                    bottom: '#67FF88',
                    right: '#67FF88',
                }}
                style={{ marginBottom: "20px" }}
            >
                <ContentWrapper>
                    <Column>
                        <Row className="v-justify">
                            <div>
                                <Row>
                                    <RiHeartAddLine
                                        style={{ fill: "black", fontSize: "30px", margin: "auto" }}
                                    />
                                    <Typography
                                        {...fontNameSpaces.th16b}
                                        color={colorPalette.pinkPong[500]}
                                        overflow="ellipsis"
                                        style={{ margin: "auto", marginLeft: "5px" }}
                                    >
                                        52
                                    </Typography>
                                    <HorizontalSpacer n={3} />
                                    <Typography {...fontNameSpaces.tc12b} color={mainColors.black} style={{ margin: "auto", marginLeft: "30px" }}>
                                        ABCD Bank
                                    </Typography>

                                </Row>
                            </div>
                            <Row
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: `1px solid ${mainColors.black}`,
                                }}
                                className="h-center v-center"
                            >
                                <div
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: colorPalette.success[500],
                                    }}
                                />
                            </Row>
                        </Row>
                        <HorizontalSpacer n={5} />
                        <div style={{ maxWidth: '100%', margin: "auto" }}>
                            {/* <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="image-style" alt="postmedia" /> */}
                            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="image-style" alt="postmedia" />
                        </div>
                        <HorizontalSpacer n={2} />
                        <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
                            ₹1000.00
                        </Typography>
                        <HorizontalSpacer n={4} />
                        <Row className='inside-card'>
                            <div style={{ display: "flex", gap: "10px", width: "140px" }}>
                                <RiDiscussLine
                                    style={{ fill: "black", fontSize: "30px", margin: "auto" }}
                                />
                                <Typography color={mainColors.black} style={{ margin: "auto" }}>
                                    2Comments
                                </Typography>
                            </div>
                            <div style={{ display: "flex", width: "140px" }}>
                                <RiShareLine
                                    style={{ fill: "black", fontSize: "30px", margin: "auto" }}
                                />
                                <Typography color={mainColors.black} style={{ margin: "auto" }}>
                                    Share
                                </Typography>
                            </div>
                            <div style={{ display: "flex", gap: "30px", width: "100%", justifyContent: "end" }}>
                                <SecondaryButtonComp size="medium" text="View"/>
                                <PrimaryButtonComponent size="medium" text="Buy Now" />
                            </div>
                        </Row>
                    </Column>
                </ContentWrapper>
            </ElevatedCard>
            <ElevatedCard
                backgroundColor="#FFFAE5"
                edgeColors={{
                    bottom: '#67FF88',
                    right: '#67FF88',
                }}
                style={{ marginBottom: "20px" }}
            >
                <ContentWrapper>
                    <Column>
                        <Row className="v-justify">
                            <div>
                                <Row>
                                    <RiHeartAddLine
                                        style={{ fill: "black", fontSize: "30px", margin: "auto" }}
                                    />
                                    <Typography
                                        {...fontNameSpaces.th16b}
                                        color={colorPalette.pinkPong[500]}
                                        overflow="ellipsis"
                                        style={{ margin: "auto", marginLeft: "5px" }}
                                    >
                                        52
                                    </Typography>
                                    <HorizontalSpacer n={3} />
                                    <Typography {...fontNameSpaces.tc12b} color={mainColors.black} style={{ margin: "auto", marginLeft: "30px" }}>
                                        ABCD Bank
                                    </Typography>

                                </Row>
                            </div>
                            <Row
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: `1px solid ${mainColors.black}`,
                                }}
                                className="h-center v-center"
                            >
                                <div
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: colorPalette.success[500],
                                    }}
                                />
                            </Row>
                        </Row>
                        <HorizontalSpacer n={5} />
                        <div style={{ maxWidth: '100%', margin: "auto" }}>
                            <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="image-style" alt="postmedia" />
                            {/* <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="image-style" alt="postmedia" /> */}
                        </div>
                        <HorizontalSpacer n={2} />
                        <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
                            ₹1000.00
                        </Typography>
                        <HorizontalSpacer n={4} />
                        <Row className='inside-card'>
                            <div style={{ display: "flex", gap: "10px", width: "140px" }}>
                                <RiDiscussLine
                                    style={{ fill: "black", fontSize: "30px", margin: "auto" }}
                                />
                                <Typography color={mainColors.black} style={{ margin: "auto" }}>
                                    2Comments
                                </Typography>
                            </div>
                            <div style={{ display: "flex", width: "140px" }}>
                                <RiShareLine
                                    style={{ fill: "black", fontSize: "30px", margin: "auto" }}
                                />
                                <Typography color={mainColors.black} style={{ margin: "auto" }}>
                                    Share
                                </Typography>
                            </div>
                            <div style={{ display: "flex", gap: "30px", width: "100%", justifyContent: "end" }}>
                                <SecondaryButtonComp size="medium" text="View"/>
                                <PrimaryButtonComponent size="medium" text="Buy Now" />
                            </div>
                        </Row>
                    </Column>
                </ContentWrapper>
            </ElevatedCard>
         
        </>
    );
};

export default Card;