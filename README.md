# alx-project-0x00-setup

React Genesis: Mastering Next.js Setup
Project Description
This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js. The application mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components, while emphasizing best practices in front-end development.

Learning Objectives
By completing this project, you will:

Understand how to scaffold a Next.js project with TypeScript
Learn Next.js folder structure and organization best practices
Implement basic routing in Next.js (Pages Router)
Create reusable React components with TypeScript
Work with TypeScript interfaces for component props
Manage assets and static files in Next.js
Develop an understanding of component composition
Implement responsive design with Tailwind CSS
Set up and configure ESLint for code quality
Requirements
Node.js (v16 or later)
npm or yarn
Visual Studio Code (or any preferred IDE)
Next.js v13+
TypeScript
Tailwind CSS
ESLint
Best Practices
Project Structure:

Components are organized in a dedicated components directory
TypeScript interfaces are centralized in an interfaces directory
Pages follow Next.js convention in the pages directory
Component Design:

Components are typed with TypeScript interfaces
Reusable components accept props for customization
Components are modular and focused on single responsibilities
Code Quality:

ESLint is configured for code consistency
TypeScript provides type safety
Arrow function syntax is used consistently
Styling:

Tailwind CSS is used for utility-first styling
Responsive design principles are applied
Consistent spacing and typography scales
Performance:

Next.js Image component is used for optimized images
Code splitting is handled automatically by Next.js
Only necessary dependencies are included
Absolutely! Here’s a clearer and more polished version of your note, rewritten to sound more encouraging and professional while preserving its core message:

⚠️ Note:
While copying and pasting code may seem quick and convenient, it often hinders true understanding. To get the most out of this learning experience, we strongly recommend that you:

Carefully read and understand the instructions for each task.
Type the code yourself to internalize the logic and structure.
Experiment and test your code to see how it works in practice.

Tasks:
0. Scaffolding a project
mandatory
Objective: You will understand the essence of creating a project using cli-tools like npx, coupled with create-next-app. There are multiple ways you can create a project using the create-next-app cli-tool.

The first approach will be to use the command npx create-next-app@latest This option will provide you with multiple prompts to help set up your initial project
The next approach is to be familiar with the [options] ahead of creating the project. This is the option we will be using.
Instructions:

Start a new visual studio code (vscode instance), open the terminal using the Terminal -> New Terminal
Navigate to your project directory
Run the command npx create-next-app@latest alx-project-0x00 –typescript
Select Yes for the following option [Eslint, Tailwind CSS, import alias]
Select No for /src directory and App Router
Start your application using the command npm run dev -- -p 3000