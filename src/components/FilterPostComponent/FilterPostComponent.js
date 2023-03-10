import { Row, Col } from "react-grid-system";
import SecondaryButtonComp from "../../components/SecondaryButton/SecondaryButton";
import "./FilterPostComponent.css";



const FilterPostComponent = () => {
    return (
        <Row
            className="filter_post_outer_div"
            style={{ backgroundColor: "#1a1a1b", height: "60px" }}
        >
            <Col xs={2} md={2}>
                <div className="all_button">
                    <SecondaryButtonComp size="medium" text="All" />
                </div>
            </Col>
            <Col xs={2} md={2}>
                <div className="art_button">
                    <SecondaryButtonComp size="medium" text="Art" />
                </div>
            </Col>
            <Col xs={2} md={2}>
                <div className="ads_button">
                    <SecondaryButtonComp size="medium" text="Ads" />
                </div>
            </Col>
            <Col xs={2} md={2}>
                <div className="others_button">
                    <SecondaryButtonComp size="medium" text="Others" />
                </div>
            </Col>
        </Row>
    );
};

export default FilterPostComponent;
