import { Button } from "@cred/neopop-web/lib/components";

const SecondaryButtonComp = (props) => {
  return (
    <Button
      kind="elevated"
      size={props.size}
      colorConfig={{
        backgroundColor: "purple",
        edgeColors: { right: "#111827", bottom: "#111827" },
        color: "black",
      }}
    >
      {props.text}
    </Button>
  );
};

export default SecondaryButtonComp;
