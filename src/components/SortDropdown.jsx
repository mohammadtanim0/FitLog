import { ChevronDown } from 'lucide-react';

export default function SortDropdown({ value, onChange }) {
  return (
    <label className="sort-box">
      <span>Sort By</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
      <ChevronDown size={16} />
    </label>
  );
}
