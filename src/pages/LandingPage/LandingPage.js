import { DemoComponent } from "../../components";

const LandingPage = () => {
  return (
    <div>
      <h2>Landing Page</h2>
      <DemoComponent propA={true} funcProp={() => console.log("Hello Demo")} />
    </div>
  );
};

export default LandingPage;
