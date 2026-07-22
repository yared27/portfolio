import reactDashboardThumb from '../assets/react.svg';
import dghousing from '../assets/dghousing.png';
import fleet from '../assets/fleet.png';
import fit from '../assets/fit.png';
import student from '../assets/student.png';
export const projects = [
  
  {
     
    id: 1,
    title: 'afro.fit',
    description:
      'Preventive Health & Wellness Platform for Africa',
    image: fit,
    stack: ['Go', 'MongoDB', 'nextjs'],
    category: 'Go',
    githubUrl: 'https://github.com/RealEskalate/g6-afya.git',
    liveUrl: 'https://afya-g6.vercel.app/',
  },
  {
  id: 2,
  title: 'Student Service & Complaint Management System',
  description:
    'A full-stack university platform that streamlines student service requests and complaint management through role-based access, real-time notifications, analytics dashboards, and AI-assisted case triage, improving communication between students and university staff.',
  image: student,
  stack: [
    'React',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Prisma',
    'JWT',
    'Tailwind CSS'
  ],
  category: 'Full Stack',
  githubUrl: 'https://github.com/yared27/Student-Service-And-Complaint-Management-System-SSCMS-.git',
  liveUrl: 'https://student-service-and-complaint-manag.vercel.app/',
},
  {

    id: 3,
    title: 'Digital Housing',
    description:
      'Digital Housing is a web platform that simplifies finding, listing, and managing rental properties with a modern, user-friendly experience.',
    image: dghousing,
    stack: ['React', 'Tailwind','nodejs', 'postgres', 'docker'],
    category: 'React',
    githubUrl: 'https://github.com/yared27/digital_housingV2.git',
    liveUrl: 'https://digital-housing-v2.vercel.app/',
  },
  {
    id: 4,
    title: 'fleet management system',
    description:
      'A fleet management system for managing and optimizing fleet operations, including vehicle tracking, maintenance scheduling, and driver management.',
    image: fleet,
    stack: ['Node', 'Express', 'MongoDB'],
    category: 'Node',
    githubUrl: 'https://github.com/yared27/fleet_management.git',
    liveUrl: 'https://github.com/yared27/fleet_management.git/',
  },
 

//   {
//     id: 4,
//     title: 'E-commerce Experience',
//     description:
//       'A polished storefront interface with product browsing, cart flow, and conversion-friendly visual hierarchy.',
//     image:
//       'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
//     stack: ['React', 'Node', 'Stripe'],
//     category: 'React',
//     githubUrl: 'https://github.com/',
//     liveUrl: 'https://example.com/',
//   },
//   {
//     id: 5,
//     title: 'Automation Hub',
//     description:
//       'A productivity tool for orchestrating repeatable workflows, reducing repetitive tasks, and surfacing status.',
//     image:
//       'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
//     stack: ['Node', 'React', 'Automation'],
//     category: 'Node',
//     githubUrl: 'https://github.com/',
//     liveUrl: 'https://example.com/',
//   },
//   {
//     id: 6,
//     title: 'Prediction Explorer',
//     description:
//       'A data-rich interface for comparing model outputs and presenting the key signals behind each forecast.',
//     image:
//       'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
//     stack: ['ML', 'React', 'Visualization'],
//     category: 'ML',
//     githubUrl: 'https://github.com/',
//     liveUrl: 'https://example.com/',
//   },
// 
];
export default projects;