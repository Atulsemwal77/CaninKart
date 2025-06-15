import { useState } from 'react';

const CountryFormModal = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({ name: '' });

  const handleSubmit = async () => {
    if (!form.name) return alert("Please fill all fields");
    await onSave(form);
    setForm({ name: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 w-96 space-y-4 shadow-lg">
        <input
          type="text"
          placeholder="Enter the Country Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 bg-gray-200 rounded-lg w-full"
        />
        <div className="flex justify-between">
          <button onClick={onClose} className="border px-6 py-2 rounded-full">Discard</button>
          <button onClick={handleSubmit} className="bg-black text-white px-6 py-2 rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CountryFormModal;
