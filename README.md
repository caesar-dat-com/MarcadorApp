# MarcadorApp 🍎

An elegant, Apple-inspired React Native application for managing sports matches, player profiles, and court reservations.

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
-   **React Native**: Core framework.
-   **React Navigation**: Tab-based navigation system.
-   **AsyncStorage**: Local data persistence.
-   **TypeScript**: Type safety for data models.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Metro Bundler**:
    ```bash
    npm start
    ```

3.  **Run on Android**:
    ```bash
    npm run android
    ```
    *Note: Ensure you have an Android Emulator running (e.g., `emulator -avd Medium_Phone_API_36.1`).*

## Asset Credits
-   **Mesh Gradient**: Custom generated "Apple Style" wallpaper.
-   **Icons**: Standard emoji text for lightweight implementation.
