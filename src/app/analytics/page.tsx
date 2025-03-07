"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-500">Track your hiring metrics and screening performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Total Screenings" value="24" change="+12%" description="From last month" />
          <MetricCard title="Candidates Screened" value="842" change="+18%" description="From last month" />
          <MetricCard title="Avg. Match Score" value="76%" change="+5%" description="From last month" />
          <MetricCard title="Time Saved" value="128 hrs" change="+22%" description="From last month" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Quality</CardTitle>
              <CardDescription>Match score distribution</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                <DonutChartPlaceholder />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Skills</CardTitle>
              <CardDescription>Most common skills among candidates</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                <HorizontalBarChartPlaceholder />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Traditional ATS vs. AI Screening</CardTitle>
            <CardDescription>Key performance metrics comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Metric</th>
                    <th className="text-left py-3 px-4">Traditional ATS</th>
                    <th className="text-left py-3 px-4">AI Screening</th>
                    <th className="text-left py-3 px-4">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Time to Screen 100 Resumes</td>
                    <td className="py-3 px-4">25 hours</td>
                    <td className="py-3 px-4">2 hours</td>
                    <td className="py-3 px-4 text-green-600">92% faster</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Qualified Candidate Identification</td>
                    <td className="py-3 px-4">45%</td>
                    <td className="py-3 px-4">92%</td>
                    <td className="py-3 px-4 text-green-600">104% improvement</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">False Negatives (Missed Talent)</td>
                    <td className="py-3 px-4">35%</td>
                    <td className="py-3 px-4">8%</td>
                    <td className="py-3 px-4 text-green-600">77% reduction</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Diversity of Candidate Pool</td>
                    <td className="py-3 px-4">Limited</td>
                    <td className="py-3 px-4">Significantly Higher</td>
                    <td className="py-3 px-4 text-green-600">85% more diverse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function MetricCard({ title, value, change, description, positive = true }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className={positive ? "text-green-500 font-medium" : "text-red-500 font-medium"}>{change}</span>
          <span className="text-gray-500 ml-2">{description}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Chart Placeholders
function DonutChartPlaceholder() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="white" />
      <path d="M100 20A80 80 0 0 1 180 100L100 100Z" fill="#3B82F6" />
      <path d="M100 20A80 80 0 0 0 20 100L100 100Z" fill="#10B981" />
      <path d="M20 100A80 80 0 0 0 100 180L100 100Z" fill="#F59E0B" />
      <path d="M100 180A80 80 0 0 0 180 100L100 100Z" fill="#EF4444" />
      <circle cx="100" cy="100" r="40" fill="white" />
    </svg>
  )
}

function HorizontalBarChartPlaceholder() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="30" width="200" height="20" fill="#3B82F6" />
      <rect x="40" y="60" width="160" height="20" fill="#3B82F6" />
      <rect x="40" y="90" width="140" height="20" fill="#3B82F6" />
      <rect x="40" y="120" width="120" height="20" fill="#3B82F6" />
      <rect x="40" y="150" width="100" height="20" fill="#3B82F6" />
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="180" x2="40" y2="20" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  )
}

