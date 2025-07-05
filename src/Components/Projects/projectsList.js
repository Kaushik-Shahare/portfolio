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
    techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
    libraries: ["zxcvbn", "Jinja2", "bcrypt"],
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
  // {
  //   id: 3,
  //   title: "Portfolio Website",
  //   shortDescription:
  //     "Showcase of my projects, skills, and experience on my portfolio website.",
  //   detailedDescription:
  //     "My portfolio website serves as a professional platform to showcase my skills, projects, and experience. Built using React and Next.js, the website features a modern design with smooth animations and intuitive navigation. It includes detailed sections for my resume, project portfolio, and contact information, making it easy for potential employers or collaborators to learn more about me.",
  //   link: "https://portfolio-lime-nine-27.vercel.app/",
  //   gitHub: "https://github.com/Kaushik-Shahare/portfolio",
  //   photos: ["https://raw.githubusercontent.com/Kaushik-Shahare/ChatApp/"],
  //   video: ["https://example.com/portfolio.mp4"],
  //   techStack: ["React", "Tailwind CSS"],
  //   libraries: ["Framer Motion", "React Router"],
  //   additionalInfo:
  //     "A personal website to showcase my skills, projects, and experience. It includes a resume and contact form.",
  // },
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
      "https://github.com/Kaushik-Shahare/PianoPlayer/raw/main/demo/Images/keydetection.png",
    ],
    video: [
      "https://github.com/Kaushik-Shahare/PianoPlayer/raw/main/demo/Videos/keydetection.mov",
    ],
    techStack: ["Python", "OpenCV", "TensorFlow"],
    libraries: ["NumPy", "Scikit-learn"],
    additionalInfo:
      "This project aims to create an innovative piano learning tool using computer vision to detect keys and play sounds.",
  },
  {
    id: 6,
    title: "AgriConnect",
    shortDescription:
      "A marketplace to sell their products directly to consumers.",
    detailedDescription:
      "AgriConnect is an innovative platform designed to revolutionize the agricultural ecosystem by leveraging technology to bridge gaps between farmers, agricultural experts, and consumers. The platform serves as a comprehensive solution for farmers to network, share knowledge, and access a marketplace to sell their products directly, ensuring better profitability and sustainable practices.",
    link: "https://agriconnect.kaushikshahare.com",
    gitHub: "https://github.com/Kaushik-Shahare/AgriConnect",
    photos: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/Landing.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/home.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/dashboard.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/searchResult.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/productPage.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/profile.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/AgriConnect/refs/heads/main/Images%26Videos/cart.png",
    ],
    video: [],
    techStack: ["Python", "Django", "TypeScript", "NextJS", "Tailwind CSS"],
    libraries: ["cloudinary", "generativeAI", "chartJS", "MUI"],
    additionalInfo:
      "This project was developed to streamline selling crops directly from farmer.",
  },
  {
    id: 7,
    title: "MiniMilitia Web",
    shortDescription: "A web based 2D Multiplayer Shooter Game.",
    detailedDescription: `
# 2D Multiplayer Shooter Game: MiniMilitia (Web Version)

## Overview  
MiniMilitia is a game that I cherished during my childhood, playing it with friends and creating unforgettable memories. As a developer, I wanted to recreate this beloved game on the web, making it accessible without the need for downloads. Originally a mobile game, my web version brings the same fun experience directly to your browser.

To achieve this, I delved into the world of game development, reverse-engineering several 2D games to understand the mechanics and dynamics. This project not only allowed me to relive a part of my childhood but also gave me invaluable insights into game development and learn javascript in depth.

---

## Development Challenges and Solutions  

### 1. Multiplayer Game Running Too Fast After Joining  
- **Issue**: The game speed increased significantly when multiple players joined.  
- **Solution**: Instead of re-rendering the entire page on every frame, I optimized it by updating only the player’s location. This drastically improved performance and resolved the issue.

### 2. Dynamic Canvas Size Causing Location Discrepancies  
- **Issue**: Players had different positions on the canvas due to varying screen resolutions.  
- **Solution**: Standardized the canvas size to fixed dimensions, ensuring consistent gameplay across screens. Examples:  
  - **16:9 Resolutions**:  
    - 320x180  
    - 640x360  
    - 1280x720  

### 3. Jetpack Spam Causing Errors  
- **Issue**: Excessive use of the jetpack feature led to unexpected behavior.  
- **Solution**: Implemented proper checks and limits to handle jetpack usage efficiently.

### 4. Handling Health Bar Depletion  
- **Issue**: Defining actions when a player’s health bar reaches zero.  
- **Solution**: Designed and implemented logic to handle player respawn, game over, or spectator mode.

### 5. Gun Aiming and Character Rotation  
- **Issue**: Rotating the character and gun accurately when aiming left.  
- **Solution**: Utilized the \`ctx.scale(x, y)\` method to mirror the character and gun seamlessly.

### 6. Improved Aim Mechanics  
- **Previous**: Aiming directly at the mouse pointer, which often caused misclicks or accidental actions.  
- **Improved**: Restricted aiming to a specific radius around the character, detecting mouse movement within that radius. This enhancement provided a smoother aiming experience and avoided unwanted interactions outside the game canvas.

### 7. Character Animation  
- **Challenge**: Creating smooth animations for character movements and actions.  
- **Solution**: After studying 2D games and their documentation, I adopted the use of sprites—a single file containing all character movement frames. This approach streamlined animation rendering and added life to the gameplay.

---
This project was not just about recreating a game but also about exploring the intricacies of game development. From solving technical challenges to enhancing player experience, MiniMilitia (Web Version) is a passion project that combines nostalgia with innovation.
`,
    link: "https://mini-militia.kaushikshahare.com",
    gitHub: "https://github.com/Kaushik-Shahare/2dGame-MiniMilitiaWeb",
    photos: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/2dGame-MiniMilitiaWeb/refs/heads/main/Images%26Videos/Demo.png",
      "https://raw.githubusercontent.com/Kaushik-Shahare/2dGame-MiniMilitiaWeb/refs/heads/main/Images%26Videos/DiedScreen.png",
    ],
    video: [
      "https://raw.githubusercontent.com/Kaushik-Shahare/2dGame-MiniMilitiaWeb/refs/heads/main/Images%26Videos/Minimilitia-DocVid.mp4",
    ],
    techStack: [
      "JavaScript",
      "HTML5 Canvas (2D)",
      "React",
      "Node",
      "WebSocket",
    ],
    libraries: ["Express.js", "Sprite-based animations"],
    additionalInfo: `
This project was developed to recreate the popular mobile game MiniMilitia on the web, offering a nostalgic gaming experience.

## Future Enhancements
- Implementing additional maps and game modes.
- Enhancing character customization options.
- Adding sound effects and background music.
- Optimizing gameplay for mobile devices.
`,
  },
  {
  id: 8,
  title: "MedAudit",
  shortDescription:
    "AI-powered multi-agent system for smart hospital operations and insurance claim optimization.",
  detailedDescription:
    "Developed during a 36-hour hackathon organized by OnMySite HealthCare at Parul University, CodeBlue – MedAudit is an AI-driven system designed to optimize hospital workflows and minimize insurance claim rejections. Built by Team CodeBlue, the platform uses NFC for secure patient identification and a LangGraph-based multi-agent architecture to parse, validate, and auto-correct insurance documents using Electronic Health Records (EHR). It significantly reduces manual workload, accelerates OPD processes, and improves patient satisfaction by enabling faster and more accurate claim submissions.",
  link: "https://github.com/Kaushik-Shahare/MedAudit",
  gitHub: "https://github.com/Kaushik-Shahare/MedAudit",
  photos: [
    "https://raw.githubusercontent.com/Kaushik-Shahare/MedAudit/refs/heads/main/ImagesAndVideos/Multi-AgentFlow.jpeg"
  ],
  techStack: ["Python", "Django", "LangGraph", "PostgreSQL", "NFC"],
  libraries: ["LangGraph", "OpenAI", "Pandas", "NumPy", "Django REST Framework", "pdfplumber"],
  additionalInfo:
    "Won 2nd Runner-Up (3rd place) among teams from various colleges across India. The system automates EHR validation, reduces denial risks, and saves hospitals over 1,900 hours per month by streamlining insurance processing and OPD check-ins."
}
];

export default projects;
