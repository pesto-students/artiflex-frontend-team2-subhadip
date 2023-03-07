import { Button } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const SecondaryButtonComp = (props) => {
  //Props Destructuring
  const { size, color, text } = props;
  return (
    <Button
      kind="elevated"
      size={size}
      colorConfig={{
        backgroundColor: "#DBBEF7",
        edgeColors: { right: "black", bottom: "black" },
        color: { color },
        borderColor: "black",
      }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButtonComp;

SecondaryButtonComp.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};
