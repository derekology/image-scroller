# Simple Image Scoller

This is a React-based web application that allows you to scroll through images from the JSONPlaceholder API and randomly shuffle their order. The app is designed to provide a simple to view a collection of images.

Features:

- Image Scrolling: Scroll horizontally by swiping or using your mouse wheel.
- Shuffle Button: Click the "Shuffle" button to randomize the order of displayed images.
- Switch between an array of 50 and 5,000 images.
- Image URLs are cached.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/derekology/image-scroller.git
   cd image-scroller
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Project Structure

```
 ┣ public
 ┃ ┗ favicon.ico
 ┣ src
 ┃ ┣ components
 ┃ ┃ ┣ ArraySwitcher
 ┃ ┃ ┃ ┣ ArraySwitcher.module.css         // styling for array switcher component
 ┃ ┃ ┃ ┗ ArraySwitcher.tsx                // array switcher component source code
 ┃ ┃ ┣ ImageScroller
 ┃ ┃ ┃ ┣ ImageScroller.module.css         // styling for the image scroller component
 ┃ ┃ ┃ ┗ ImageScroller.tsx                // image scroller component source code
 ┃ ┃ ┣ LoadingSpinner
 ┃ ┃ ┃ ┣ LoadingSpinner.module.css        // styling for loading spinner component
 ┃ ┃ ┃ ┗ LoadingSpinner.tsx               // loading spinner component source code
 ┃ ┃ ┗ ShuffleButton
 ┃ ┃ ┃ ┣ ShuffleButton.module.css         // styling for the shuffle button component
 ┃ ┃ ┃ ┗ ShuffleButton.tsx                // shuffle button component source code
 ┃ ┣ utils
 ┃ ┃ ┗ helperFunctions.tsx                // helper functions imported into app.tsx
 ┃ ┃ ┗ interfaces.tsx                     // typescript interfaces and types
 ┃ ┣ App.module.css                       // styling for main application sections
 ┃ ┣ App.tsx                              // main application component
 ┃ ┣ index.css                            // global application styling
 ┃ ┣ main.tsx                             // app's root component and entry point
 ┃ ┗ vite-env.d.ts
 ┣ .eslintrc.cjs
 ┣ .gitignore
 ┣ index.html                             // html entry point for the app
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┣ tsconfig.json
 ┣ tsconfig.node.json
 ┗ vite.config.ts
```
