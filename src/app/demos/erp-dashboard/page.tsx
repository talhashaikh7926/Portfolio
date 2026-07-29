"use client";

import Link from "next/link";
import { ArrowLeft, TrendingUp, Users, Package } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 420, target: 400 },
  { month: "Feb", revenue: 380, target: 400 },
  { month: "Mar", revenue: 510, target: 450 },
  { month: "Apr", revenue: 470, target: 450 },
  { month: "May", revenue: 590, target: 500 },
  { month: "Jun", revenue: 620, target: 520 },
];

const inventoryData = [
  { name: "Denim Fabric", value: 35 },
  { name: "Finished Goods", value: 28 },
  { name: "Raw Materials", value: 22 },
  { name: "Accessories", value: 15 },
];

const COLORS = ["#3b82f6", "#22d3ee", "#a78bfa", "#f59e0b"];

const kpis = [
  { label: "Monthly Revenue", value: "£620K", change: "+12.4%", icon: TrendingUp },
  { label: "Active Employees", value: "847", change: "+3.2%", icon: Users },
  { label: "Inventory Turnover", value: "4.2x", change: "+8.1%", icon: Package },
];

export default function ErpDashboardDemo() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <h1 className="mt-6 text-2xl font-bold">ERP Analytics Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          Inspired by Artistic Denim Mills ERP — React + MySQL stored procedures + Eclipse BI pattern.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-card-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <kpi.icon className="text-accent" size={20} />
                <span className="text-xs font-medium text-green-400">{kpi.change}</span>
              </div>
              <p className="mt-3 text-2xl font-bold">{kpi.value}</p>
              <p className="text-xs text-muted">{kpi.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-card-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold">Revenue vs Target (£K)</h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#8b9cb3" fontSize={12} />
                <YAxis stroke="#8b9cb3" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                  }}
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" fill="#1e293b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-card-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold">Inventory Distribution</h2>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {inventoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-card-border bg-card p-5">
          <h2 className="mb-4 text-sm font-semibold">6-Month Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#8b9cb3" fontSize={12} />
              <YAxis stroke="#8b9cb3" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "#111827",
                  border: "1px solid #1e293b",
                  borderRadius: 8,
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22d3ee"
                strokeWidth={2}
                dot={{ fill: "#22d3ee" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
