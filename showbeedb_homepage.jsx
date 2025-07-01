import React from "react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaAws, FaChartBar } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-purple-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Empowering Decisions with Data & Cloud Expertise</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          ShowbeeDB offers expert Data Analytics and Amazon Cloud Consulting to transform your digital journey.
        </p>
        <Button className="text-lg px-6 py-3 rounded-full bg-white text-blue-800 hover:bg-gray-100">
          Get a Free Consultation
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About ShowbeeDB</h2>
          <p className="text-gray-700 text-lg mb-4">
            Founded by a seasoned cloud and analytics consultant, ShowbeeDB specializes in delivering
            data-driven solutions and scalable cloud infrastructure. We are committed to helping businesses
            leverage technology for smarter decision-making.
          </p>
          <a href="https://www.linkedin.com/in/showbee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-medium hover:underline">
            <FaLinkedin className="mr-2" /> Visit LinkedIn Profile
          </a>
        </div>
        <div className="flex justify-center">
          <img src="/images/showbeedb-profile.jpg" alt="ShowbeeDB Profile" className="w-80 h-80 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaChartBar className="text-4xl text-blue-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p>
                Business Intelligence, KPI Dashboards, Predictive Modeling, ETL Processing using Power BI, Excel, and Python.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaAws className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">AWS Cloud Architecture</h3>
              <p>
                Architecture Design, Migration, Security Hardening, and Cost Optimization tailored to AWS best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaChartBar className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Training & Workshops</h3>
              <p>
                Customized corporate training on AWS, Data Analytics, Power BI, and Agile cloud transformation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-900 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">Ready to take your business to the next level?</h2>
        <p className="mb-6 text-lg">Let’s connect and explore how ShowbeeDB can help you achieve your goals.</p>
        <Button className="bg-white text-blue-900 text-lg px-6 py-3 rounded-full hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </main>
  );
}
