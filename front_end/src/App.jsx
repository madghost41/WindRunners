import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [teamRoster, setTeamRoster] = useState([])
  const [ user, setUser] = useState(useLoaderData())
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() =>{
    let nullUserUrls = ["/login/", "/signup/"]
    let isAllowed = nullUserUrls.includes(location.pathname)
    if (user && isAllowed) {
      navigate("/");
    } else if (!user && !isAllowed) {
      navigate("/");
    } 
  }, [location.pathname, user])

  
const addToRoster = (player) => {
  if(!checkOnTeam(player.PlayerID)){
    const updateTeam = [...teamRoster, player];
    console.log("added player", player)
    setTeamRoster(updateTeam);
  } else {
    console.log("Player is on the Roster")
  }
};

const removeFromRoster = (playerId) => {
  const updatedTeam = teamRoster.filter((p) => p.PlayerID !== playerId);
  console.log("player removed", playerId)
  setTeamRoster(updatedTeam)
};

const checkOnTeam = (id) => teamRoster.some((player) => player.PlayerID === id)

const contextObj = {
  teamRoster,
  addToRoster,
  removeFromRoster,
  checkOnTeam,
  user,
  setUser,
};


  return (
    <>
    <NavBar setUser={setUser} user={user}/>
    <Outlet context={ contextObj }/>
    </>
  )
}

export default App
