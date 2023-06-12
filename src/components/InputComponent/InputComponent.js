import { InputField } from "@cred/neopop-web/lib/components";
import PropTypes from "prop-types";

const InputComponent = (props) => {
  return (
    <InputField
      colorConfig={{
        labelColor: "black",
        textColor: "black",
      }}
      style={{
        border: "1px solid black",
        padding: "1px",
        backgroundColor: "white",
      }}
      textStyle={{ label: "fontSize:10px", input: "fontSize:10px" }}
      colorMode="light"
      id={props.id}
      label={props.label}
      maxLength={props.maxLength}
      onBlur={function noRefCheck() {}}
      onChange={props.onChange}
      onFocus={function noRefCheck() {}}
      type={props.type}
      inputMode={props.inputMode}
    />
  );
};

InputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  type: PropTypes.string,
  inputMode: PropTypes.string,
};

export default InputComponent;
