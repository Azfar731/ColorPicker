import "./Pallet.css";
import ColorDisplayer from "./ColorDisplayer";

type Params = {
  colorHexValues: string[];
};

export default function Pallet({ colorHexValues }: Params) {
  const availableWidth: number = 100 / colorHexValues.length;
  

  const colorContainers = colorHexValues.map((hexValue) => {
    return <ColorDisplayer hex={hexValue} width={availableWidth} />
  });

  return (
    <div className="pallet">
        {colorContainers}
    </div>
  );
}
