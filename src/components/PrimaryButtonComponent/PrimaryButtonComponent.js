import { Button } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const PrimaryButtonComp = (props) => {
  return (
    <Button
      kind="elevated"
      size={props.size}
      colorConfig={{
        backgroundColor: "#67FF88",
        edgeColors: { right: "#111827", bottom: "#111827" },
        color: "black",
        borderColor: "black",
      }}
    >
      {props.text}
    </Button>
  );
};

export default PrimaryButtonComp;

PrimaryButtonComp.propTypes = {
  size: PropTypes.number,
};
