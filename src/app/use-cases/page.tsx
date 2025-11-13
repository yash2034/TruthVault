import { Banknote, Heart, Plane, Briefcase, TrendingUp, Shield, Clock, CheckCircle, AlertCircle, DollarSign, Award } from 'lucide-react';

export default function UseCases() {
  const mainUseCases = [
    {
      icon: <Banknote className="w-16 h-16" />,
      title: "Loan Applications",
      subtitle: "Get approved faster with instant health verification",
      color: "from-green-500 to-emerald-600",
      problems: [
        "Banks require medical check-ups taking 7-14 days",
        "Multiple hospital visits for documentation",
        "Lost or tampered medical certificates",
        "Expensive medical examination fees"
      ],
      solution: "Upload once, use forever. Banks instantly verify your health status via blockchain proof. No repeated medical exams, no paperwork.",
      benefits: [
        "Approval in hours, not weeks",
        "Save $200-500 in medical examination costs",
        "One proof valid for multiple loan applications",
        "Tamper-proof verification"
      ],
      stats: { time: "2hrs", cost: "$0", success: "99%" }
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Insurance Claims",
      subtitle: "Transparent risk profiling for fair premiums",
      color: "from-blue-500 to-cyan-600",
      problems: [
        "Insurers demand extensive medical history",
        "Pre-existing condition disputes",
        "Premium calculation opacity",
        "Claim rejection due to undisclosed conditions"
      ],
      solution: "AI-powered risk assessment gives insurers transparent health scores. You control what to share. Blockchain proof prevents disputes.",
      benefits: [
        "Fair premium based on real data",
        "Transparent risk scoring",
        "Pre-approved health status",
        "Faster claim processing"
      ],
      stats: { time: "Instant", premium: "↓20%", disputes: "↓80%" }
    },
    {
      icon: <Plane className="w-16 h-16" />,
      title: "Visa Processing",
      subtitle: "Medical clearance for international travel",
      color: "from-purple-500 to-pink-600",
      problems: [
        "Embassy-approved medical exams required",
        "Different requirements per country",
        "Expensive medical certificates ($300+)",
        "Long processing times (2-4 weeks)"
      ],
      solution: "Universal health proof accepted by immigration authorities. One verification covers multiple visa applications. QR code for instant validation.",
      benefits: [
        "Single proof for multiple countries",
        "Embassy-grade verification",
        "Save $300+ per visa application",
        "24-hour processing"
      ],
      stats: { countries: "50+", savings: "$300+", time: "24hrs" }
    },
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: "Employment Verification",
      subtitle: "Health fitness certificates for job applications",
      color: "from-orange-500 to-red-600",
      problems: [
        "Employers require medical fitness certificates",
        "Repeat exams for each job application",
        "Privacy concerns with full medical disclosure",
        "Certificate forgery risks"
      ],
      solution: "Shareable health fitness proof without revealing sensitive medical data. Employers verify via QR scan. Blockchain ensures authenticity.",
      benefits: [
        "One proof for multiple applications",
        "Privacy-preserving verification",
        "Instant HR verification",
        "Forgery-proof documentation"
      ],
      stats: { privacy: "100%", cost: "$0", speed: "Instant" }
    }
  ];

  const secondaryUseCases = [
    {
      icon: <TrendingUp />,
      title: "Rental Applications",
      description: "Landlords verify tenant health for long-term leases"
    },
    {
      icon: <Shield />,
      title: "Life Insurance",
      description: "Accurate risk assessment for policy underwriting"
    },
    {
      icon: <Award />,
      title: "Sports Eligibility",
      description: "Athletic fitness verification for competitions"
    },
    {
      icon: <DollarSign />,
      title: "Investment Visas",
      description: "Health clearance for investor immigration programs"
    }
  ];

  const comparisonData = [
    {
      aspect: "Time to Verify",
      traditional: "7-14 days",
      truthvault: "< 5 seconds",
      improvement: "99.9% faster"
    },
    {
      aspect: "Cost per Verification",
      traditional: "$200-500",
      truthvault: "$0.01",
      improvement: "$500 saved"
    },
    {
      aspect: "Documents Required",
      traditional: "Multiple originals",
      truthvault: "One QR code",
      improvement: "100% digital"
    },
    {
      aspect: "Privacy",
      traditional: "Full disclosure",
      truthvault: "Zero-knowledge",
      improvement: "Complete privacy"
    },
    {
      aspect: "Validity",
      traditional: "3-6 months",
      truthvault: "Forever",
      improvement: "Infinite reuse"
    },
    {
      aspect: "Forgery Risk",
      traditional: "High",
      truthvault: "Impossible",
      improvement: "Blockchain secured"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            One Proof, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Infinite Uses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how TruthVault is revolutionizing health verification across industries
          </p>
        </div>
      </section>

      {/* Main Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {mainUseCases.map((useCase, idx) => (
            <div
              key={idx}
              className={`${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex gap-12 items-start`}
            >
              {/* Icon & Title */}
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className={`bg-gradient-to-br ${useCase.color} w-32 h-32 rounded-3xl flex items-center justify-center text-white shadow-2xl mb-6`}>
                  {useCase.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{useCase.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{useCase.subtitle}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(useCase.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-br ${useCase.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 space-y-8">
                {/* Problems */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-red-900">The Problem Today</h3>
                  </div>
                  <ul className="space-y-2">
                    {useCase.problems.map((problem, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 text-red-800">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">TruthVault Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{useCase.solution}</p>
                </div>

                {/* Benefits */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-green-900">Key Benefits</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {useCase.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-green-800">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">And Many More...</h2>
            <p className="text-xl text-gray-600">TruthVault adapts to any verification need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 group hover:border-indigo-300"
              >
                <div className="bg-indigo-50 text-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional vs TruthVault</h2>
            <p className="text-xl text-gray-600">See the difference for yourself</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                    <th className="px-6 py-4 text-left font-bold">Traditional Method</th>
                    <th className="px-6 py-4 text-left font-bold">TruthVault</th>
                    <th className="px-6 py-4 text-left font-bold">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-red-600">{row.traditional}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{row.truthvault}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {row.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Calculate Your Savings</h2>
          <p className="text-xl text-indigo-100 mb-12">See how much TruthVault could save you annually</p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">$2,400</div>
                <div className="text-indigo-100">Average Annual Savings</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">120hrs</div>
                <div className="text-indigo-100">Time Saved Per Year</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-indigo-100">Verifications Per Year</div>
              </div>
            </div>

            <p className="text-indigo-100 mb-6">
              Based on average user requiring 5 loan applications, 3 insurance quotes, 2 visa applications, and 5 job applications annually
            </p>

            <a
              href="/app"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Start Saving Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Universal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why TruthVault is Universal</h2>
            <p className="text-xl text-gray-600">Accepted everywhere, verified by everyone</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain Standard",
                description: "Built on Sui blockchain - a globally recognized standard for immutable records"
              },
              {
                title: "QR Code Format",
                description: "Universal QR codes readable by any smartphone or verification system"
              },
              {
                title: "Cryptographic Proof",
                description: "Military-grade cryptography ensures authenticity without central authority"
              },
              {
                title: "Open Protocol",
                description: "Open-source smart contracts that any organization can integrate"
              },
              {
                title: "API Access",
                description: "Developer APIs for seamless integration into existing verification systems"
              },
              {
                title: "Compliance Ready",
                description: "HIPAA, GDPR, and international health data standards compliant"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}