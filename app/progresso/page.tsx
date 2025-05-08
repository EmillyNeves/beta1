
"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const xpData = [
  { month: "Jan", xp: 0 },
  { month: "Feb", xp: 450 },
  { month: "Mar", xp: 850 },
  { month: "Apr", xp: 1300 },
  { month: "May", xp: 1650 },
  { month: "Jun", xp: 2570 },
]

export default function ProgressPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-[#00ff9d] text-2xl font-bold">PROGRESS_TRACKER</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
          <h3 className="text-[#00ff9d] text-4xl font-bold">4</h3>
          <p className="text-gray-400 text-sm">Active courses this semester</p>
        </Card>
        
        <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
          <h3 className="text-[#00ff9d] text-4xl font-bold">44/50</h3>
          <p className="text-gray-400 text-sm">Tasks completed overall</p>
        </Card>
        
        <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
          <h3 className="text-[#00ff9d] text-4xl font-bold">92%</h3>
          <p className="text-gray-400 text-sm">Average attendance rate</p>
        </Card>
        
        <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
          <h3 className="text-[#00ff9d] text-4xl font-bold">8.7</h3>
          <p className="text-gray-400 text-sm">Current GPA (0-10)</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
          <h3 className="text-[#00ff9d] mb-4">XP_PROGRESSION</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={xpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Line
                  type="monotone"
                  dataKey="xp"
                  stroke="#00ff9d"
                  strokeWidth={2}
                  dot={{ fill: "#00ff9d" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
