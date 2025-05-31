import MetaCalculator from './components/MetaCalculator'
import DailyCalculator from './components/DailyCalculator'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-black">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Calculadora de Corridas de App
        </h1>
        <p className="text-center text-gray-600">
          Descubra suas metas diárias, semanais e seu lucro líquido no dia!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetaCalculator />
        <DailyCalculator />
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500">
        © 2025 Calculadora Motorista — Desenvolvido por Kaique Mendonça
      </footer>
    </main>
  )
}
