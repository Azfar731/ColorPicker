import "./Pallet.css";
import ColorDisplayer from "./ColorDisplayer";

type Params = {
  colorsInfo: { hex: string; name: string }[];
};

export default function Pallet({ colorsInfo }: Params) {
  const availableWidth: number = 100 / colorsInfo.length;

  const colorContainers = colorsInfo.map((colorInfo) => {
    return (
      <ColorDisplayer
        key={colorInfo.hex}
        colorInfo={colorInfo}
        width={availableWidth}
      />
    );
  });

  return <div className="pallet">{colorContainers}</div>;
}
