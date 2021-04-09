import load from "./index";

export default function Tick(props) {
  setInterval(load, 1000);
  return null;
}
