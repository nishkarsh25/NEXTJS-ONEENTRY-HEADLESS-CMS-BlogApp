# NEXTJS-ONEENTRY-HEADLESS-CMS-BlogApp

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

Welcome to the **Blog App**, a Next.js TypeScript application powered by App Router and designed to fetch and display blog articles from an external API. This project demonstrates how to build dynamic, server-side rendered web applications with Next.js while leveraging TypeScript for type safety and clarity in development.


## Features

- **Dynamic Routing**: Utilizes Next.js 14 and its built-in routing system to dynamically render pages based on blog content fetched from the API.
- **External API Integration**: Interacts with an external API using `oneentry` to fetch blog articles, ensuring up-to-date content display.
- **TypeScript Integration**: Strongly-typed JavaScript with TypeScript ensures code integrity and enhances developer productivity.
- **Responsive Design**: Utilizes Tailwind CSS for responsive, mobile-first styling, ensuring a consistent user experience across devices.
- **SEO Optimization**: Next.js SSR capabilities enable server-side rendering for SEO-friendly content and performance benefits.



## Live Demo

You can try out the live demo of the app [here](https://nextjs-shadcndarkmode.onrender.com).

## Folder Structure

```
.
├── components
│   ├── ToggleMode.tsx
│   ├── Nav.tsx
│   └── ThemeProvider.tsx
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
├── public
│   ├── ...
├── styles
│   ├── ...
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── ...

```



## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS-ONEENTRY-HEADLESS-CMS-BlogApp/blob/master/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used

- **Next.js 14**: React framework with server-side rendering and routing capabilities.
- **TypeScript**: Adds static typing to JavaScript for improved developer experience and code quality.
- **App Router**: Next.js's built-in routing system for handling client-side navigation and dynamic routing.
- **oneentry**: API client for interacting with external data sources, used here for fetching blog content.
- **Tailwind CSS**: Utility-first CSS framework for styling components, providing a scalable and maintainable CSS solution.
- **ESLint & Prettier**: Tools for code linting and formatting, ensuring consistent code style and catching potential errors.
- **GitHub Actions**: Implements continuous integration for automated testing and deployment workflows.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS-ONEENTRY-HEADLESS-CMS-BlogApp.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Endpoints

### External API

The Blog App interacts with an external API to fetch and display blog content. Below are the endpoints used in this project:

- **Fetch Pages (GET)**:
  - **Endpoint**: `https://api.example.com/pages`
  - **Description**: Retrieves a list of pages available in the blog application.
  - **Usage**: Used to populate navigation links in the Navbar component.

- **Fetch Articles (GET)**:
  - **Endpoint**: `https://api.example.com/articles`
  - **Description**: Retrieves a list of blog articles with details such as title, summary, and thumbnail.
  - **Usage**: Displays recent articles on the homepage (`/`) and lists individual articles on their respective details page (`/blog/{id}`).

- **Fetch Article by ID (GET)**:
  - **Endpoint**: `https://api.example.com/articles/{id}`
  - **Description**: Retrieves detailed information about a specific blog article based on its unique identifier.
  - **Usage**: Fetches content for the individual article details page (`/blog/{id}`) when a user clicks on an article link.

### Internal API

The Blog App also includes internal API endpoints for managing form submissions and other application-specific functionalities.

- **Submit Contact Form (POST)**:
  - **Endpoint**: `http://localhost:3000/api/contactus`
  - **Description**: Allows users to submit their contact information (name, email, number) for inquiries or feedback.
  - **Usage**: Handled by the FormDialog component to send data to the server and trigger necessary actions.

These endpoints are essential for the functionality of the Blog App, enabling data retrieval from an external source and facilitating user interactions within the application. Ensure proper configuration of environment variables and API integration for seamless operation of these endpoints.


## How to Use

### View the application:

1. **Open your web browser and navigate to `http://localhost:3000`.**
   - This will load the homepage of the Blog App, where you can browse through a list of blog articles.

2. **Homepage (`/`):**
   - On the homepage, you will find a list of blog articles fetched from the external API. Each article typically displays a title, summary, and thumbnail.

3. **View Article Details (`/blog/{id}`):**
   - Click on any article title or thumbnail to navigate to its details page. Replace `{id}` in the URL with the specific ID of the article you want to view.

### Explore and Modify:

1. **Project Structure:**
   - Explore the project structure within the repository to understand how components, pages, and styles are organized.
   - Key directories include:
     - **`components/`**: Contains reusable React components like Navbar, Footer, Articles, and Article.
     - **`pages/`**: Houses Next.js page components that correspond to different routes (`index.js` for the homepage, `[id].js` for dynamic blog posts, etc.).
     - **`styles/`**: Includes CSS files or styling libraries used throughout the application.

2. **Modify Components, Pages, and Styles:**
   - Customize components (`components/`) to tailor the UI/UX according to your project requirements.
   - Update page components (`pages/`) to add new features, integrate additional APIs, or enhance existing functionality.
   - Adjust styles (`styles/`) using Tailwind CSS classes or your preferred CSS methodology to refine the visual presentation of the application.

3. **Contributing to the Project:**
   - Refer to the README for detailed information on each component and how to contribute to the project.
   - Follow best practices for Git workflows, such as branching, committing changes, and submitting pull requests.
   - Collaborate with other contributors to improve features, fix bugs, or implement new functionalities as per project goals.

4. **Further Documentation:**
   - For more comprehensive guidance, refer to the README.md file and additional documentation provided in the project repository.
   - Ensure to document any changes, updates, or issues encountered during development to maintain project transparency and facilitate seamless collaboration.





## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## Credits

This project uses the following open-source technologies and libraries:

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  
- [Shadcn UI](https://shadcn.dev/): A component library for building user interfaces.
  
- [next-themes](https://github.com/pacocoursey/next-themes): A theme management library for Next.js applications.
  
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  
- [Lucide Icons](https://lucide.dev/): Icon library used for theme toggle icons (Sun and Moon).

- [oneentry](https://oneentry.cloud/instructions): Library for interfacing with external APIs and fetching data.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used for responsive and customizable styling.

Each of these technologies and libraries plays a crucial role in the functionality and design of the Blog App. Please visit their respective websites or repositories to learn more about how they can be used in your projects.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



