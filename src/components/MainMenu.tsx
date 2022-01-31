import GridLayout from "react-grid-layout";
import { Input } from "@mantine/core";
import { RiSearchEyeFill } from "react-icons/ri";
import ProjectOptions from "./ProjectOptions.tsx";

type Props = {
  key: string;
};
function MainMenu(props: Props) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }}>
        <Input
          icon={<RiSearchEyeFill style={{ width: 30, height: 30 }} />}
          variant="unstyled"
          placeholder="Project Name"
          radius="md"
          size="xl"
          style={{
            input: {
              color: "red",
            },
          }}
          sx={(theme) => ({
            backgroundColor: "#ae5",
            borderRadius: 10,
            "&:hover": {
              backgroundColor: "#7a1",
            },
          })}
        />
        <ProjectOptions />

        <ProjectOptions />
      </div>
    </div>
  );
}

export default MainMenu;
