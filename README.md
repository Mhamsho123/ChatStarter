Chatstarter

A real-time chat application inspired by Discord, built using Next.js, Clerk, and Convex.

Table of Contents

About the Project
Features
Getting Started
Prerequisites
Installation
Running the App
Technologies Used
Contributing
License
Contact
About the Project

Chatstarter is a clone of the popular chat application, Discord. It aims to replicate key features such as real-time messaging, user authentication, and responsive UI. The app is built using modern web technologies, including Next.js for server-side rendering, Clerk for user authentication, and Convex for real-time data handling.

Features

Real-time messaging in channels
User authentication with Clerk
Integration with Convex for real-time data management
Responsive design suitable for desktop and mobile devices
Dark and light mode themes
Getting Started

Follow these instructions to get a local copy of the project up and running.

Prerequisites
Make sure you have the following installed:

Node.js (version 18 or above)
pnpm (recommended)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/mhamsho123/Chatstarter.git
cd Chatstarter
Install dependencies:
bash
Copy code
pnpm install
Set Up Environment Variables:
You'll need to set up environment variables for Clerk and Convex. Contact the repository maintainer for the required keys or follow the setup instructions on the Clerk and Convex documentation.
Running the App
Start the development server:

bash
Copy code
pnpm run dev
Open http://localhost:3000 in your browser to see the application running.

Technologies Used

Next.js - A React framework for server-side rendering and static site generation.
Clerk - User management and authentication.
Convex - Real-time backend and database.
Tailwind CSS - Utility-first CSS framework for styling.
TypeScript - Typed JavaScript for better developer experience.
Contributing

Contributions are what make the open-source community a great place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License

Distributed under the MIT License. See LICENSE for more information.

Contact

Mohamad Hamsho - hamsho1030@gmail.com

Project Link: https://github.com/mhamsho123/Chatstarter

Additional Steps to Keep .env Files Private:
Update .gitignore: Make sure your .gitignore file includes the following line to prevent .env files from being tracked by Git:
bash
Copy code
.env
.env.local
Verify .env Files Are Not Tracked: If .env files are already being tracked by Git, you’ll need to untrack them:
bash
Copy code
git rm --cached .env.local
Commit the Changes: After making the changes to your .gitignore and README.md, commit the updates:
bash
Copy code
git add .
git commit -m "Update README and ignore .env files"
