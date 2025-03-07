"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-500">Track your hiring metrics and screening performance</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard title="Total Screenings" value="24" change="+12%" description="From last month" />
              <MetricCard title="Candidates Screened" value="842" change="+18%" description="From last month" />
              <MetricCard title="Avg. Match Score" value="76%" change="+5%" description="From last month" />
              <MetricCard title="Time Saved" value="128 hrs" change="+22%" description="From last month" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Screening Activity</CardTitle>
                  <CardDescription>Number of screenings over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                    <BarChartPlaceholder />
                  </div>
                </CardContent>
              </Card>

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
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Screening Efficiency</CardTitle>
                <CardDescription>Time saved compared to traditional screening</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                  <LineChartPlaceholder />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <MetricCard title="Shortlisted" value="124" change="+8%" description="From last month" />
              <MetricCard title="Interviewed" value="68" change="+15%" description="From last month" />
              <MetricCard title="Hired" value="12" change="+33%" description="From last month" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Candidate Sources</CardTitle>
                  <CardDescription>Where your candidates come from</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                    <PieChartPlaceholder />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Candidate Journey</CardTitle>
                  <CardDescription>Conversion through hiring stages</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                    <FunnelChartPlaceholder />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <Card>
                <CardHeader>
                  <CardTitle>Skill Gaps</CardTitle>
                  <CardDescription>Skills in demand vs. available candidates</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                    <RadarChartPlaceholder />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Skill Trends</CardTitle>
                <CardDescription>How candidate skills have changed over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                  <AreaChartPlaceholder />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="efficiency" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <MetricCard
                title="Avg. Time to Hire"
                value="18 days"
                change="-25%"
                description="From traditional process"
                positive={true}
              />
              <MetricCard
                title="Cost per Hire"
                value="$2,450"
                change="-35%"
                description="From traditional process"
                positive={true}
              />
              <MetricCard title="Screening Accuracy" value="94%" change="+32%" description="From traditional process" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Time Savings</CardTitle>
                  <CardDescription>Hours saved by AI screening vs. traditional methods</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                    <ComparisonChartPlaceholder />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality of Hire</CardTitle>
                  <CardDescription>Performance ratings of AI-screened hires</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                    <ScatterPlotPlaceholder />
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
                      <tr className="border-b">
                        <td className="py-3 px-4">Candidate Experience Rating</td>
                        <td className="py-3 px-4">6.5/10</td>
                        <td className="py-3 px-4">9.2/10</td>
                        <td className="py-3 px-4 text-green-600">42% improvement</td>
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
          </TabsContent>
        </Tabs>
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
function BarChartPlaceholder() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="150" width="20" height="30" fill="#3B82F6" />
      <rect x="90" y="120" width="20" height="60" fill="#3B82F6" />
      <rect x="130" y="100" width="20" height="80" fill="#3B82F6" />
      <rect x="170" y="70" width="20" height="110" fill="#3B82F6" />
      <rect x="210" y="90" width="20" height="90" fill="#3B82F6" />
      <rect x="250" y="50" width="20" height="130" fill="#3B82F6" />
      <rect x="290" y="80" width="20" height="100" fill="#3B82F6" />
      <rect x="330" y="60" width="20" height="120" fill="#3B82F6" />
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="180" x2="40" y2="40" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  )
}

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

function LineChartPlaceholder() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="40,150 90,140 140,100 190,120 240,80 290,60 340,40"
        stroke="#3B82F6"
        strokeWidth="3"
        fill="none"
      />
      <polyline
        points="40,160 90,170 140,150 190,155 240,140 290,130 340,120"
        stroke="#EF4444"
        strokeWidth="3"
        fill="none"
      />
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="180" x2="40" y2="40" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  )
}

function PieChartPlaceholder() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 0A100 100 0 0 1 200 100L100 100Z" fill="#3B82F6" />
      <path d="M200 100A100 100 0 0 1 100 200L100 100Z" fill="#10B981" />
      <path d="M100 200A100 100 0 0 1 0 100L100 100Z" fill="#F59E0B" />
      <path d="M0 100A100 100 0 0 1 100 0L100 100Z" fill="#EF4444" />
    </svg>
  )
}

function FunnelChartPlaceholder() {
  return (
    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 40H250V60H50V40Z" fill="#3B82F6" />
      <path d="M70 70H230V90H70V70Z" fill="#60A5FA" />
      <path d="M90 100H210V120H90V100Z" fill="#93C5FD" />
      <path d="M110 130H190V150H110V130Z" fill="#BFDBFE" />
      <path d="M130 160H170V180H130V160Z" fill="#DBEAFE" />
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

function RadarChartPlaceholder() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,20 180,100 100,180 20,100" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <polygon points="100,40 160,100 100,160 40,100" fill="#93C5FD" stroke="#3B82F6" strokeWidth="2" />
      <polygon points="100,60 140,100 100,140 60,100" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="#94A3B8" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="100" cy="100" r="80" stroke="#94A3B8" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="60" stroke="#94A3B8" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="40" stroke="#94A3B8" strokeWidth="1" fill="none" />
    </svg>
  )
}

function AreaChartPlaceholder() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40,150 90,140 140,100 190,120 240,80 290,60 340,40 340,180 40,180 Z"
        fill="#DBEAFE"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <path
        d="M40,160 90,170 140,150 190,155 240,140 290,130 340,120 340,180 40,180 Z"
        fill="#FEE2E2"
        stroke="#EF4444"
        strokeWidth="2"
      />
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="180" x2="40" y2="40" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  )
}

function ComparisonChartPlaceholder() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="60" width="30" height="120" fill="#3B82F6" />
      <rect x="110" y="120" width="30" height="60" fill="#EF4444" />
      <rect x="170" y="40" width="30" height="140" fill="#3B82F6" />
      <rect x="210" y="100" width="30" height="80" fill="#EF4444" />
      <rect x="270" y="20" width="30" height="160" fill="#3B82F6" />
      <rect x="310" y="90" width="30" height="90" fill="#EF4444" />
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="180" x2="40" y2="20" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  )
}

function ScatterPlotPlaceholder() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="120" r="6" fill="#3B82F6" />
      <circle cx="120" cy="90" r="6" fill="#3B82F6" />
      <circle cx="160" cy="60" r="6" fill="#3B82F6" />
      <circle cx="200" cy="80" r="6" fill="#3B82F6" />
      <circle cx="240" cy="50" r="6" fill="#3B82F6" />
      <circle cx="280" cy="70" r="6" fill="#3B82F6" />
      <circle cx="320" cy="40" r="6" fill="#3B82F6" />
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94A3B8" strokeWidth="2" />
      <line x1="40" y1="180" x2="40" y2="20" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  )
}

