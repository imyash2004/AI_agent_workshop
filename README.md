# AI Agents Learning Platform

An interactive React-based learning platform for teaching students about AI Agents. This application provides a structured, navigable interface for exploring the anatomy and concepts of AI agents.

## Features

- **Interactive Table of Contents**: Browse through all topics and subtopics with a clean, intuitive interface
- **Seamless Navigation**: Next/Previous buttons with progress tracking
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful UI**: Modern glass-morphism design with smooth animations
- **Structured Content**: Organized learning material with examples and detailed explanations

## Project Structure

```
src/
├── components/
│   ├── TableOfContents.js      # Main navigation component
│   ├── TableOfContents.css     # TOC styling
│   ├── ContentViewer.js        # Content display component
│   ├── ContentViewer.css       # Content styling
│   ├── Navigation.js           # Next/Previous navigation
│   └── Navigation.css          # Navigation styling
├── data/
│   └── contentData.js          # All learning content and structure
├── App.js                      # Main application component
├── App.css                     # Global application styles
└── index.js                    # Application entry point
```

## Content Structure

The platform covers 8 main sections:

1. **What Makes an Agent 'Agentic'?** (7 minutes)
2. **Why Agents Over Traditional LLMs?** (6 minutes)
3. **Agent Application Domains** (5 minutes)
4. **Agents vs Workflows: Architectural Distinctions** (6 minutes)
5. **Core Agent Architecture Components** (10 minutes)
6. **Agent Control Loop Mechanics** (6 minutes)
7. **Agent Taxonomy & System Types** (4 minutes)
8. **Practical Implementation Frameworks** (3 minutes)

Each section contains multiple subsections with detailed content, examples, and practical insights.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd agent
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Browse Topics**: Start with the Table of Contents to see all available topics
2. **Navigate Content**: Click on any topic or subtopic to view detailed content
3. **Sequential Learning**: Use Next/Previous buttons to move through content in order
4. **Track Progress**: The progress bar shows your current position in the course
5. **Return to TOC**: Click the "Table of Contents" button to return to the main menu

## Customization

### Adding New Content

1. Edit `src/data/contentData.js` to add new sections or subsections
2. Follow the existing structure for consistency
3. The content viewer will automatically render the new content

### Styling Changes

- Global styles: Edit `src/App.css`
- Table of Contents: Edit `src/components/TableOfContents.css`
- Content display: Edit `src/components/ContentViewer.css`
- Navigation: Edit `src/components/Navigation.css`

## Educational Use

This platform is designed for:

- **Classroom Teaching**: Instructors can guide students through AI agent concepts
- **Self-Paced Learning**: Students can explore content at their own pace
- **Workshop Sessions**: Interactive sessions on AI agent development
- **Reference Material**: Quick access to specific concepts and examples

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Advanced styling with gradients, backdrop-filter, and animations
- **Responsive Design**: Mobile-first approach with media queries
- **Modern JavaScript**: ES6+ features and clean code practices

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

---

**Built with ❤️ for AI education**

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
