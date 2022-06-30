import s from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label} htmlFor="">
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;