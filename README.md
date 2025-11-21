
# Agni Product Website

Welcome to the official repository for the Agni soil scanner's single-page product website. This project showcases Agni, a revolutionary soil-scanning device, through a hyper-realistic, futuristic, and highly animated web experience. The goal is to effectively communicate the device's precision, AI-powered analytics, and its value to modern farming.

## ✨ Main Motive

The core mission of this website is to introduce Agni to the world. It’s designed to be more than just a product page; it's an immersive experience that demonstrates the power and sophistication of Agni. We aim to create a lasting impression of a "lab-grade but for the field" tool that is confident, scientific, and farmer-friendly.

The site is built with a modern web stack and is designed to be immediately runnable, editable, and deployable.

## 🚀 Tech Stack

This project is built with a powerful and modern set of technologies to deliver a high-performance, visually stunning, and interactive experience.

### Frontend

| Category          | Technology                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| **Framework**     | [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))                                       |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                                                          |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/) with `Just-In-Time` compiler                                  |
| **Animation**     | [Framer Motion](https://www.framer.com/motion/), [Lottie](https://lottiefiles.com/)                    |
| **3D**            | [Three.js](https://threejs.org/) (via [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/))    |
| **Charting**      | [Recharts](https://recharts.org/)                                                                      |
| **Mapping**       | [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js) / [Leaflet](https://leafletjs.com/) (TBD)          |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)                             |
| **Data Fetching** | [@tanstack/react-query](https://tanstack.com/query/latest)                                             |
| **Routing**       | [wouter](https://github.com/molefrog/wouter)                                                           |

### Backend

| Category      | Technology                                              |
| ------------- | ------------------------------------------------------- |
| **Framework** | [Express.js](https://expressjs.com/)                    |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)           |
| **Runtime**   | [Node.js](https://nodejs.org/)                          |
| **ORM**       | [Drizzle ORM](https://orm.drizzle.team/)                |
| **Database**  | [Neon](https://neon.tech/) (PostgreSQL)                 |

## 🛠️ Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/AgniProductSite.git
    cd AgniProductSite
    ```

2.  **Install dependencies:**
    This will install both server and client dependencies.
    ```bash
    npm install
    ```

### Running the Application

To run the full-stack application (both frontend and backend) in development mode, use the following command. It will start the client and server concurrently.

```bash
npm run dev:fullstack
```

-   The **React client** will be available at `http://localhost:5173/`
-   The **Express server** will be running on `http://localhost:3000/`

You can also run the client or server separately:

-   **Client only:** `npm run dev:client`
-   **Server only:** `npm run dev:server`

### Building for Production

To create a production build of the frontend application:

```bash
npm run build
```

The optimized static files will be placed in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```

## 📁 Project Structure

The project is organized into a monorepo-like structure with distinct folders for different parts of the application.

```
AgniProductSite/
├── client/         # React frontend application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/ # Reusable React components
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── ...
│   ├── index.html
│   └── ...
├── server/         # Express backend server
│   ├── index.ts
│   └── ...
├── public/         # Static assets shared between client/server
├── shared/         # Shared code (e.g., validation schemas)
├── package.json
└── README.md
```

## ☁️ Deployment

This project is configured for easy deployment on platforms like [Vercel](https://vercel.com/) or [Replit](https://replit.com/). The `vercel.json.bak` file contains deployment configurations for Vercel, which can be used as a starting point.

---

*Agni — intellectual property of Mitti-AI.*
