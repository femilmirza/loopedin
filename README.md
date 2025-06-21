# LoopedIn Marketplace

LoopedIn is a minimal thrift marketplace application built with React and Vite, allowing users to buy and sell items such as books and lab coats. The application features a clean and responsive design using Tailwind CSS.

## Features

- User-friendly interface for browsing and posting items.
- Item cards displaying title, description, and price.
- Navigation bar for easy access to different sections of the app.
- Firebase integration for backend services (authentication, database).

## Project Structure

```
LoopedIn
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── ItemCard.jsx
│   │   └── PostForm.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── PostItem.jsx
│   ├── firebase
│   │   └── config.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

To get started with LoopedIn, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/LoopedIn.git
   ```

2. **Navigate to the project directory:**
   ```
   cd LoopedIn
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Set up Firebase:**
   - Create a Firebase project and add your configuration in `src/firebase/config.js`.

5. **Run the application:**
   ```
   npm run dev
   ```

6. **Open your browser:**
   - Visit `http://localhost:3000` to view the app.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.