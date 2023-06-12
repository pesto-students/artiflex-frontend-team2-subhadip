import React, { useState } from "react";
import axios from "axios";

import { ElevatedCard, Button } from "@cred/neopop-web/lib/components";
import { colorPalette } from "@cred/neopop-web/lib/primitives";

import InputComponent from "../../components/InputComponent/InputComponent";

import styled from "styled-components";

import { RiCloseFill } from "react-icons/ri";

import { SERVER_URL } from "./../../config";
import "./WalletAddCoinComponet.css";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const WalletAddCoinComponet = (props) => {
  const [formData, setFormData] = useState({
    amount: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${SERVER_URL}/wallet/stripe-checkout`,
      formData
    );
    const json = await response.json();
  };

  return (
    <ElevatedCard
      borderColor="white"
      backgroundColor="#1a1a1b"
      edgeColors={{
        right: colorPalette.success[200],
        bottom: colorPalette.success[200],
      }}
      style={{
        marginTop: "1.5rem",
      }}
    >
      <ContentWrapper>
        <div className="add-coin-header">
          <RiCloseFill className="close-icon" onClick={props.closeAddCoin} />
        </div>
        <form onSubmit={handleSubmit}>
          <InputComponent
            label="Amount to Deposit"
            type="text"
            maxLength={5}
            onChange={handleChange}
            name="amount"
            id="amount"
            placeholder="Enter amount to deposit"
            transparent="true"
          />
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
            style={{
              marginTop: "1.5rem",
            }}
            onClick={handleSubmit}
          >
            Authorize Payment
          </Button>
        </form>
      </ContentWrapper>
    </ElevatedCard>
  );
};
export default WalletAddCoinComponet;
