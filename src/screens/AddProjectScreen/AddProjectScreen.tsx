import { Input } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useStores } from "../../modal";
import AddProjectSideMenu from "./components/AddProjectSideMenu";
import GridLayout from "react-grid-layout";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useMemo } from "react";
import { Link } from "react-router-dom";
function AddProjectScreen() {
  const { rootStore } = useStores();
  const { width, height } = useWindowDimensions();
  const dynamicHeight = useMemo(() => height / 100, [height]);

  const layout = [
    {
      i: "sidemenu",
      x: 9,
      y: 0,
      w: 3,
      h: 100 - 50 / dynamicHeight,
      static: true,
    },
    {
      i: "mainMenu",
      x: 0,
      y: 0,
      w: 9,
      h: 100 - 50 / dynamicHeight,
      static: true,
    },
    {
      i: "bottomBar",
      x: 0,
      y: 100 - 50 / dynamicHeight,
      w: 12,
      h: 20 / dynamicHeight,
      static: true,
    },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      margin={[0, 0]}
      cols={12}
      rowHeight={dynamicHeight}
      width={width - 2}
      style={{ backgroundColor: "transparent" }}
    >
      <div key="mainMenu" style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
        <div style={{ flex: 1 }}>
          <div style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }}></div>
          <Link to="/">Go back</Link>
          <Input
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
          <button onClick={() => {}}>Save</button>
        </div>
      </div>
      <div key="bottomBar" style={{ backgroundColor: "#f62" }}></div>
      <div key="sidemenu" style={{ backgroundColor: "#362" }}>
        <AddProjectSideMenu />
      </div>
    </GridLayout>
  );
}

export default observer(AddProjectScreen);
