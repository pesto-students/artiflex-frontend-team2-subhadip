import PropTypes from "prop-types";

export const DemoComponent = (props) => {
  return (
    <div>
      <div>Demo Component</div>
      {props.propA && (
        <button onClick={() => props.funcProp()}>Some Button</button>
      )}
    </div>
  );
};

DemoComponent.propTypes = {
  propA: PropTypes.bool,
  funcProp: PropTypes.func,
};
