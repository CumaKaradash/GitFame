"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts"

interface CodingPatternsProps {
  data: {
    heatmap: number[][]
    languages: { name: string; value: number; color: string }[]
    timeline: { month: string; commits: number }[]
    timeOfDay: { hour: string; commits: number; label: string }[]
  }
}

export function CodingPatterns({ data }: CodingPatternsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Coding Patterns</h2>
      <Card className="p-6">
        <Tabs defaultValue="languages">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="heatmap">Activity</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="timeofday">Time of Day</TabsTrigger>
          </TabsList>

          <TabsContent value="heatmap" className="mt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">365-day contribution activity</p>
              <div className="grid grid-cols-53 gap-1">
                {data.heatmap.flat().map((value, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor:
                        value === 0
                          ? "#ebedf0"
                          : value < 3
                            ? "#9be9a8"
                            : value < 6
                              ? "#40c463"
                              : value < 9
                                ? "#30a14e"
                                : "#216e39",
                    }}
                    title={`${value} contributions`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="languages" className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.languages}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.languages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="timeline" className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.timeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="commits" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="timeofday" className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                data={data.timeOfDay}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: "insideStart", fill: "#fff" }}
                  background
                  clockWise
                  dataKey="commits"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
