import React from 'react';
import Label from '../ux/label';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  // onChange: (isChecked: boolean) => void;
  htmlFor?: string;
  name?: string;
  id?: string;
  value?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked ,htmlFor, name,id, value}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form_checkbox w-6 focus-within:border border-2 max-[600px]:w-7 max-[600px]:h-5 accent-black enabled:hover:border-gray-400 disabled:opacity-7 rounded-xl"
        checked={checked}
        value={value}
        name={name}
        id={id}
        // onChange={(e) => onChange(e.target.checked)}
      />
      <Label For={htmlFor} className='text-sm font-normal text-[#555555]' >{label}</Label>
    </div>
  );
};

export default Checkbox;
