import perfilIcon from "../src/assets/perfil.png"
import calendar from "../src/assets/calendar.png"
import mail from "../src/assets/mail.png"
import phone from "../src/assets/phone.png"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: '',
    fechaNacimiento: '',
    telefono: '',
    correo: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', form)

    toast.success("¡Información enviada con éxito!")

    setForm({
      nombre: '',
      fechaNacimiento: '',
      telefono: '',
      correo: '',
    })
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          ¿Listo para comenzar tu plan de retiro?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block font-semibold mb-1">Nombre completo</label>
            <div className="flex items-center border rounded px-3 py-2">
              <img src={perfilIcon} className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block font-semibold mb-1">Fecha de nacimiento</label>
            <div className="flex items-center border rounded px-3 py-2">
              <img src={calendar} className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="date"
                name="fechaNacimiento"
                value={form.fechaNacimiento}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Teléfono */}
          <div>
            <label className="block font-semibold mb-1">Teléfono</label>
            <div className="flex items-center border rounded px-3 py-2">
              <img src={phone} className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="tel"
                name="telefono"
                placeholder="Ingresa tu teléfono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Correo */}
          <div>
            <label className="block font-semibold mb-1">Correo electrónico</label>
            <div className="flex items-center border rounded px-3 py-2">
              <img src={mail} className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                name="correo"
                placeholder="Ingresa tu correo"
                value={form.correo}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-violet-900 text-white font-bold py-2 rounded hover:bg-red-700 mt-4 cursor-pointer"
          >
            Enviar información
          </button>
        </form>
      </div>

      {/* Aquí va el Toast */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default Formulario