import { Button } from "@cred/neopop-web/lib/components";

const SecondaryButtonLight = (props) => {
  return (
    <Button
      kind="elevated"
      size={props.size}
      colorConfig={{
        backgroundColor: "#DBBEF7",
        edgeColors: { right: "white", bottom: "white" },
        color: "black",
      }}
    >
      {props.text}
    </Button>
  );
};

export default SecondaryButtonLight;
