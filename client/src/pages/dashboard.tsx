import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigste = useNavigate();
  return (
    <div className="">
      <button
        className="border p-1 px-2 rounded-md m-36"
        onClick={() => {
          sessionStorage.removeItem("token");
          navigste("/auth/login");
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Dashboard;
