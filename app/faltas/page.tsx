
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AttendancePage() {
  const courses = [
    {
      code: "CALC",
      name: "Cálculo IV",
      attendance: "1/7",
      maxAbsences: 1,
      currentAbsences: 0,
      remainingAbsences: 1,
    },
    {
      code: "ALG",
      name: "Álgebra Linear",
      attendance: "1/7",
      maxAbsences: 1,
      currentAbsences: 0,
      remainingAbsences: 1,
    },
    {
      code: "ED",
      name: "Estrutura de Dados",
      attendance: "1/7",
      maxAbsences: 1,
      currentAbsences: 0,
      remainingAbsences: 1,
    },
    {
      code: "ELD",
      name: "Elemento da Lógica Digital",
      attendance: "1/7",
      maxAbsences: 1,
      currentAbsences: 0,
      remainingAbsences: 1,
    },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-[#00ff9d] text-2xl font-bold">CONTROLE_DE_FALTAS</h1>
      
      <Tabs defaultValue="overview">
        <TabsList className="bg-background border border-[#00ff9d]/30">
          <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
          <TabsTrigger value="schedule">SCHEDULE</TabsTrigger>
          <TabsTrigger value="history">HISTORY</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 grid md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <Card key={course.code} className="p-4 border-[#00ff9d]/30 bg-background/50">
              <h3 className="text-[#00ff9d] text-xl mb-4">{course.code}</h3>
              <p className="text-gray-400 mb-2">{course.name}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Attendance</span>
                  <span>{course.attendance}</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full">
                  <div className="bg-[#00ff9d] h-2 rounded-full w-[14%]" />
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Maximum Absences:</span>
                    <span>{course.maxAbsences}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Absences:</span>
                    <span>{course.currentAbsences}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remaining Absences:</span>
                    <span>{course.remainingAbsences}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
