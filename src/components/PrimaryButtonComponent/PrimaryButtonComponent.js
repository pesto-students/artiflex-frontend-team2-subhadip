import { Button } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const PrimaryButtonComponent = (props) => {
  //Props Destructuring
  const { size, color, text, borderColor } = props;

  return (
    <Button
      kind="elevated"
      size={size}
      colorConfig={{
        backgroundColor: "#67FF88",
        edgeColors: { right: "#111827", bottom: "#111827" },
        color: { color },
        borderColor: "black",
      }}
      onClick={props.onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButtonComponent;

PrimaryButtonComponent.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  borderColor: PropTypes.string,
};
