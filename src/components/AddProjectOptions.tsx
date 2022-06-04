import { RiAddBoxLine } from "react-icons/ri";
import { useStores } from "../modal/root-store/root-store-context";
import { Link } from "react-router-dom";
function AddProjectOptions() {
  const { rootStore } = useStores();
  return (
    <Link to="/add">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 70,
          marginLeft: 30,
          borderWidth: 3,
          border: "2px dotted red",
        }}
      >
        <RiAddBoxLine
          style={{
            width: 80,
            height: 80,
            color: "red",
            alignSelf: "center",
          }}
        />
        <div style={{ fontSize: 16, color: "red", alignSelf: "center" }}>
          Click to add projects
        </div>
      </div>
    </Link>
  );
}

export default AddProjectOptions;
