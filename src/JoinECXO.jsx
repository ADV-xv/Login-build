import React, { useState } from 'react'

function JoinECXO() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/mpwdzqnb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError('Submission failed. Please try again.')
      }
    } catch {
      setError('Submission failed. Please try again.')
    }
    setLoading(false)
  }

  return (
    <section className="p-10 bg-gradient-to-b from-gray-950 to-black text-center text-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6">Join ECXO</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-6">
        ECXO is expanding. We're on the hunt for a passionate and skilled Instrumentalist to join our sonic journey.
        Be part of a creative collective pushing boundaries through music, visuals, and innovation.
      </p>
      <div className="max-w-2xl mx-auto text-left bg-gray-900 p-6 rounded-lg shadow-xl">
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Collaborate on songwriting, arrangement, and sound design</li>
          <li>Open to experimental and cinematic textures</li>
          <li>Live performance potential (local and online)</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Improvisation skills</li>
          <li>Basic music knowledge</li>
          <li>Good Team Coordination</li>
        </ul>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about yourself and your setup..."
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            value={form.message}
            onChange={handleChange}
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-sm text-green-400">Thank you! Your message has been sent. 🎉</p>
        )}
        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}
      </div>
    </section>
  )
}

export default JoinECXO