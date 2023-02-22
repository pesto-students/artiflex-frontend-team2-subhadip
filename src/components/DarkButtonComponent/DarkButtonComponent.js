import { Button } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const DarkButtonComp = (props) => {
  return (
    <Button
      variant="primary"
      kind="flat"
      showArrow
      size={props.size}
      colorConfig={{ borderColor: "white", backgroundColor: "black" }}
      style={{ marginInline: "5px" }}
    >
      {props.text}
    </Button>
  );
};

export default DarkButtonComp;

DarkButtonComp.propTypes = {
  size: PropTypes.number,
};
