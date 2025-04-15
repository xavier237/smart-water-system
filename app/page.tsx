import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, BarChart3, Bell, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Droplets className="h-6 w-6 text-cyan-600" />
            <span className="text-xl font-bold">Smart Water System</span>
          </div>
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6 text-cyan-900">Smart Water Management System</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Monitor and control your water usage in real-time with our IoT-enabled smart water management solution.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Droplets className="h-10 w-10 text-cyan-600" />}
                title="Real-time Monitoring"
                description="Monitor water levels, flow rates, and consumption patterns in real-time."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-cyan-600" />}
                title="Advanced Analytics"
                description="Gain insights with detailed consumption reports and usage patterns."
              />
              <FeatureCard
                icon={<Bell className="h-10 w-10 text-cyan-600" />}
                title="Smart Notifications"
                description="Receive alerts for unusual consumption, leaks, or system issues."
              />
              <FeatureCard
                icon={<Settings className="h-10 w-10 text-cyan-600" />}
                title="Remote Control"
                description="Control pumps and valves remotely through an intuitive interface."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="max-w-3xl mx-auto">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Connect IoT Devices</h3>
                    <p className="text-gray-600">Install our smart sensors and controllers to your water system.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Access Your Dashboard</h3>
                    <p className="text-gray-600">Log in to your personalized dashboard to view real-time data.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Monitor & Control</h3>
                    <p className="text-gray-600">
                      Track usage, receive alerts, and control your water system remotely.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Save Water & Money</h3>
                    <p className="text-gray-600">Optimize your water usage based on insights and recommendations.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-cyan-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Droplets className="h-6 w-6" />
              <span className="text-xl font-bold">Smart Water System</span>
            </div>
            <div className="text-sm text-cyan-200">
              © {new Date().getFullYear()} Smart Water Management System. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
