
---

# 🎲 Dice Game  

A simple and engaging dice game where players guess the outcome of a dice roll. Earn points for correct guesses and lose points for incorrect ones!  

## 🚀 Features  
- **Interactive Gameplay**: Guess a number and roll the dice to win points.  
- **Responsive Design**: Optimized for all screen sizes.  
- **Sliding Rules Panel**: View game instructions with a smooth sliding animation.  
- **Dynamic Dice Roll Animation**: Watch the dice spin before revealing the result.  
- **Score Management**: Reset the score anytime during gameplay.  

## 🛠️ Tech Stack  
- **Frontend**: React, Styled-Components  
- **Language**: TypeScript  

## 📋 How to Play  
1. Select a number from the available options.  
2. Click on the dice to roll it.  
3. If your selected number matches the dice outcome, you gain points equal to the dice number.  
4. If the guess is incorrect, 2 points are deducted from your score.  
5. Reset your score anytime by clicking the "Reset" button.  

## 🖥️ Local Setup  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/Peliah/dice-game.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd dice-game  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Start the development server:  
   ```bash  
   npm run dev  
   ```  

5. Open your browser and visit:  
   ```
   http://localhost:5173  
   ```  

## 📂 Project Structure  

```
src  
├── components  
│   ├── Hero.tsx            # Landing page with "Play Now" button  
│   ├── RollDice.tsx        # Dice rolling logic and animation  
│   ├── StartGame.tsx  # Sliding rules panel  
├── styles  
│   ├── Button.ts     # Global CSS styling  
└── App.tsx                 # Main app component  
```  

## 🎨 Styling  
The app uses `styled-components` for CSS-in-JS styling, ensuring scoped and reusable styles.  

## 🏗️ Planned Improvements  
- Add multiplayer support for competitive gameplay.  
- Introduce a leaderboard to track high scores.  
- Add custom themes and settings for a personalized experience.  

## 👨‍💻 Contributing  

Contributions are welcome! Follow these steps:  
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Make your changes and commit: `git commit -m "Add new feature"`.  
4. Push to your forked repository: `git push origin feature-name`.  
5. Create a pull request.  

## 📜 License  
This project is licensed under the MIT License.  

---

Happy rolling! 🎉  