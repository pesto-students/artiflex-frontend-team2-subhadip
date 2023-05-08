import "./ViewPostComponent.css";
import "react-tooltip/dist/react-tooltip.css";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-grid-system";
import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import { RiHeart2Line, RiShareLine } from "react-icons/ri";
import PrimaryButtonComponent from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import {
  ElevatedCard,
  HorizontalDivider,
} from "@cred/neopop-web/lib/components";

import { Tooltip as ReactTooltip } from "react-tooltip";

const ViewPostComponent = () => {
  const { post_id } = useParams("post_id");

  console.log(post_id);

  return (
    <div className="view_post_outer_div">
      <ElevatedCard
        className="view_post_main_div"
        backgroundColor="#fff0e5"
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
            <Col sm={7}>
              <div className="image-outer-div">
                <img
                  src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                  className="image-style"
                ></img>
              </div>
            </Col>

            <Col sm={5} className="details">
              <div className="title">
                <Typography
                  color="#660F56"
                  // fontSize={30}
                  fontWeight={500}
                  className="title_name"
                  {...FontVariant.CapsBold10}
                >
                  Exo Sapien
                </Typography>
                <Typography
                  color="#660F56"
                  fontSize={14}
                  fontType="body"
                  fontWeight={400}
                >
                  Owned by <a href="https://www.google.com">Akash</a>
                </Typography>
                <div className="options">
                  <div className="like-outer-div">
                    <RiHeart2Line className="like" />
                    <Typography
                      className="count"
                      color="#660F56"
                      fontSize={14}
                      fontType="body"
                      fontWeight={400}
                    >
                      5 likes
                    </Typography>
                  </div>
                  <div className="share-icon-outer-div">
                    <a
                      className="my-anchor-element"
                      data-tooltip-content="Copy link"
                    >
                      <RiShareLine className="share-icon" />
                    </a>
                    <ReactTooltip
                      type="info"
                      anchorSelect=".my-anchor-element"
                      place="left"
                    />
                    <Typography
                      className="count"
                      color="#660F56"
                      fontSize={14}
                      fontType="body"
                      fontWeight={400}
                    >
                      Share
                    </Typography>
                  </div>
                </div>
              </div>

              <div>
                <HorizontalDivider color="#8A8A8A" />
                <Typography
                  color="#660F56"
                  fontSize={16}
                  fontType="body"
                  fontWeight={400}
                >
                  Current price
                </Typography>
                <Typography
                  color="#660F56"
                  // fontSize={30}
                  fontWeight={500}
                  className="price"
                  {...FontVariant.CapsBold10}
                >
                  58.98ETH
                </Typography>
                <div className="buttons">
                  <PrimaryButtonComponent size="medium" text="Buy Now" />
                  <PrimaryButtonComponent size="medium" text="Make offer" />
                </div>
                <HorizontalDivider color="#8A8A8A" />
              </div>
              <div className="description-outer-div">
                <Typography
                  color="#660F56"
                  className="description-heading "
                  fontWeight={500}
                >
                  Description
                </Typography>
                <Typography
                  color="#660F56"
                  fontSize={16}
                  fontType="body"
                  fontWeight={400}
                >
                  Once upon a time in a far-off future, humans had evolved into
                  a new species known as "exo sapiens." These beings possessed
                  extraordinary abilities and were capable of adapting to a wide
                  range of environments, including outer space.
                </Typography>
              </div>
            </Col>
          </Row>
        </Container>
      </ElevatedCard>
    </div>
  );
};

export default ViewPostComponent;
