import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Replace with your Supabase URL & Key
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Reservation() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('reservations').insert([form]);
    if (!error) {
      setSuccess('Reservation submitted successfully!');
      setForm({ name: '', email: '', phone: '', date: '', time: '', people: '' });
    } else {
      setSuccess('Error submitting reservation.');
    }
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center">{t('reservation_title')}</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        {['name', 'email', 'phone', 'date', 'time', 'people'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 mb-2 capitalize">{field}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Submit
        </button>

        {success && <p className="mt-4 text-center text-green-600">{success}</p>}
      </form>
    </section>
  );
}
