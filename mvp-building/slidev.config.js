// Slidev configuration
export default {
  // Include custom CSS for code block wrapping
  css: [
    './style.css'
  ],
  
  // Other default configurations
  theme: 'default',
  
  // Optional: Configure highlighting and other features
  highlighter: 'shiki',
  
  // Ensure proper rendering of code blocks
  markdown: {
    codeTransformers: []
  },

  // Force relative asset paths for GitHub Pages subpath deployments
  vite: {
    base: './',
  }
}
