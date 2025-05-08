
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function DeveloperPage() {
  const [command, setCommand] = useState("")

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-[#00ff9d] text-2xl font-bold">DEVELOPER_TOOLS</h1>
      
      <Tabs defaultValue="terminal">
        <TabsList className="bg-background border border-[#00ff9d]/30">
          <TabsTrigger value="calculator">CALCULATOR</TabsTrigger>
          <TabsTrigger value="terminal">TERMINAL</TabsTrigger>
          <TabsTrigger value="api">API ACCESS</TabsTrigger>
          <TabsTrigger value="tips">STUDY TIPS</TabsTrigger>
          <TabsTrigger value="avatars">AVATARS</TabsTrigger>
        </TabsList>

        <TabsContent value="terminal" className="mt-6">
          <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
            <div className="font-mono text-sm text-[#00ff9d] mb-4">
              system@grad-navigator:~$ help
              <br />
              Available commands:
              <br />
              - status: Display system status
              <br />
              - courses: List all enrolled courses
              <br />
              - schedule: Show weekly schedule
              <br />
              - progress: Display academic progress
              <br />
              - help: Show this help message
            </div>
            
            <div className="flex gap-2">
              <Input
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="font-mono bg-transparent border-[#00ff9d]/30"
                placeholder="Type command..."
              />
              <Button className="bg-[#00ff9d] text-black hover:bg-[#00ff9d]/90">
                RUN
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="p-4 border-[#00ff9d]/30 bg-background/50">
        <h3 className="text-[#00ff9d] mb-2">DEV_ASSISTANT:</h3>
        <p className="text-gray-400 text-sm">
          Use the Grade Calculator to determine what scores you need on upcoming assessments to reach your target grade. Tip: Aim for consistent study patterns rather than cramming before exams.
        </p>
      </Card>
    </div>
  )
}
