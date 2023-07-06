import PropTypes from "prop-types";

export const SecondDemoComponent = ({ propA, propB, funcProp }) => {
  return (
    <div>
      <div>{propA}</div>
      <div>{propB}</div>
      <button onClick={() => funcProp()}>Some Button</button>
    </div>
  );
};

SecondDemoComponent.propTypes = {
  propA: PropTypes.string.isRequired,
  probB: PropTypes.number,
  funcProp: PropTypes.func,
};
