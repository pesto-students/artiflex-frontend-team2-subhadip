import { DemoComponent } from "../../components";

const TimeLinePage = () => {
  return (
    <div>
      <h2>TimeLinePage</h2>
      <DemoComponent propA={true} funcProp={() => console.log("Hello Demo")} />
    </div>
  );
};

export default TimeLinePage;
