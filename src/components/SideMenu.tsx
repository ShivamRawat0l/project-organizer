import GridLayout from "react-grid-layout";
import Option from "./Option.tsx";
type Props = {
  key: string;
};
function SideMenu(props: Props) {
  return (
    <div style={{ flex: 1 }}>
      <div
        className="selected"
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
      <div className="selected" style={{ marginTop: 50 }}>
        <Option text="Projects" selected />
        <Option text="Options" />
        <Option text="Guide" />
        <Option text="Exit" />
      </div>
    </div>
  );
}

export default SideMenu;
