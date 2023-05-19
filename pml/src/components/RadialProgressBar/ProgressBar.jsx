import CircularProgress from "./RadialProgressBar";

const ProgressBar = ({ value, max }) => (
  <div>
    <CircularProgress value={value} max={max} />
  </div>
);

export default ProgressBar;