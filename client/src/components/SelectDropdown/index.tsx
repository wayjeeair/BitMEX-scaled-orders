import * as React from 'react';
const styles = require('./SelectDropdown.module.css');

type Props<T extends object> = {
  label: any;
  instruments: any;
  onChange: any;
  id: any;
};

const SelectDropdown = <T extends object>(props: Props<T>) => {
  const { label, onChange, id, instruments } = props;
  return (
    <div className={styles.selectDropdown}>
      <label htmlFor={label}>{label}</label>

      <select className="custom-select" onChange={onChange} id={id}>
        {instruments.map((item: string) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export { SelectDropdown };
