import { Row, Col } from "react-grid-system";
// import SecondaryButtonComp from "../../components/SecondaryButton/SecondaryButton";
import "./AddPostFormComponent.css";
import { colorPalette } from '@cred/neopop-web/lib/primitives';
import { HorizontalDivider } from '@cred/neopop-web/lib/components';
import SearchInputFieldWithoutIcon from "../SearchBarComponent/SearchBarComponentWithoutIcon";


import {
    Typography,
} from "@cred/neopop-web/lib/components";



const AddPostFormComponent = () => {
    return (
        <Row
            className="add_post_form_outer_div"
            style={{ backgroundColor: "#1a1a1b" }}
        >
            <Typography
                className="title"
                color="white"
                fontSize={25}
                style={{ marginLeft: "2%" }}
            >
                Create a Post
            </Typography>
            <HorizontalDivider color={colorPalette.popBlack[100]} style={{ width: "95%", margin: "auto" }} />;
            <Col sm={12} xs={12} md={12} className="title-field">
                <SearchInputFieldWithoutIcon title="Title" />
            </Col>
            <Col sm={12} xs={12} md={12} className="text-area">
                <label for="description" id="description-title">Description</label>
                <textarea id="description" name="description"
                    rows="5" cols="33">
                    
                </textarea>
            </Col>
            <Typography
                className="title"
                color="white"
                fontSize={15}
                style={{ marginLeft: "2%" }}
            >
                Images & Video
            </Typography>
        </Row>
    );
};

export default AddPostFormComponent;
