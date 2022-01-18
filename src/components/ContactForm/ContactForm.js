import { useState } from 'react'
import './ContactForm.scss'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            phone,
            email,
            name
        }
        setContact(objContact)
        setPhone('')
        setEmail('')
        setName('')
    }

    return (
        <div className='ContactContainer'>
          <h2>Contacto</h2>
          <form className='ContactForm' onSubmit={handleContactForm}>
          <label className='LabelContact'>Nombre: 
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Email:
              <input
                className='InputContact'
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <button className='btn' style={{backgroundColor: '#db4025', color: '#fafafa'}} type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm