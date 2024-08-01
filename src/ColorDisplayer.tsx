import "./ColorDisplayer.css";

type Params = {
  hex: string;
  width: number;
};

export default function ColorDisplayer({ hex, width }: Params) {
  const styles = {
    width: `100%`,
    height: "90%",
    backgroundColor: hex,
  };


  const fontSize = {
    fontSize:  width * 0.2 > 2 ? `1.5rem` : `0.8rem`
  }


  return (
    <div style={{ width: `${width}%` }}>
      <div style={styles}></div>
      <div className="codeContainer" style={fontSize}>{hex}</div>
    </div>
  );
}
