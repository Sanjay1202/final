import React from "react";
import {
  Handshake,
  Briefcase,
  Workflow,
  GraduationCap,
  Award,
  PlayCircle,
} from "lucide-react";
import { Helmet } from "react-helmet";

const featuresData = [
  {
    icon: Handshake,
    title: "One-to-One Mentoring",
    description:
      "Receive personalized guidance from experienced mentors to accelerate your growth.",
    color: "success",
  },
  {
    icon: Briefcase,
    title: "Expert Doubt Clearing",
    description:
      "Get your questions answered by industry experts in dedicated doubt-clearing sessions.",
    color: "warning",
  },
  {
    icon: Workflow,
    title: "Real-Time Projects",
    description:
      "Apply your skills to real-world projects and build a portfolio that stands out.",
    color: "info",
  },
  {
    icon: GraduationCap,
    title: "Internship & Placement",
    description:
      "Unlock internship and job opportunities through our extensive industry network.",
    color: "danger",
  },
  {
    icon: Award,
    title: "Valuable Certificates",
    description:
      "Earn recognized certificates to validate your skills and enhance your resume.",
    color: "primary",
  },
  {
    icon: PlayCircle,
    title: "Interactive Lessons",
    description:
      "Engage with high-quality video content and interactive elements for better learning.",
    color: "success",
  },
];

const Features = () => (
  <>
    <Helmet>
      <title>Features - SSD Education</title>
      <meta
        name="description"
        content="The SSD education has many features and unique way of developing technical skills in various sectors of IT, Marketing, and Tally, etc... We are offering the following benifits. By joining us you can enlight your future in the growing IT industry."
      />
      <meta
        name="keywords"
        content="online courses Coimbatore, internships in Coimbatore, placement training, skill development, IT training Coimbatore"
      />
    </Helmet>
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h1 mb-3">Why Choose SSD Education?</h2>
          <p className="lead text-muted">
            We provide a comprehensive learning experience designed for your
            success.
          </p>
        </div>
        <div className="row justify-content-center">
          {featuresData.map((feature) => (
            <div className="col-lg-4 col-md-6 mb-4" key={feature.title}>
              <div className="card h-100 text-center border-0 shadow-sm feature-card">
                <div className="card-body p-4">
                  <div
                    className={`feature-icon bg-${feature.color}-soft text-${feature.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                  >
                    <feature.icon size={32} />
                  </div>
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Features;
