# 🎲 Next Dice Game

A modern dice guessing game built with Next.js, React, TypeScript, and Material-UI. Test your luck by predicting whether a random number will be above or below your chosen threshold!

## 🎮 How to Play

1. **Set Your Threshold**: Use the slider to choose a number between 1-99
2. **Make Your Prediction**: Select "Under" or "Over" to predict if the dice result will be below or above your threshold
3. **Roll the Dice**: Click the "Play" button to generate a random number (1-100)
4. **Check Results**: See if you won or lost based on your prediction
5. **Track Your History**: View your last 10 games in the history table

### 🏆 Winning Conditions

- **Under**: You win if the dice result is **less than** your threshold
- **Over**: You win if the dice result is **greater than** your threshold

## ✨ Features

- 🎯 **Interactive Threshold Selection**: Smooth slider input (1-99 range)
- 🔄 **Under/Over Betting**: Radio button selection for prediction type
- 🎲 **Random Number Generation**: Fair dice rolls from 1-100
- 🚨 **Visual Feedback**: Success/error alerts with detailed messages
- 📊 **Game History**: Tracks your last 10 games with timestamps
- ⏱️ **Smart Alert Management**: Proper timeout handling for multiple rapid clicks
- 🎨 **Modern UI**: Beautiful Material-UI components with responsive design

## 🏗️ Project Structure

```
next-dice/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Alert.tsx          # Success/error alert component
│       │   ├── GameOptions.tsx    # Game controls (slider, radio, play button)
│       │   ├── ResultField.tsx    # Large dice result display
│       │   ├── ResultsHistory.tsx # Game history table
│       │   ├── types.ts           # TypeScript interfaces
│       │   └── index.ts           # Component exports
│       ├── globals.css            # Global styles
│       ├── layout.tsx             # Root layout component
│       └── page.tsx               # Main game page with logic
├── public/                        # Static assets
├── .github/workflows/deploy.yml   # GitHub Actions deployment
├── constants.ts                   # Game constants and messages
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
└── eslint.config.mjs             # ESLint configuration
```

### 📁 Component Details

- **`Alert.tsx`**: Displays win/loss messages with proper styling
- **`GameOptions.tsx`**: Contains the threshold slider, Under/Over radio buttons, and Play button
- **`ResultField.tsx`**: Shows the current dice result in large, prominent display
- **`ResultsHistory.tsx`**: Table showing game history with time, guess, and results
- **`types.ts`**: TypeScript definitions for game data structures

## 🛠️ Technologies Used

- **[Next.js 15.4.3](https://nextjs.org/)** - React framework with server-side rendering
- **[React 19.1.0](https://reactjs.org/)** - UI library for building components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Material-UI 7.2.0](https://mui.com/)** - React component library
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling solution

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next-dice
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### 🔧 Setup Instructions

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select **GitHub Actions**

3. **Configure for subdirectory deployment (if needed)**
   If deploying to `username.github.io/repository-name`, uncomment these lines in `next.config.ts`:

   ```typescript
   basePath: '/next-dice',
   assetPrefix: '/next-dice/',
   ```

4. **Automatic Deployment**
   - Every push to `main` branch triggers automatic deployment
   - View deployment status in the **Actions** tab
   - Site will be available at `https://username.github.io/repository-name`

### 📋 Deployment Features

- ✅ **Automatic builds** on every push to main
- ✅ **Static site generation** optimized for GitHub Pages
- ✅ **Asset optimization** with unoptimized images for static export
- ✅ **Trailing slash handling** for proper routing
- ✅ **Jekyll bypass** with `.nojekyll` file

## 🎯 Game Logic

The game implements the following core logic:

1. **Random Generation**: Uses `Math.floor(Math.random() * 100) + 1` for fair 1-100 results
2. **Win Condition**: `isWin = isUnder ? result < threshold : result > threshold`
3. **History Management**: Maintains last 10 games using array slicing
4. **Alert Timing**: Uses `useRef` for proper timeout management to prevent premature clearing

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop and mobile devices
- **Loading States**: Play button shows loading state during game execution
- **Color-Coded Results**: Green for wins, red for losses in history table
- **Smooth Animations**: Material-UI transitions and hover effects
- **Accessible Controls**: Proper ARIA labels and keyboard navigation

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
