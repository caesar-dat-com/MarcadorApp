# MarcadorApp 🍎

An elegant, Apple-inspired Progressive Web App (PWA) for managing sports matches, player profiles, and court reservations.

## Features

### 💎 Liquid Glass Design
-   **Premium Aesthetic**: Utilizes high-transparency blur effects, mesh gradients, and hairline borders ensuring a native iOS feel.
-   **Dark Glass Theme**: Optimized for contrast and readability on all devices, with safety fallbacks for asset loading failures.
-   **Fluid Animations**: Smooth transitions and touch feedback.

### 🏠 Match Play (Marcador)
-   **Score Tracking**: Gestural interface to track scores for Player 1 & 2.
-   **Haptic Feedback**: Satisfying vibration feedback on every interaction.
-   **History Saving**: Persists match results locally.

### 👤 Profile (Perfil)
-   **Gamer Card**: Displays your Avatar, Rank (e.g., Diamond II), and Level.
-   **Stats Tracking**: Visualizes Wins, Matches Played, and Win Rate inspired by Apple Fitness rings.

### 📅 Booking System (Reservas)
-   **Active Courts**: View real-time (mocked) status of courts.
-   **Player Finder**: See exactly how many players are missing for a match (e.g., "FALTAN 2").
-   **Reservations**: Create new bookings instantly.
-   **Challenge Mode**: "Retar" (Challenge) existing teams directly from the list.

## Tech Stack
-   **React + React Router**: Web UI with client-side navigation.
-   **Vite**: Development server and production bundler.
-   **Vite PWA**: Manifest + service worker generation.
-   **LocalStorage**: Local data persistence.
-   **TypeScript**: Type safety for data models.

## How to Run (Web)

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Dev Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

4.  **Preview the Production Build**:
    ```bash
    npm run preview
    ```

## PWA Install
-   Open the app in a supported mobile browser (Chrome, Edge, Safari).
-   Use **"Add to Home Screen"** or **"Install app"** to install.

## Asset Credits
-   **Mesh Gradient**: Custom generated "Apple Style" wallpaper.
-   **Icons**: Standard emoji text for lightweight implementation.
