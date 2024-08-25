const projects = [
  {
    id: 1,
    title: "Event Manager",
    shortDescription:
      "Manage events of an organization, register, and get notifications.",
    detailedDescription:
      "The Event Manager is a comprehensive web application designed to streamline the process of managing events within an organization. Users can easily view upcoming and past events, create new events, register for them, and receive timely notifications. The application offers an intuitive user interface and robust backend, ensuring a seamless event management experience.",
    link: "https://evt-manager.onrender.com/",
    gitHub: "https://github.com/Kaushik-Shahare/Event-Manager",
    photos: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/signin.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/home.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/evtManagement.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/createEvent.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/userManagement.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/Lhome.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/LevtManagement.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/LcreateEvent.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Images/LuserManagement.png",
    ],
    video: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Videos/Admin.mov",
      "https://raw.githubusercontent.com/Kaushik-Shahare/Event-Manager/main/demo/Videos/Default.mov",
    ],
    techStack: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Jinja2",
      "SQLite",
    ],
    libraries: ["zxcvbn", "bcrypt"],
    additionalInfo:
      "This project was developed to streamline event management for large organizations.",
  },
  {
    id: 2,
    title: "Chat App",
    shortDescription:
      "Real-time chat with online status, emojis, and profile editing.",
    detailedDescription:
      "The Chat App provides a real-time communication platform where users can chat live with others. The app is implemented using Socket.io, enabling fast and responsive messaging. Users can see the online status of other users, use emojis in their messages, and edit their profiles with ease. The application ensures a smooth and interactive chat experience. Users can search for other users using their usernames and start a conversation instantly.",
    link: "https://kaushik-shahare-chatapp.onrender.com/signin",
    gitHub: "https://github.com/Kaushik-Shahare/ChatApp",
    photos: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/main/demo/Images/signin.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/main/demo/Images/home.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/main/demo/Images/chats.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/main/demo/Images/profile.png",
    ],
    video: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/main/demo/Videos/LiveChat.mov",
    ],
    techStack: ["React", "Socket.io", "Node.js"],
    libraries: ["Emoji-Mart", "Axios", "jsonwebtoken", "bcrypt"],
    additionalInfo:
      "This chat app allows real-time communication with a rich user interface.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    shortDescription:
      "Showcase of my projects, skills, and experience on my portfolio website.",
    detailedDescription:
      "My portfolio website serves as a professional platform to showcase my skills, projects, and experience. Built using React and Next.js, the website features a modern design with smooth animations and intuitive navigation. It includes detailed sections for my resume, project portfolio, and contact information, making it easy for potential employers or collaborators to learn more about me.",
    link: "https://portfolio-lime-nine-27.vercel.app/",
    gitHub: "https://github.com/Kaushik-Shahare/portfolio",
    photos: ["https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/"],
    video: ["https://example.com/portfolio.mp4"],
    techStack: ["React", "Tailwind CSS"],
    libraries: ["Framer Motion", "React Router"],
    additionalInfo:
      "A personal website to showcase my skills, projects, and experience. It includes a resume and contact form.",
  },
  {
    id: 4,
    title: "News Summary",
    shortDescription:
      "Capture or paste news articles to get summarized information.",
    detailedDescription:
      "The News Summary project is a powerful tool for extracting and summarizing news articles. Users can either capture a photo of a news article or paste the URL of an article to receive a summary that includes the title, date, author, and main content. The project leverages Python, Django, and web scraping techniques to provide users with concise and relevant information from various news sources.",
    link: "https://example.com/project-four",
    gitHub: "https://github.com/Kaushik-Shahare/News-Summarization-WebSite",
    photos: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/News-Summarization-WebSite/main/demo/Images/home.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/News-Summarization-WebSite/main/demo/Images/Summary.png",
    ],
    video: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/News_Summarizar/master/demo_video/imageToSummary.mp4",
    ],
    techStack: ["Python", "Flask", "Computer Vision", "Machine Learning"],
    libraries: ["CV2", "Pytesseract", "nltk", "facebook-bart-large-cnn"],
    additionalInfo:
      "This project extracts and summarizes news articles from various sources, providing users with concise information.",
  },
  {
    id: 5,
    title: "Virtual Piano Player",
    shortDescription:
      "Innovative piano learning tool using computer vision and AI.",
    detailedDescription:
      "The Virtual Piano Player project is an innovative tool designed to aid in piano learning. Users can draw a piano keyboard on a white surface, and the camera detects the keys using computer vision. The application plays the corresponding piano sounds as users interact with the keys. The project employs Python, OpenCV, and TensorFlow for hand and finger detection, although this feature is still under development.",
    link: "https://example.com/project-five",
    gitHub: "https://github.com/Kaushik-Shahare/PianoPlayer",
    photos: [
      "https://example.com/virtual-piano1.jpg",
      "https://example.com/virtual-piano2.jpg",
    ],
    video: ["https://example.com/virtual-piano.mp4"],
    techStack: ["Python", "OpenCV", "TensorFlow"],
    libraries: ["NumPy", "Scikit-learn"],
    additionalInfo:
      "This project aims to create an innovative piano learning tool using computer vision to detect keys and play sounds.",
  },
];

export default projects;
