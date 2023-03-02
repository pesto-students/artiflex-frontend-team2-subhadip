import { Button } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const PrimaryButtonLight = (props) => {
  //Props Destructuring
  const { size, color, backgroundColor, text } = props;

  return (
    <Button
      kind="elevated"
      size={size}
      colorConfig={{
        backgroundColor: "#67FF88",
        edgeColors: { right: "white", bottom: "white" },
        color: { color },
        borderColor: { backgroundColor },
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButtonLight;

PrimaryButtonLight.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
};
