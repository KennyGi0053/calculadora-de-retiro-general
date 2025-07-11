import { useState } from "react"

const Calculadora = () => {

  const [form, setForm] = useState({
    sexo: 'Mujer',
    fuma: 'No',
    ingresos: '',
    gastos: '',
    edadRetiro: '',
    gastoMensual: '',
  })

  const [resultado, setResultado] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const calcularRetiro = () => {
    const { ingresos, gastos, edadRetiro, gastoMensual } = form

    // Validaciones básicas
    if (
      !ingresos || !gastos || !edadRetiro || !gastoMensual ||
      isNaN(ingresos) || isNaN(gastos) || isNaN(edadRetiro) || isNaN(gastoMensual)
    ) {
      alert("Por favor completa todos los campos numéricos correctamente.")
      return
    }

    const edadActual = 25
    const añosRestantes = edadRetiro - edadActual

    if (añosRestantes <= 0) {
      alert("La edad de retiro debe ser mayor que tu edad actual (25).")
      return
    }

    const retiroAnual = gastoMensual * 12
    const valorObjetivo = retiroAnual * 25
    const inversionMensual = Math.round(valorObjetivo / (añosRestantes * 12))

    setResultado({
      valor: valorObjetivo.toLocaleString('en-US'),
      inversion: inversionMensual.toLocaleString('en-US'),
    })
  }

  return (
<div className="flex1 p-4 md:flex row md:p-16 md:items-center md:justify-between">
    <div className="md:items-center">
      <h1 className="font-bold text-2xl"> 
        Planifica tu futuro financiero
      </h1>
      <p className="mt-4 text-gray-600 ">Calcula tu plan de retiro personalizado y asegura tu tranquilidad</p>
        <video width="640" height="360" controls
        className="rounded-lg mt-4">
        <source 
        src="https://res.cloudinary.com/dtnbv5sdv/video/upload/v1752254534/video1_srwwbl.mp4" 
        type="video/mp4" 
        />
        Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

       <div className="max-w-md w-full bg-white rounded-lg shadow p-6 mt-4 md:max-w-180">
      <h2 className="text-xl font-bold mb-4">Calculadora de Retiro</h2>

      <div className="mb-4">
        <label className="block font-semibold">Sexo</label>
        <select name="sexo" value={form.sexo} onChange={handleChange} className="w-full border rounded p-2 mt-1">
          <option>Mujer</option>
          <option>Hombre</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">¿Fuma?</label>
        <select name="fuma" value={form.fuma} onChange={handleChange} className="w-full border rounded p-2 mt-1">
          <option>No</option>
          <option>Sí</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-semibold">Ingresos mensuales</label>
          <input name="ingresos" type="number" value={form.ingresos} onChange={handleChange} className="w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label className="block font-semibold">Gastos mensuales</label>
          <input name="gastos" type="number" value={form.gastos} onChange={handleChange} className="w-full border rounded p-2 mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-semibold">Edad a retirarse</label>
          <input name="edadRetiro" type="number" value={form.edadRetiro} onChange={handleChange} className="w-full border rounded p-2 mt-1" />
        </div>
        <div>
          <label className="block font-semibold text-sm">Gasto mensual deseado</label>
          <input name="gastoMensual" type="number" value={form.gastoMensual} onChange={handleChange} className="w-full border rounded p-2 mt-2" />
        </div>
      </div>

      <button onClick={calcularRetiro} className="w-full bg-violet-900 text-white font-bold py-2 rounded hover:bg-red-700 cursor-pointer">
        Calcular
      </button>

      {resultado && (
        <div className="mt-6 border-t pt-4">
          <p className="font-semibold text-gray-700">
            Valor a acumular para retiro: <span className="text-black">${resultado.valor}</span>
          </p>
          <p className="font-semibold text-gray-700 mt-2">
            Inversión mensual sugerida: <span className="text-black">${resultado.inversion}</span>
          </p>
        </div>
      )}
    </div>
    </div>
  )
}

export default Calculadora
