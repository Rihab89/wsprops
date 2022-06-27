import "./App.css";
import Profile from "./Profil/Profile";

function App() {
  const object1 = {
    FullName: "MALLEK RIHAB",
    Bio: "Etudiante",
    Profession: "Formatrice",
  };
  const handleName = (Name) => {
    alert(`the profile name is ${Name}`);
  };

  return (
    <div className="App">
      <Profile Dossier={object1} Rihab={handleName}></Profile>
    </div>
  );
}

export default App;
