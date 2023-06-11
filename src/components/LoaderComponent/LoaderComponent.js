import "./LoaderComponent.css";

const Loader = (props) => {
  return (
    <>
      {props.hidden ? (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
