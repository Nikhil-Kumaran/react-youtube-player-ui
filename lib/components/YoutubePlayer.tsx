import ReactPlayer, { ReactPlayerProps } from "react-player";

import styles from "../styles/YoutubePlayer.module.css";

interface Props extends ReactPlayerProps {}

export function YoutubePlayer(props: Props) {
  return <ReactPlayer {...props} />;
}
