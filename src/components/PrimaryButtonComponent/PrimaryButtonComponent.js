import { Button } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const PrimaryButtonComp = (props) => {
  //Props Destructuring
  console.log(props);
  const { size, color, text, borderColor} = props;



  return (
    <Button
      kind="elevated"
      size={size}
      colorConfig={{
        backgroundColor: "#67FF88",
        edgeColors: { right: "#111827", bottom: "#111827" },
        color: { color },
        borderColor:"black",
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButtonComp;

PrimaryButtonComp.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  borderColor:PropTypes.string
};
