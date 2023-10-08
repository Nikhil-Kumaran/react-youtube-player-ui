import "./App.css";

import { YoutubePlayer } from "../lib/main";

function App() {
  return (
    <div>
      <YoutubePlayer url={"https://www.pexels.com/download/video/4746616/?fps=29.97&h=2160&w=3840"} controls width={"50vw"} height={"auto"} />
    </div>
  );
}

export default App;
