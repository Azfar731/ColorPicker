import "./ColorDisplayer.css";

type Params = {
  colorInfo: { hex: string; name: string };
  width: number;
};

export default function ColorDisplayer({ colorInfo, width }: Params) {
  const styles = {
    width: `${width}%`,
    height: "100%",
    minWidth: "10%",
    backgroundColor: colorInfo.hex,
    position: "relative",
  };

  const fontSize = {
    fontSize: width * 0.2 > 2 ? `2rem` : `1.5rem`,
  };

  return (
      <div style={styles}>
        <div className="color-info" style={fontSize}>
          <div className="color-code">{colorInfo.hex}</div>
          <div className="color-name">{colorInfo.name}</div>
        </div>
      </div>
  );
}
