export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  funded: number
  goal: number
  margin: number
  datePublished: string
  publishedBy: string
  backers: number
  status: "active" | "funded" | "ended"
  category: string
  image: string
  daysLeft: number
  minInvestment: number
  expectedReturn: number
  riskLevel: "low" | "medium" | "high"
}

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "EcoTech Solar Panel Initiative",
    description:
      "Revolutionary solar panel technology that increases efficiency by 40% while reducing manufacturing costs. This project aims to make renewable energy more accessible across Indonesia.",
    shortDescription: "Next-generation solar panels with 40% higher efficiency",
    funded: 750000000,
    goal: 1000000000,
    margin: 15.5,
    datePublished: "2024-01-15",
    publishedBy: "Green Energy Corp",
    backers: 234,
    status: "active",
    category: "Green Energy",
    image: "/solar-panels-renewable-energy.png",
    daysLeft: 45,
    minInvestment: 1000000,
    expectedReturn: 18.5,
    riskLevel: "medium",
  },
  {
    id: "2",
    title: "Smart Agriculture IoT Platform",
    description:
      "Comprehensive IoT solution for modern farming that uses sensors, AI, and blockchain to optimize crop yields and reduce water usage by up to 30%.",
    shortDescription: "IoT platform for smart farming and crop optimization",
    funded: 1200000000,
    goal: 800000000,
    margin: 22.3,
    datePublished: "2024-01-10",
    publishedBy: "AgriTech Solutions",
    backers: 456,
    status: "funded",
    category: "Agriculture",
    image: "/smart-farming-iot-sensors-agriculture.png",
    daysLeft: 0,
    minInvestment: 500000,
    expectedReturn: 25.0,
    riskLevel: "low",
  },
  {
    id: "3",
    title: "Blockchain Education Platform",
    description:
      "Decentralized learning platform that provides blockchain education with NFT certificates and token rewards for course completion.",
    shortDescription: "Learn blockchain technology with NFT certificates",
    funded: 450000000,
    goal: 600000000,
    margin: 8.7,
    datePublished: "2024-01-20",
    publishedBy: "EduChain Ltd",
    backers: 189,
    status: "active",
    category: "Education",
    image: "/blockchain-education-online-learning-platform.png",
    daysLeft: 32,
    minInvestment: 250000,
    expectedReturn: 12.5,
    riskLevel: "medium",
  },
  {
    id: "4",
    title: "Sustainable Fashion Marketplace",
    description:
      "Eco-friendly fashion marketplace connecting sustainable brands with conscious consumers, featuring blockchain-verified supply chain transparency.",
    shortDescription: "Sustainable fashion with blockchain supply chain verification",
    funded: 320000000,
    goal: 500000000,
    margin: 12.1,
    datePublished: "2024-01-25",
    publishedBy: "EcoFashion Hub",
    backers: 167,
    status: "active",
    category: "Fashion",
    image: "/sustainable-fashion-eco-friendly-clothing-marketpl.png",
    daysLeft: 28,
    minInvestment: 750000,
    expectedReturn: 15.8,
    riskLevel: "medium",
  },
  {
    id: "5",
    title: "FinTech Payment Gateway",
    description:
      "Next-generation payment gateway that integrates traditional banking with cryptocurrency payments, supporting both fiat and digital currencies.",
    shortDescription: "Hybrid payment gateway for fiat and cryptocurrency",
    funded: 2100000000,
    goal: 1500000000,
    margin: 28.7,
    datePublished: "2024-01-05",
    publishedBy: "PayTech Indonesia",
    backers: 892,
    status: "funded",
    category: "FinTech",
    image: "/fintech-payment-gateway-cryptocurrency-digital-pay.png",
    daysLeft: 0,
    minInvestment: 2000000,
    expectedReturn: 32.0,
    riskLevel: "high",
  },
  {
    id: "6",
    title: "Healthcare Data Analytics",
    description:
      "AI-powered healthcare analytics platform that helps hospitals optimize patient care and reduce costs through predictive analytics.",
    shortDescription: "AI analytics for healthcare optimization and patient care",
    funded: 180000000,
    goal: 800000000,
    margin: 5.2,
    datePublished: "2024-01-30",
    publishedBy: "MedTech Analytics",
    backers: 78,
    status: "active",
    category: "Healthcare",
    image: "/healthcare-analytics-ai-medical-data-hospital.png",
    daysLeft: 67,
    minInvestment: 1500000,
    expectedReturn: 20.5,
    riskLevel: "low",
  },
]

export function getProjectById(id: string): Project | undefined {
  return mockProjects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return mockProjects.filter((project) => project.category === category)
}

export function getProjectsByStatus(status: string): Project[] {
  return mockProjects.filter((project) => project.status === status)
}
