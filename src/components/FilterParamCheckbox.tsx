import * as React from "react";
import { IFIlterParamCheckboxProps } from "../interfaces/components";

const FIlterParamCheckbox: React.FC<IFIlterParamCheckboxProps> = ({
  name,
  value,
  params,
  setParams,
  activeCategory,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const isStarted = React.useRef(false);

  React.useEffect(() => {
    setChecked(false);
  }, [activeCategory]);

  React.useEffect(() => {
    if (isStarted) {
      checked
        ? setParams([...params, { key: name, value: value }])
        : setParams(params.filter((param) => !(param.key === name && param.value === value)));
    }
    isStarted.current = true;
  }, [checked]); //eslint-disable-line

  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      onChange={() => setChecked((prev) => !prev)}
      checked={checked}
    />
  );
};

export default FIlterParamCheckbox;
