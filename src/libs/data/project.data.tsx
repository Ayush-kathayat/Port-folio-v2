export type Projects = {
  title: string
  description: string
  github?: string
  liveDemo?: string
}

export const projectsData: Projects[] = [
  {
    title: 'SECURE CHAT: Blockchain Web Chat App',
    description:
      'A blockchain web chat app prioritizing privacy. Built with React, TypeScript, Hardhat, and Solidity, it revolutionizes secure communication. Solidity ensures robust encryption, while Hardhat streamlines development. Together, they set new standards for privacy-focused digital applications.',
    github: 'https://github.com/Ayush-kathayat/SecureChat',
    liveDemo: 'https://cryptic-chat.netlify.app/',
  },
  {
    title: 'The Bridge: Cross-Chain NFT Transfer',
    description:
      'Showcase seamless transfer of NFTs between blockchain networks. Initially on Ethereum, bridged to Polygon using FXPortal. Demonstrates cross-chain interoperability, unlocking new possibilities for DeFi, gaming, and digital collectibles.',
    github: 'https://github.com/Ayush-kathayat/The_Bridge',
  },
  {
    title: 'Task Flows: Full-Stack Task Management App',
    description:
      'MERN stack app for todo lists. Features robust user authentication. Users can create, track, and prioritize tasks with subtask functionality. Simplifies task management, enhancing productivity and efficiency.',
    github: 'https://github.com/Ayush-kathayat/todo-v2',
    liveDemo: 'https://task-flows.onrender.com/',
  },
  {
    title: 'Calculator : Data Structures & Algorithms',
    description:
      'Powerful calculator with support for parentheses, precedence, and various mathematical operators. Efficiently evaluates complex expressions. Ideal for students, professionals, and enthusiasts seeking reliable results.',
    github: 'https://github.com/Ayush-kathayat/Calculator_web',
    liveDemo: 'https://neo-nator.netlify.app/',
  },
  {
    title: 'To-Do App: v1.0',
    description:
      'User-friendly app for task management accessible from any browser. Offers seamless task creation, organization, and tracking. Clean design ensures optimal usability across devices.',
    github: 'https://github.com/Ayush-kathayat/to-do-list',
    liveDemo: 'https://ayush-kathayat.github.io/to-do-list/',
  },
  {
    title: 'Tic Tac Toe: Single-Player Web Game',
    description:
      'Single-player web game with varying difficulty levels. Enjoy timeless gameplay against a computer opponent. Responsive design and smooth mechanics for nostalgic fun. Perfect for solo gaming sessions.',
    github: 'https://github.com/Ayush-kathayat/Tic-Taco-Toes',
    liveDemo: 'https://tick-taco-toes.netlify.app/',
  },
]
