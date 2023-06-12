import { React, useState } from "react";

import { Container, Row, Col } from "react-grid-system";

import { ElevatedCard, Typography } from "@cred/neopop-web/lib/components";
import {
  mainColors,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import WalletPriceComponet from "../../components/WalletPriceComponet/WalletPriceComponet";
import WalletAddCoinComponet from "../../components/WalletAddCoinComponet/WalletAddCoinComponet";

import { RiArrowLeftUpLine, RiArrowRightDownLine } from "react-icons/ri";

import "./WalletPage.css";

const WalletPage = () => {
  const [addCoinState, setAddCoinState] = useState(false);

  const openAddCoin = () => {
    setAddCoinState(true);
  };

  const closeAddCoin = () => {
    setAddCoinState(false);
  };

  return (
    <div>
      <TopNavComponent />

      <main className="main">
        <Container>
          <div className="wallet">
            <Row>
              <Col lg={7} order={{ lg: 1, xs: 2 }}>
                <ElevatedCard
                  borderColor="white"
                  backgroundColor="#1a1a1b"
                  edgeColors={{
                    right: colorPalette.success[200],
                    bottom: colorPalette.success[200],
                  }}
                  className="tr-history-main"
                >
                  <div className="tr-history">
                    <Typography
                      {...fontNameSpaces.tc12b}
                      color={mainColors.white}
                      style={{
                        marginBottom: "5px",
                        fontSize: "12px",
                      }}
                    >
                      Transaction History
                    </Typography>

                    <ul>
                      <li>
                        <div className="tr-title">
                          <RiArrowLeftUpLine className="tr-icon" />
                          <span>Transactio Title</span>
                        </div>
                        <span className="tr-price">₹1000.00</span>
                      </li>
                      <li>
                        <div className="tr-title">
                          <RiArrowRightDownLine className="tr-icon tr-recived" />
                          <span>Transactio Title</span>
                        </div>
                        <span className="tr-recived">₹1000.00</span>
                      </li>
                    </ul>
                  </div>
                </ElevatedCard>
              </Col>
              <Col lg={5} order={{ lg: 2, xs: 1 }}>
                <WalletPriceComponet openAddCoin={openAddCoin} />
                {addCoinState ? (
                  <WalletAddCoinComponet closeAddCoin={closeAddCoin} />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default WalletPage;
