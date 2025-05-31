'use client'

import { useState } from 'react'

export default function DailyCalculator() {
  const [gasPrice, setGasPrice] = useState(6.4)
  const [consumption, setConsumption] = useState(10)
  const [earnToday, setEarnToday] = useState(250)
  const [kmToday, setKmToday] = useState(125)

  const fuelCost = (kmToday / consumption) * gasPrice
  const profit = earnToday - fuelCost

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-green-600">Lucro Diário</h2>

      <div className="space-y-2">
        <Input label="Preço da gasolina (R$/L)" value={gasPrice} onChange={setGasPrice} />
        <Input label="Consumo médio (km/L)" value={consumption} onChange={setConsumption} />
        <Input label="Valor recebido no dia (R$)" value={earnToday} onChange={setEarnToday} />
        <Input label="KM rodados no dia" value={kmToday} onChange={setKmToday} />
      </div>

      <div className="mt-4 border rounded-xl p-3 bg-gray-50">
        <div className="text-sm text-gray-700">
          ⛽ Gasto com combustível: <strong>R$ {fuelCost.toFixed(2)}</strong>
        </div>
        <div className="text-sm text-gray-700 mt-1">
          🤑 Lucro líquido do dia: <strong>R$ {profit.toFixed(2)}</strong>
        </div>
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
