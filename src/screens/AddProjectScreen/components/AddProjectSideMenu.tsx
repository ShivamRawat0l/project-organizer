import { observer } from "mobx-react-lite";
import { ICONS } from "../../../assets";
import SoftwareCard from "../../../components/SoftwareCard";

function SideMenu() {
  return (
    <div>
      <div style={{ marginBottom: 100 }}>Softwares</div>
      <SoftwareCard title="Terminal" icon={ICONS.terminal} onAdd={() => {}} />
      <SoftwareCard title="Browser" icon={ICONS.browser} onAdd={() => {}} />
      <SoftwareCard
        title="Executable"
        icon={ICONS.executable}
        onAdd={() => {}}
      />
      <SoftwareCard title="Explorer" icon={ICONS.explorer} onAdd={() => {}} />
    </div>
  );
}

export default observer(SideMenu);
