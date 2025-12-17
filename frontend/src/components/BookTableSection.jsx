import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function BookTableSection() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    time: '',
    people: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you will integrate Supabase insertion logic later
    console.log('Form submitted', formData)
  }

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-serif font-thin mb-4 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('book_a_table', 'BOOK A TABLE')}
        </h2>

        {/* Line under heading */}
        <div className="w-24 h-px bg-gray-900 mx-auto mb-6 opacity-70"></div>

        <p
          className="text-lg md:text-xl text-gray-600 mb-12"
          style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: 1.8, textTransform: 'uppercase' }}
        >
          {t('reserve_your_spot', 'Reserve your spot and enjoy our exquisite cuisine')}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="mb-2 font-medium"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('full_name', 'Full Name')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t('enter_full_name', 'Enter your full name')}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="mb-2 font-medium"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('phone_number', 'Phone Number')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('enter_phone_number', 'Enter your phone number')}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="mb-2 font-medium"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('date', 'Date')}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label
              htmlFor="time"
              className="mb-2 font-medium"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('time', 'Time')}
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>

          {/* Number of People */}
          <div className="flex flex-col">
            <label
              htmlFor="people"
              className="mb-2 font-medium"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('people', 'Number of People')}
            </label>
            <input
              type="number"
              id="people"
              name="people"
              min="1"
              value={formData.people}
              onChange={handleChange}
              placeholder={t('enter_number_of_people', 'Enter number of people')}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 border border-gray-900 text-gray-900 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition duration-300 rounded-lg"
            >
              {t('book_table', 'Book Now')}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
