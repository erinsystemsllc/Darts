# Project Guide

## Project Structure

This is a React application with the following structure:

```
src/
  components/
    - Reusable UI components
  App.js - Main application component
  App.css - Main application styles
  index.js - Application entry point
  index.css - Global styles
```

## Conventions

- Use functional components with hooks
- Component files should be in PascalCase (e.g., `Toolbar.js`)
- Each component should have its own CSS file
- Import CSS files in the component files
- Use semantic HTML elements
- Follow React best practices for state management
- Use modern ES6+ syntax

## Styling Guidelines

- Use CSS modules or regular CSS files
- Follow BEM naming convention for CSS classes
- Use flexbox for layouts
- Maintain consistent spacing and typography
- Use CSS custom properties for theming

## Component Structure

- Each component should be self-contained
- Export components as default exports
- Include PropTypes for type checking when needed
- Keep components focused on single responsibility

## Current App Structure

The main App component serves as the root component and should contain the primary layout structure including navigation, main content area, and any global UI elements like toolbars.