import React from "react";
import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
  Button,
} from "@cred/neopop-web/lib/components";
import {
  mainColors,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const WalletPriceComponet = (props) => {
  return (
    <ElevatedCard
      borderColor="white"
      backgroundColor="#1a1a1b"
      edgeColors={{
        right: colorPalette.success[200],
        bottom: colorPalette.success[200],
      }}
    >
      <ContentWrapper>
        <Column>
          <Row className="v-justify">
            <div>
              <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                Avaliable Balance
              </Typography>
            </div>
            <Row
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: `1px solid ${mainColors.white}`,
              }}
              className="h-center v-center"
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: colorPalette.popWhite[300],
                }}
              />
            </Row>
          </Row>
          <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
            ₹1000.00
          </Typography>
          <HorizontalSpacer n={4} />
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
            onClick={props.openAddCoin}
          >
            Add Money
          </Button>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default WalletPriceComponet;
