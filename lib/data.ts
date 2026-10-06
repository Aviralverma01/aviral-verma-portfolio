export const profile = {
  name: "Aviral Verma",
  role: "Full Stack Developer | Java DSA | Problem Solver",
  summary: "B.Tech Computer Science & Engineering student building full-stack products with the MERN stack and Java applications grounded in OOP, data structures and clean architecture.",
  email: "aviverma1209@gmail.com",
  phone: "7248728336",
  linkedin: "https://linkedin.com/in/aviral-verma-152303369",
};

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "TypeScript", "C (Basic)"] },
  { group: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["MongoDB"] },
  { group: "Security", items: ["JWT", "Authentication"] },
  { group: "Developer Tools", items: ["Git", "GitHub"] },
  { group: "Core Concepts", items: ["DSA", "OOP", "Collections", "Streams", "Custom Exceptions", "Layered Architecture", "Design Patterns"] },
  { group: "Systems", items: ["Windows", "Linux (Ubuntu)", "Kali"] },
];

export const projects = [
  { id:"brain-code", number:"01", name:"BRAIN CODE", label:"MERN · AI", description:"A full-stack coding-practice platform designed to help developers practice problems and improve logical thinking.", problem:"Make consistent coding practice feel structured, secure and extensible.", features:["Authentication", "Secure APIs", "Scalable application architecture", "Scope for personalized learning and intelligent recommendations"], stack:["MongoDB","Express.js","React.js","Node.js"], github:null, live:null },
  { id:"shakti", number:"02", name:"SHAKTI", label:"MERN · SAFETY", description:"An AI-powered women safety application that detects emergency situations through voice commands and triggers instant SOS alerts with live location.", problem:"Reduce the time between detecting an emergency and getting useful location-based help.", features:["Voice-command emergency detection", "Instant SOS alerts", "Live location tracking", "Danger-zone mapping", "Emergency notifications for trusted contacts and authorities"], stack:["MongoDB","Express.js","React.js","Node.js","Google Maps API","JWT","Web Speech API"], github:null, live:null },
  { id:"bookvault", number:"03", name:"BOOKVAULT", label:"CORE JAVA", description:"A console-based Library Management System built without frameworks to demonstrate disciplined Java design.", problem:"Model common library operations with maintainable, layered object-oriented code rather than framework abstractions.", features:["Book/member management", "Issue and return workflows", "File-based persistence", "Collections and Streams", "Custom exceptions", "Layered architecture", "Singleton, Strategy and Factory patterns"], stack:["Java","OOP","Collections","Streams","Design Patterns"], github:null, live:null },
];

export const education = [
  {school:"Quantum University", degree:"Bachelor of Technology — Computer Science & Engineering", period:"2026 – Present", location:"Roorkee, Uttarakhand", result:"CGPA 8.10 / 10"},
  {school:"Gurukul Kangri Vidyalaya", degree:"Class XII", period:"2023", location:"Haridwar, Uttarakhand", result:"96.5%"}
];

export const certifications = ["Programming with Java — Coursera · 2026", "Oracle Java Foundation — Coursera · 2026"];
