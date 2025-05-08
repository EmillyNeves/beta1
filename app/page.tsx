"use client"

import { useState } from "react"
import { Home, Calendar, FileText, BarChart2, Activity, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LewisifUI() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0e] text-white font-mono">
      {/* Header */}
      <header className="border-b border-[#00ff9d]/30 p-4 flex justify-between items-center">
        <div className="text-[#00ff9d] text-2xl font-bold">@lewisif</div>
        <nav className="flex gap-6">
          <Link href="#" className="text-[#00ff9d] hover:text-[#00ff9d]/80">
            HOME
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            ABOUT
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            LOG IN
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column - Character Profile */}
        <div className="border border-[#00ff9d]/30 rounded-md p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#9c27b0] flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Avatar"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#00ff9d]">Nick MERAKI</h2>
              <p className="text-gray-400">Título: Veterano</p>
            </div>
          </div>

          <button className="border border-[#00ff9d]/50 rounded text-[#00ff9d] py-2 hover:bg-[#00ff9d]/10 transition-colors">
            PERSONALIZAR AVATAR
          </button>

          <div className="mt-4">
            <h3 className="text-[#9c27b0] mb-4">CHARACTER_STATS</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>INTELLIGENCE</span>
                  <span>87/100</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-[#00ff9d] h-2 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>LOGIC</span>
                  <span>92/100</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-[#00ff9d] h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>MEMORY</span>
                  <span>76/100</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-[#00ff9d] h-2 rounded-full" style={{ width: "76%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>ENERGY</span>
                  <span>54/100</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "54%" }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-white mb-4">LEVEL</h3>
              <div className="flex justify-between items-center">
                <div className="text-4xl text-[#00ff9d]">4</div>
                <div className="text-right text-sm">
                  <div>XP: 2570/4000</div>
                  <div>64%</div>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div className="bg-[#00ff9d] h-2 rounded-full" style={{ width: "64%" }}></div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-[#00ff9d] mb-4">TASKS</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>CALC - Cálculo IV</span>
                <span className="text-[#00ff9d]">1/16</span>
              </div>
              <div className="flex justify-between">
                <span>ALG - Álgebra Linear</span>
                <span className="text-[#00ff9d]">1/16</span>
              </div>
              <div className="flex justify-between">
                <span>ED - Estrutura de Dados</span>
                <span className="text-[#00ff9d]">1/16</span>
              </div>
              <div className="flex justify-between">
                <span>ELD - Elemento da Lógica Digital</span>
                <span className="text-[#00ff9d]">1/16</span>
              </div>
              <div className="flex justify-between">
                <span>Iniciação Científica</span>
                <span className="text-gray-400">--/--</span>
              </div>
              <div className="flex justify-between">
                <span>Estágio</span>
                <span className="text-gray-400">--/--</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Grad Navigator */}
        <div className="border border-[#00ff9d]/30 rounded-md p-6 flex flex-col">
          <div className="text-center mb-8">
            <h1 className="text-[#00ff9d] text-6xl font-bold tracking-wider">GRAD</h1>
            <h1 className="text-[#00ff9d] text-6xl font-bold tracking-wider">NAVIGATOR</h1>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>Transforme sua jornada acadêmica em uma experiência dinâmica e interativa.</p>
            <p>Uma plataforma gamificada que monitora seus dados acadêmicos, visualiza conquistas e requisitos.</p>
            <p>Complete desafios, acumule XP, suba de nível e desbloqueie novas habilidades.</p>
          </div>

          <div className="flex-1 flex items-center justify-center mt-4">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 border-2 border-[#9c27b0] transform rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#9c27b0] font-bold">CODE WIZARD</div>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Code Wizard"
                    width={100}
                    height={100}
                    className="mx-auto my-2"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-no-repeat bg-center opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Attendance Control */}
        <div className="flex flex-col gap-4">
          <div className="border border-[#00ff9d]/30 rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#00ff9d] text-xl">CONTROLE DE FALTAS</h3>
              <span className="text-gray-400">4º PERÍODO FATORIAL</span>
            </div>

            <div className="grid grid-cols-5 gap-2 text-center mb-2">
              <div className="text-gray-400">SEGUNDA</div>
              <div className="text-gray-400">TERÇA</div>
              <div className="text-gray-400">QUARTA</div>
              <div className="text-gray-400">QUINTA</div>
              <div className="text-gray-400">SEXTA</div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {/* Row 1 */}
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">CALC</div>
              <div className="bg-[#1a1a1a] border border-gray-700 p-2 text-center rounded">--</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">CALC</div>
              <div className="bg-[#1a1a1a] border border-gray-700 p-2 text-center rounded">--</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">ALG</div>

              {/* Row 2 */}
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">ED</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">CALC</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">ED</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">CALC</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">ALG</div>

              {/* Row 3 */}
              <div className="bg-[#1a1a1a] border border-gray-700 p-2 text-center rounded">--</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">ELD</div>
              <div className="bg-[#1a1a1a] border border-gray-700 p-2 text-center rounded">--</div>
              <div className="bg-[#003a2c] border border-[#00ff9d]/30 p-2 text-center rounded">ELD</div>
              <div className="bg-[#1a1a1a] border border-gray-700 p-2 text-center rounded">--</div>
            </div>
          </div>

          <div className="border border-[#00ff9d]/30 rounded-md p-4">
            <h3 className="text-[#00ff9d] text-xl mb-4">TOTAL</h3>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>CALC</span>
                <span className="text-[#00ff9d]">1/7</span>
              </div>
              <div className="flex justify-between">
                <span>ALG</span>
                <span className="text-[#00ff9d]">1/7</span>
              </div>
              <div className="flex justify-between">
                <span>ED</span>
                <span className="text-[#00ff9d]">1/7</span>
              </div>
              <div className="flex justify-between">
                <span>ELD</span>
                <span className="text-[#00ff9d]">1/7</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-[#00ff9d] mb-2">NOTA</h4>
              <p className="text-sm text-gray-300">
                Disciplina com &gt;25% de faltas (&gt;7 aulas) você pode reprovar automaticamente.
              </p>
              <p className="text-sm text-gray-300 mt-4">
                Se tiver nota &gt;7 em 75% do semestre, você pode faltar até 14 aulas.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-[#00ff9d]/30 p-2">
        <div className="flex justify-around">
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-[#00ff9d]" : "text-gray-500"}`}
            onClick={() => setActiveTab("home")}
          >
            <Home size={20} />
            <span className="text-xs mt-1">HOME</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "faltas" ? "text-[#00ff9d]" : "text-gray-500"}`}
            onClick={() => setActiveTab("faltas")}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">FALTAS</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "notas" ? "text-[#00ff9d]" : "text-gray-500"}`}
            onClick={() => setActiveTab("notas")}
          >
            <FileText size={20} />
            <span className="text-xs mt-1">NOTAS</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "progresso" ? "text-[#00ff9d]" : "text-gray-500"}`}
            onClick={() => setActiveTab("progresso")}
          >
            <BarChart2 size={20} />
            <span className="text-xs mt-1">PROGRESSO</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "analytics" ? "text-[#00ff9d]" : "text-gray-500"}`}
            onClick={() => setActiveTab("analytics")}
          >
            <Activity size={20} />
            <span className="text-xs mt-1">ANALYTICS</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "developer" ? "text-[#00ff9d]" : "text-gray-500"}`}
            onClick={() => setActiveTab("developer")}
          >
            <Code size={20} />
            <span className="text-xs mt-1">DEVELOPER</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
