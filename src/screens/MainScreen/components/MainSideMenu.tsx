import { observer } from "mobx-react-lite";
import Option from "../../../components/Option";

function SideMenu() {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          fontFamily: "Reem Kufi",
          fontSize: 44,
          textAlign: "center",
          marginTop: 20,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        Project Organizer
      </div>
      <div style={{ marginTop: 50 }}>
        <Option text="Projects" selected />
        <Option text="Options" />
        <Option text="Guide" />
        <Option text="Exit" />
      </div>
    </div>
  );
}

export default observer(SideMenu);
