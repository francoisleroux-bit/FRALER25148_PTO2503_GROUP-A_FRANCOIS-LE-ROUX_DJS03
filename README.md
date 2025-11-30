# DJS03: React Podcast Landing Page

## Overview

In this project, you will build the landing page for a podcast discovery app using **React**. Your goal is to fetch podcast data from an external API and dynamically render a **responsive grid of podcast previews**. This project focuses on **data fetching**, **component structure**, **rendering logic**, and **layout styling**.

---

## Core Objectives

- Fetch podcast data from an API: https://podcast-api.netlify.app/ on initial page load.
- Display a loading indicator while data is being fetched, and handle errors or empty results with a clear user message.
- Render a responsive **grid layout** of podcast previews using modular, reusable React components.
- Pass podcast data into components via props and render each podcast card with the following:
  - Podcast **image**
  - Podcast **title**
  - Number of **seasons**
  - Associated **genre names**
  - Formatted **last updated** date (e.g., "2 days ago")
- Apply clean, consistent layout and styling across different screen sizes using CSS Grid or Flexbox.
- Maintain high-quality, readable code with clear structure and **JSDoc comments** for key functions and components.

---

## Technical Requirements

- Use **React functional components**
- Use the **Fetch API**
- Use `useEffect()` to fetch data once on mount
- Use `useState()` to manage podcast data
- Use `.map()` to dynamically render PodcastPreviewCard components
- Format dates using `date-fns` or a custom formatter

---

## Responsiveness Requirements

- Must look good on:
  - Desktop (≥1200px)
  - Tablet (~768px)
  - Mobile (~375px)
- Use **CSS Grid** or **Flexbox**
- Media queries or frameworks like **Tailwind CSS** are allowed

---

## Deliverables

- **Functional React Application**

  - A working React app that fetches podcast data from an external API on initial load.
  - The app renders a grid of podcast previews using reusable components.

- **Loading, Error, and Empty States**

  - A clear loading indicator is displayed while fetching data.
  - Meaningful error or empty state messaging is shown if the fetch fails or returns no results.

- **Podcast Preview Card Component**

  - A reusable component that displays:
    - Podcast image
    - Podcast title
    - Number of seasons
    - Genre tags
    - Last updated date in a human-readable format (e.g., "3 days ago")

- **Responsive Layout**

  - Grid layout that adapts to mobile, tablet, and desktop screen sizes using responsive design principles.

- **Codebase**
  - Clean, modular code with clearly separated components.
  - All major functions and modules documented with **JSDoc** comments.
  - Consistent formatting across JavaScript, JSX, HTML, and CSS files.
