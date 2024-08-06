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
    overflow: "hidden", 
  };

  const fontSize = {
    fontSize: width * 0.2 > 2 ? `2rem` : `1.5rem`,
  };

  async function handelClick(){
    if(navigator.clipboard){
     navigator.clipboard.writeText(colorInfo.hex).then(()=> {
      const prompt = document.getElementById(`value-copied-prompt-${colorInfo.hex}`);
      if(prompt){
      prompt.style.opacity = "1";
      setTimeout(()=>prompt.style.opacity = "0",1000)
      }

     })
      .catch(err => console.log("Error while copying hex value: " + err))     
    }
  
  }
  return (
      <div style={styles} onClick={handelClick}>
        <div className="color-info" style={fontSize}>
          <div className="color-code">{colorInfo.hex}</div>
          <div className="color-name">{colorInfo.name}</div>
        </div>
          <div id={`value-copied-prompt-${colorInfo.hex}`}className="value-copied-prompt" >Hex Copied</div>
      </div>
  );
}
