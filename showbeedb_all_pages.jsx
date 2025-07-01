// Directory structure suggested:
// /pages
//   - HomePage.jsx (already created)
//   - ServicesPage.jsx
//   - PortfolioPage.jsx
//   - ContactPage.jsx
//   - BlogPage.jsx (optional)

// --- ServicesPage.jsx ---
import React from "react";
import { FaAws, FaChartPie, FaChalkboardTeacher } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <FaChartPie className="text-3xl text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Data Analytics</h2>
          <p>
            Data visualization, dashboards, KPIs, and end-to-end analytics solutions using Power BI, Python, Excel, and SQL.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <FaAws className="text-3xl text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">AWS Cloud Consulting</h2>
          <p>
            Cloud architecture, migrations, serverless computing, cost optimization, and security compliance on AWS.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <FaChalkboardTeacher className="text-3xl text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Training & Workshops</h2>
          <p>
            Corporate training in Data Analytics, AWS cloud computing, and digital transformation enablement.
          </p>
        </div>
      </div>
    </main>
  );
}

// --- PortfolioPage.jsx ---
import React from "react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Portfolio</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">E-Commerce Analytics Dashboard</h2>
          <p className="mb-2">Power BI solution for online retail company, visualizing customer behavior and sales trends.</p>
          <span className="text-sm text-gray-500">Tool: Power BI, Excel, SQL</span>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">AWS Cost Optimization Project</h2>
          <p className="mb-2">Reduced cloud expenditure by 40% by re-architecting and applying AWS budget automation.</p>
          <span className="text-sm text-gray-500">Tool: AWS, Lambda, CloudWatch</span>
        </div>
      </div>
    </main>
  );
}

// --- ContactPage.jsx ---
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="bg-white p-8 shadow rounded-xl space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input type="text" className="w-full p-3 border rounded-lg" placeholder="Your name" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input type="email" className="w-full p-3 border rounded-lg" placeholder="Your email" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea className="w-full p-3 border rounded-lg" rows="5" placeholder="Write your message..." required></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </main>
  );
}

// --- BlogPage.jsx (Optional) ---
import React from "react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Latest Blog Posts</h1>
      <div className="space-y-8">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">5 Ways to Optimize Your AWS Bill</h2>
          <p className="text-gray-600">Discover actionable tips to reduce cloud costs while maintaining performance.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">Choosing Between EC2 and Lambda</h2>
          <p className="text-gray-600">Understand the pros and cons of different AWS compute services with use cases.</p>
        </div>
      </div>
    </main>
  );
}
