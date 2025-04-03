# Trading Studio

A modern, frontend-only trading strategy builder built with Next.js, React 19, Tailwind CSS, and ShadCN. Design, test, and track your trading strategies in a sleek, single-page interface.

---

## Overview

Trading Studio is a web application that allows users to create custom trading strategies using an intuitive rule-based interface. Strategies can be saved as drafts or submitted for simulation, with real-time status updates displayed alongside the creation form. Built with a focus on usability and modern web technologies, this project demonstrates a polished UI, type-safe TypeScript code, and React 19’s cutting-edge Form Actions.

---

## Features

- **Single-Page Strategy Builder**: Create strategies and see the list update instantly—no page reloads required.
- **Intuitive Rule Builder**: Define scanner, buy, sell, and simulation rules with dropdowns and inputs, validated for completeness.
- **Real-Time Status Tracking**: Watch strategies transition from "draft" to "submitted" to "completed" with simulated delays.
- **Landing Page**: A welcoming entry point with catchy taglines, features, fake contact info, and FAQs for a professional touch.
- **Responsive Design**: Desktop-first layout with Tailwind CSS, enhanced by ShadCN components for a modern look.
- **Persistent Storage**: Strategies are saved to `localStorage` for persistence across sessions.
- **Form Actions (React 19)**: Leverages React 19’s new Form Actions for streamlined form handling and automatic resets.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
  
2. **Install Dependencies**:
   ```bash
   cd trading-studio
   npm install
   npm run dev

## Dependencies

- Next.js: Framework for routing and rendering (Canary version for React 19 support).
- React 19: Core library with Form Actions for modern form handling.
- Tailwind CSS: Utility-first CSS framework for styling.
- ShadCN: Pre-built components styled with Tailwind CSS.
- TypeScript: Static typing for robust code.


---


## Design Choices

- Next.js App Router: Used for modern routing and layout management.
- React 19 Form Actions: Adopted for cleaner form submission and reset behavior, showcasing cutting-edge React features.
- Single-Page Design: Integrated strategy creation and listing on /strategies for a seamless user experience.
- Tailwind + ShadCN: Chosen for rapid, consistent styling with a professional look.
- Local Storage: Simulates persistence without a backend, per assignment constraints.
- TypeScript: Ensures type safety, especially for the complex Strategy and Rule structures.


---



## Assumptions

- Frontend-Only: No backend or API integration; all data is stored in localStorage.
- Simulation: Status transitions (e.g., "submitted" to "completed") are simulated with a 5-second delay.
- Basic Rules: Supports simple rules without nested conditions (could be extended with more time).
- Desktop-First: Optimized for desktop use as per assignment requirements, with basic responsiveness.


---



## How It Works

- Landing Page (/):
  - Welcomes users with a call-to-action to start creating strategies.
  - Includes fake contact info and FAQs for a polished feel.
- Strategies Page (/strategies):
  - Displays a split layout: a form on the left and a strategy list on the right.
  - Submit a strategy, and it appears in the list instantly (via localStorage updates and polling).
- Strategy Creation:
  - Define a name and rules for scanner, buy, sell, and simulation steps.
  - Validate input to prevent empty strategies.
  - Save as "draft" or submit for "simulation" with automatic form reset.
- Potential Improvements
  - Real Backend: Replace localStorage with an API for true persistence and simulation.
  - Advanced Rules: Add support for nested conditions (e.g., AND/OR logic).
  - Global State: Use Redux or Context for state management instead of polling localStorage.
  - Mobile Optimization: Enhance responsiveness for smaller screens.