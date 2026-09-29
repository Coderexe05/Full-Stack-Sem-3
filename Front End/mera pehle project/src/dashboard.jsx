import axios from 'axios'
import { useState } from 'react'

const Usersignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(
        'http://localhost:4001/create',
        formData
      )
      console.log(response.data)
      alert('Signup Successful!')

      // Reset form after successful signup
      setFormData({ name: '', id: '', email: '' })
    } catch (error) {
      console.error(error)
      const errorMsg =
        error.response?.data?.message || 'Signup failed. Please try again.'
      alert(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      {/* Wrapped inputs in a form and attached onSubmit */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '280px'
        }}
      >
        <h2>User Sign Up</h2>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label htmlFor="id">User ID</label>
          <input
            id="id"
            name="id"
            type="text"
            value={formData.id}
            onChange={handleChange}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Usersignup