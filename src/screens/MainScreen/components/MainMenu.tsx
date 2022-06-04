import { Input } from "@mantine/core";
import { RiSearchEyeFill } from "react-icons/ri";
import ProjectOptions from "../../../components/ProjectOptions";
import AddProjectOptions from "../../../components/AddProjectOptions";
import { useStores } from "../../../modal";
import { observer } from "mobx-react-lite";

function MainMenu() {
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
        <AddProjectOptions />
      </div>
    </div>
  );
}

export default observer(MainMenu);
