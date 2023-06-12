import "./PremiumDetailsComponent.css";
import { useParams } from "react-router-dom";
import { Tag } from "@cred/neopop-web/lib/components";

import { Container, Row, Col } from "react-grid-system";
import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, typographyGuide } from "@cred/neopop-web/lib/primitives";
import PrimaryButtonComponent from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import {
  ElevatedCard,
  // HorizontalDivider,
} from "@cred/neopop-web/lib/components";

import React from "react";

const PremiumDetailsComponent = () => {
  return (
    <div className="premium_outer_div">
      <ElevatedCard
        className="elevatedCard"
        backgroundColor="#669bbc"
        edgeColors={{
          bottom: "yellow",
          right: "yellow",
        }}
        style={{
          width: "80%",
        }}
      >
        <Container style={{ margin: 0 }}>
          <Row>
            <Col sm={12} className="premium_card_inner_details">
              <div className="another-div">
                <div className="subscription-action">
                  <Typography
                    {...FontVariant.HeadingBold14}
                    className="heading"
                  >
                    Artiflex Premium
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={16}
                    fontType="body"
                    className="description"
                  >
                    Help support Artiflex and get VIP treatment, exclusive
                    access, and monthly tokens.
                  </Typography>
                  <div className="button-outr-div">
                    <PrimaryButtonComponent
                      size="medium"
                      text="5 Token / Month"
                    />
                    <PrimaryButtonComponent
                      size="medium"
                      text="40 Tokens / Year Save 33.33%"
                    />
                  </div>
                </div>
              </div>
              <div className="div2">
                <ul>
                  <li>
                    <Typography color="white" fontSize={16} fontType="body">
                      Enjoy flexing without interruptions from ads
                    </Typography>
                  </li>
                  <li>
                    <Typography color="white" fontSize={16} fontType="body">
                      Get exclusive awards that get more attention
                    </Typography>
                  </li>
                  <li>
                    <Typography color="white" fontSize={16} fontType="body">
                      get upto 500 monthly tokens
                    </Typography>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </ElevatedCard>
    </div>
  );
};

export default PremiumDetailsComponent;
