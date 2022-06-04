import { observer } from "mobx-react-lite";

import { ICONS } from "../assets";

type ISoftwareCardProps = {
  icon: keyof typeof ICONS;
  title: string;
  onAdd: () => void;
};

function SoftwareCard({ icon, title, onAdd }: ISoftwareCardProps) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: 60,
        backgroundColor: "green",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <div>
        <img
          src={icon}
          style={{ height: 40, paddingLeft: 10 }}
          alt="React Logo"
        />
      </div>
      <div>{title}</div>
      <div
        onClick={() => {
          onAdd();
          console.log("Add Clicked");
        }}
      >
        <img
          src={ICONS.add}
          style={{ height: 40, paddingLeft: 10 }}
          alt="React Logo"
        />
      </div>
    </div>
  );
}

export default observer(SoftwareCard);
