import Sidebar from "./Components/sidebar";
import Player from "./Components/player";
import Routing from "./Routing";
import { useContext } from "react";
import { PlayerContext } from "./Context/playerContext";


function App() {
  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Routing />
      </div>
      <Player />
      <audio ref={audioRef} src={track.audio} preload="auto"></audio>
    </div>
  );
}

export default App;
