import { Row, Col } from "react-grid-system";
import { RiUserLine, RiImageAddLine, RiVideoAddLine } from "react-icons/ri";
import SearchInputFieldWithoutIcon from "../SearchBarComponent/SearchBarComponentWithoutIcon";
import "./CreatePostComponent.css";

const CreatePostComponent = () => {
  return (
    <Row
      className="add_post_outer_div"
      style={{ backgroundColor: "#1a1a1b", height: "60px" }}
    >
      <Col xs={1.5} md={1.5} className="user">
        <RiUserLine
          style={{ fill: "white", fontSize: "30px", margin: "auto" }}
        />
      </Col>
      <Col xs={7.5} md={8.5} className="add_post">
        <SearchInputFieldWithoutIcon title="Create Post" />
      </Col>
      <Col xs={1.5} md={1} className="add_image">
        <RiImageAddLine
          style={{ fill: "white", fontSize: "30px", margin: "auto" }}
        />
      </Col>
      <Col xs={1.5} md={1} className="add_video">
        <RiVideoAddLine
          style={{ fill: "white", fontSize: "30px", margin: "auto" }}
        />
      </Col>
    </Row>
  );
};

export default CreatePostComponent;
