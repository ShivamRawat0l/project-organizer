import GridLayout from "react-grid-layout";
import { Input } from "@mantine/core";
import { RiSearchEyeFill } from "react-icons/ri";
type Props = {
  key: string;
};
function ProjectOptions(props: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 70,
        marginLeft: 30,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <i
            class="devicon-flutter-plain colored"
            style={{ fontSize: 104 }}
          ></i>
        </div>
        <div style={{ marginLeft: 24 }}>
          <div style={{ color: "#fff", fontSize: 34 }}>
            Flutter Project Name
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              justifyContent: "space-between",
            }}
          >
            <div>0.96 GB</div>
            <div>Flutter </div>
            <div>2 times</div>
            <div>30minutes</div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 26,
          marginBottom: 26,
          padding: 8,
          borderRadius: 36,
          backgroundColor: "yellow",
        }}
      >
        Run -
      </div>
    </div>
  );
}

export default ProjectOptions;
