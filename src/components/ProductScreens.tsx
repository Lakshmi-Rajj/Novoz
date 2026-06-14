import React from 'react';
import {
  Plus, Clock, Users, FileText, ShieldCheck, Database, Key, ListFilter, UserCheck,
} from 'lucide-react';

// Common visual traits for a modern enterprise operating workspace:
// - Small borders, slate-50/100 fills, crisp typography, and micro-avatars.

// 1. Board View (Task Planning)
export function BoardMockup() {
  const columns = [
    {
      title: 'To Do',
      count: 2,
      tasks: [
        { id: 'TSK-102', title: 'Draft enterprise compliance specifications', priority: 'Medium', assignee: 'MS' },
        { id: 'TSK-105', title: 'Refactor database indexing for audit logs', priority: 'High', assignee: 'JC' }
      ]
    },
    {
      title: 'In Progress',
      count: 1,
      tasks: [
        { id: 'TSK-94', title: 'Design centralized workspace access layers', priority: 'High', assignee: 'WM' }
      ]
    },
    {
      title: 'Review',
      count: 1,
      tasks: [
        { id: 'TSK-81', title: 'Verify SOC 2 audit logging protocols', priority: 'High', assignee: 'MS' }
      ]
    },
    {
      title: 'Done',
      count: 2,
      tasks: [
        { id: 'TSK-78', title: 'SAML SSO integration testing', priority: 'Medium', assignee: 'JC' },
        { id: 'TSK-72', title: 'Configure global team directory API', priority: 'Low', assignee: 'WM' }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#FCFDFE] border border-slate-200 rounded-xl overflow-hidden shadow-md flex flex-col font-charlieText text-left text-sm select-none">
      {/* Product Workbench Top Bar */}
      <div className="h-12 border-b border-slate-200 bg-white px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span className="font-bold text-slate-800 text-[14px]">Sprint Planning</span>
          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-[12px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded hover:bg-slate-100">
            <Plus className="w-3.5 h-3.5" /> New Task
          </button>
        </div>
      </div>

      {/* Board Columns Grid */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto min-h-[320px] bg-slate-50/50">
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-3 min-w-[200px]">
            {/* Header */}
            <div className="flex items-center justify-between px-1 text-[12px] font-bold text-slate-500 uppercase tracking-wider">
              <span>{col.title}</span>
              <span className="bg-slate-200/80 px-1.5 py-0.5 rounded-full text-[10px] text-slate-600">{col.count}</span>
            </div>

            {/* Tasks Container */}
            <div className="flex flex-col gap-2">
              {col.tasks.map((task) => (
                <div 
                  key={task.id} 
                  className="bg-white border border-slate-200 rounded-lg p-3 hover:border-blue-500 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-400">{task.id}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                      task.priority === 'High' ? 'bg-red-50 text-red-700' :
                      task.priority === 'Medium' ? 'bg-yellow-50 text-yellow-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-slate-700 leading-snug group-hover:text-blue-600 transition-colors mb-3">
                    {task.title}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3" /> 2d remaining
                    </span>
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center border border-white shadow-sm uppercase">
                      {task.assignee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Document Workspace (Collaborative Canvas)
export function DocumentMockup() {
  return (
    <div className="w-full bg-[#FCFDFE] border border-slate-200 rounded-xl overflow-hidden shadow-md flex font-charlieText text-left text-sm select-none aspect-[16/10]">
      {/* Sidebar Navigation */}
      <div className="w-48 border-r border-slate-200 bg-white p-3 hidden sm:flex flex-col gap-4">
        <div className="flex items-center gap-2 px-1 mb-2">
          <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">W</div>
          <span className="font-bold text-slate-800 text-[12px] uppercase tracking-wider">Workspace</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase px-1 mb-1 tracking-wider">Favorites</span>
          <a href="#" className="flex items-center gap-2 text-slate-600 bg-slate-50 text-[12px] font-bold px-2 py-1.5 rounded">
            <FileText className="w-3.5 h-3.5 text-blue-600" /> Platform Outline
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 text-[12px] font-semibold px-2 py-1.5 rounded transition-colors">
            <ShieldCheck className="w-3.5 h-3.5" /> Security Protocols
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 text-[12px] font-semibold px-2 py-1.5 rounded transition-colors">
            <Users className="w-3.5 h-3.5" /> Team Guidelines
          </a>
        </div>
      </div>

      {/* Editor Canvas Area */}
      <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col gap-4 overflow-y-auto">
        {/* Document Header */}
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">
            <span>Documents</span>
            <span>/</span>
            <span className="text-slate-600">Platform Outline</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 font-charlieDisplay leading-tight">
            Platform Specifications & Operational Framework
          </h1>
          <div className="flex items-center gap-3 mt-4 text-[12px] text-slate-400 font-medium">
            <span className="flex items-center gap-1"><UserCheck className="w-3.5 h-3.5" /> Last edited 3h ago</span>
            <span>•</span>
            <div className="flex -space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center border border-white">MS</span>
              <span className="w-5 h-5 rounded-full bg-purple-500 text-white text-[9px] font-bold flex items-center justify-center border border-white">JC</span>
              <span className="w-5 h-5 rounded-full bg-green-500 text-white text-[9px] font-bold flex items-center justify-center border border-white">WM</span>
            </div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-slate-600 text-[13px] leading-relaxed">
          <p className="font-semibold text-slate-700">
            This operational blueprint establishes the directory configurations, synchronization protocols, and audit logs required for the platform environment.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex flex-col gap-2 relative">
            <div className="absolute right-3 top-3 flex items-center gap-1.5 bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span> Edit Lock Active
            </div>
            <h4 className="text-[12px] font-bold text-slate-800 uppercase tracking-wider">1. Directory Configuration</h4>
            <p className="text-[12px]">All active user identity states synchronize with the central user table every 60 seconds.</p>
          </div>
          <p>
            System processes run in an isolated workspace container, maintaining SOC 2 compliance constraints and ensuring end-to-end auditability across the team boundary.
          </p>
        </div>
      </div>
    </div>
  );
}

// 3. Admin Console (Security & Controls)
export function SecurityMockup() {
  const logs = [
    { event: 'SAML SSO Config Updated', user: 'Mehmet Sari', ip: '192.168.1.45', time: '10 mins ago', status: 'Success' },
    { event: 'Database Connection Restructured', user: 'Joe Cotant', ip: '10.0.12.82', time: '42 mins ago', status: 'Success' },
    { event: 'IP Access Policy Restricted', user: 'Wais Mojaddidi', ip: '172.16.8.5', time: '1h 12m ago', status: 'Blocked' }
  ];

  return (
    <div className="w-full bg-[#FCFDFE] border border-slate-200 rounded-xl overflow-hidden shadow-md flex flex-col font-charlieText text-left text-sm select-none">
      {/* Header */}
      <div className="h-14 border-b border-slate-200 bg-white px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          <div>
            <h3 className="font-bold text-slate-800 text-[14px] leading-tight">Admin & Compliance Center</h3>
            <p className="text-[11px] text-slate-400 font-medium">Enterprise Security & Compliance Logs</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold px-2 py-1 rounded">
          SOC 2 Verified
        </div>
      </div>

      {/* Grid of details */}
      <div className="p-6 bg-slate-50/50 flex flex-col gap-6">
        {/* Core settings cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-3 shadow-sm">
            <Key className="w-8 h-8 text-blue-600 bg-blue-50 p-1.5 rounded" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Single Sign-On</span>
              <span className="font-bold text-slate-800 text-[13px]">SAML / OIDC Enabled</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-3 shadow-sm">
            <Database className="w-8 h-8 text-blue-600 bg-blue-50 p-1.5 rounded" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Data Encryption</span>
              <span className="font-bold text-slate-800 text-[13px]">AES-256 / TLS 1.3 Active</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-3 shadow-sm">
            <ListFilter className="w-8 h-8 text-blue-600 bg-blue-50 p-1.5 rounded" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Audits</span>
              <span className="font-bold text-slate-800 text-[13px]">Compliance Exports Ready</span>
            </div>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">Recent Business Process Automation</span>
            <span className="text-[10px] font-semibold text-blue-600 cursor-pointer hover:underline">View All Log Entries</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px] text-slate-600">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-left">
                  <th className="px-4 py-2.5 font-bold text-slate-500">Event</th>
                  <th className="px-4 py-2.5 font-bold text-slate-500">Actor</th>
                  <th className="px-4 py-2.5 font-bold text-slate-500">IP Address</th>
                  <th className="px-4 py-2.5 font-bold text-slate-500">Time</th>
                  <th className="px-4 py-2.5 font-bold text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs.map((log, lIdx) => (
                  <tr key={lIdx} className="hover:bg-slate-50/30">
                    <td className="px-4 py-3 font-semibold text-slate-800">{log.event}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">{log.user}</td>
                    <td className="px-4 py-3 text-slate-500 font-mono">{log.ip}</td>
                    <td className="px-4 py-3 text-slate-400">{log.time}</td>
                    <td className="px-4 py-3">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                        log.status === 'Success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
