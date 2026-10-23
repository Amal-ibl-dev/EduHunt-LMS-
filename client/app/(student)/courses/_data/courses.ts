type Course = {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: string;
  hours: number;
  lessons: number;
  rating: number;
  price: number;
  art: "web" | "python" | "design" | "marketing" | "video";
  symbol: string;
};

// Sample catalog until course data is connected to the backend.
export const courses: readonly Course[] = [
  { id: "web-development", title: "Complete Web Development Bootcamp", instructor: "Jonas Schmedtmann", category: "Development", level: "Beginner", hours: 42, lessons: 180, rating: 4.9, price: 59.99, art: "web", symbol: "</>" },
  { id: "python-data-science", title: "Python for Data Science & ML", instructor: "Angela Yu", category: "Data Science", level: "Intermediate", hours: 36, lessons: 142, rating: 4.8, price: 49.99, art: "python", symbol: "Py" },
  { id: "ui-ux-design", title: "UI/UX Design Masterclass", instructor: "Sarah Johnson", category: "Design", level: "Beginner", hours: 24, lessons: 96, rating: 4.9, price: 44.99, art: "design", symbol: "UX" },
  { id: "digital-marketing", title: "Digital Marketing from Scratch", instructor: "Alex Rivera", category: "Marketing", level: "Beginner", hours: 18, lessons: 72, rating: 4.7, price: 39.99, art: "marketing", symbol: "SEO" },
  { id: "video-editing", title: "Video Editing with Premiere Pro", instructor: "Mark Evans", category: "Creative", level: "Beginner", hours: 20, lessons: 84, rating: 4.8, price: 39.99, art: "video", symbol: "Pr" },
  { id: "react-nextjs", title: "Build Modern Apps with React & Next.js", instructor: "Nina Patel", category: "Development", level: "Intermediate", hours: 32, lessons: 128, rating: 4.9, price: 54.99, art: "web", symbol: "React" },
  { id: "graphic-design", title: "Graphic Design Essentials", instructor: "Daniel Lee", category: "Design", level: "Beginner", hours: 16, lessons: 64, rating: 4.7, price: 29.99, art: "design", symbol: "Aa" },
  { id: "excel-analytics", title: "Excel for Business & Data Analysis", instructor: "Priya Sharma", category: "Business", level: "All levels", hours: 14, lessons: 58, rating: 4.8, price: 24.99, art: "python", symbol: "XLS" },
  { id: "javascript", title: "JavaScript: From Basics to Advanced", instructor: "Chris Morgan", category: "Development", level: "All levels", hours: 38, lessons: 156, rating: 4.9, price: 49.99, art: "marketing", symbol: "JS" },
  { id: "social-media", title: "Social Media Strategy & Content", instructor: "Emma Wilson", category: "Marketing", level: "Beginner", hours: 12, lessons: 48, rating: 4.6, price: 29.99, art: "marketing", symbol: "#" },
  { id: "sql", title: "SQL for Real-World Data Analysis", instructor: "James Chen", category: "Data Science", level: "Beginner", hours: 22, lessons: 90, rating: 4.8, price: 34.99, art: "python", symbol: "SQL" },
  { id: "figma", title: "Figma: Design Beautiful Interfaces", instructor: "Sara Thomas", category: "Design", level: "Intermediate", hours: 18, lessons: 76, rating: 4.9, price: 39.99, art: "design", symbol: "Fig" },
  { id: "project-management", title: "Practical Project Management", instructor: "Oliver Brooks", category: "Business", level: "All levels", hours: 15, lessons: 60, rating: 4.7, price: 34.99, art: "web", symbol: "PM" },
  { id: "photography", title: "Photography: Capture Your Story", instructor: "Maya Fernando", category: "Creative", level: "Beginner", hours: 16, lessons: 68, rating: 4.8, price: 29.99, art: "video", symbol: "RAW" },
  { id: "public-speaking", title: "Confident Communication & Speaking", instructor: "Amelia Scott", category: "Personal Growth", level: "All levels", hours: 8, lessons: 32, rating: 4.7, price: 19.99, art: "marketing", symbol: "Hi!" },
  { id: "mobile-development", title: "Flutter Mobile App Development", instructor: "Ryan Perera", category: "Development", level: "Intermediate", hours: 30, lessons: 120, rating: 4.8, price: 49.99, art: "web", symbol: "App" },
  { id: "machine-learning", title: "Machine Learning with Python", instructor: "Aisha Khan", category: "Data Science", level: "Advanced", hours: 40, lessons: 160, rating: 4.9, price: 64.99, art: "python", symbol: "ML" },
  { id: "motion-design", title: "Motion Design with After Effects", instructor: "Leo Martin", category: "Creative", level: "Intermediate", hours: 26, lessons: 104, rating: 4.8, price: 44.99, art: "video", symbol: "Ae" },
  { id: "entrepreneurship", title: "Launch Your First Online Business", instructor: "Sofia Garcia", category: "Business", level: "Beginner", hours: 12, lessons: 50, rating: 4.6, price: 24.99, art: "marketing", symbol: "Go" },
  { id: "design-systems", title: "Scalable Design Systems", instructor: "Ethan Davis", category: "Design", level: "Advanced", hours: 20, lessons: 80, rating: 4.9, price: 49.99, art: "design", symbol: "DS" },
];
