'use client'

import { useState } from 'react'

export default function MetaCalculator() {
  const [gasPrice, setGasPrice] = useState(5.92)
  const [consumption, setConsumption] = useState(8)
  const [earnPerKm, setEarnPerKm] = useState(2)
  const [monthlyCosts, setMonthlyCosts] = useState(4000)
  const [daysPerWeek, setDaysPerWeek] = useState(6)

  const calcMeta = (extra = 0) => {
    const kmNeeded = (monthlyCosts + extra) / (earnPerKm - (gasPrice / consumption))
    const daily = (kmNeeded / (daysPerWeek * 4)) * earnPerKm
    const weekly = daily * daysPerWeek
    return { daily: daily.toFixed(2), weekly: weekly.toFixed(2) }
  }

  const metaNormal = calcMeta()

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Meta Mensal</h2>

      <div className="space-y-2 grid grid-cols-2 sm:grid-cols-1 gap-4">
        <Input label="Preço da gasolina (R$/L)" value={gasPrice} onChange={setGasPrice} />
        <Input label="Consumo médio (km/L)" value={consumption} onChange={setConsumption} />
        <Input label="Valor recebido por km (R$)" value={earnPerKm} onChange={setEarnPerKm} />
        <Input label="Dias trabalhados na semana" value={daysPerWeek} onChange={setDaysPerWeek} />
        <Input label="Meta mensal (R$)" value={monthlyCosts} onChange={setMonthlyCosts} />
      </div>

      <div className="mt-4 space-y-2">
        <Result label="Meta" daily={metaNormal.daily} weekly={metaNormal.weekly} />
      </div>
    </div>
  )
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-700">{label}</label>
      <input
        type="number"
        className="w-full border rounded-xl px-3 py-2 mt-1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  )
}

function Result({ label, daily, weekly }) {
  return (
    <div className="border rounded-xl p-3 bg-gray-50">
      <div className="font-medium">{label}</div>
      <div className="text-sm text-gray-700">
        Meta diária: <strong>R$ {daily}</strong> | Meta semanal: <strong>R$ {weekly}</strong>
      </div>
    </div>
  )
}
