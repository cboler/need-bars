# need-bars
Sims-like need bars to visually communicate your needs to others

ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Current State
This is an early-stage repository containing only a README.md file. The project concept is to create visual need bars similar to those in The Sims video game to help people communicate their needs to others.

## Repository Structure
```
.
├── README.md              # Project description
└── .github/              # GitHub configuration
    └── copilot-instructions.md  # This file
```

## Development Not Yet Started
**CRITICAL**: There is no source code, build system, or dependencies yet. When development begins:

1. **Always run these validation steps first:**
   - `ls -la` to check current repository contents
   - Identify the chosen technology stack (likely web-based)
   - Follow technology-specific setup instructions below

## Anticipated Technology Stacks

### If Web Application (HTML/CSS/JavaScript)
When basic web files are added:
- No build system required initially
- Open `index.html` directly in browser for testing
- Use browser developer tools for debugging

### If Node.js/npm Project
When `package.json` is added:
- `node --version` to verify Node.js installation
- `npm --version` to verify npm installation  
- `npm install` to install dependencies - NEVER CANCEL: May take 5-10 minutes
- `npm run dev` or `npm start` to run development server
- `npm test` to run tests (if configured) - NEVER CANCEL: May take 2-5 minutes
- `npm run build` to create production build - NEVER CANCEL: May take 5-15 minutes. Set timeout to 20+ minutes.

### If React Application
When React is detected (package.json contains "react"):
- `npm install` - NEVER CANCEL: Takes 5-10 minutes for initial install. Set timeout to 15+ minutes.
- `npm start` to run development server (usually http://localhost:3000)
- `npm run build` for production build - NEVER CANCEL: Takes 2-10 minutes. Set timeout to 15+ minutes.
- `npm test` to run test suite - NEVER CANCEL: May take 2-5 minutes. Set timeout to 10+ minutes.

### If Vue.js Application
When Vue is detected:
- `npm install` - NEVER CANCEL: Takes 5-10 minutes. Set timeout to 15+ minutes.
- `npm run serve` or `npm run dev` to start development server
- `npm run build` for production build - NEVER CANCEL: Takes 2-10 minutes. Set timeout to 15+ minutes.

### If Python Project
When Python files or `requirements.txt` are added:
- `python3 --version` to verify Python installation
- `pip install -r requirements.txt` - NEVER CANCEL: May take 5-15 minutes. Set timeout to 20+ minutes.
- `python -m pytest` to run tests (if pytest is used) - NEVER CANCEL: May take 2-10 minutes. Set timeout to 15+ minutes.

## Validation Requirements

### Manual Testing Scenarios
When the application becomes functional, ALWAYS test these scenarios after making changes:

1. **Visual Need Bars Display**: Verify that need bars render correctly and show different levels
2. **Interactive Elements**: Test any controls for adjusting need levels
3. **Responsive Design**: Check display on different screen sizes (if web-based)
4. **User Experience**: Navigate through the full user workflow

### Before Committing Changes
Run these commands when they become available:
- Linting: `npm run lint` or equivalent
- Formatting: `npm run format` or `prettier --write .`
- Type checking: `npm run type-check` (if TypeScript)
- Build validation: `npm run build` - NEVER CANCEL: Set timeout to 20+ minutes
- Test suite: `npm test` - NEVER CANCEL: Set timeout to 15+ minutes

## Critical Timing Expectations
- **NEVER CANCEL** any build or test commands
- Initial `npm install`: 5-10 minutes (set timeout to 15+ minutes)
- Build commands: 2-15 minutes depending on complexity (set timeout to 20+ minutes)  
- Test suites: 2-10 minutes (set timeout to 15+ minutes)
- Always wait for commands to complete fully

## Common Tasks

### Repository Status Check
```bash
ls -la
git status
git log --oneline -5
```

### Current Repository Contents
```bash
ls -la
.
..
.git/
.github/
README.md
copilot-instructions.md
```

### README.md Content
```markdown
# need-bars
Sims-like need bars to visually communicate your needs to others
```

## Future Development Guidance

When source code is added:
1. **Always identify the technology stack first** by looking for:
   - `package.json` (Node.js/npm)
   - `index.html` (basic web)
   - `requirements.txt` (Python)
   - Framework-specific files (React, Vue, etc.)

2. **Follow the appropriate technology-specific instructions above**

3. **Create a local development workflow** and test it thoroughly

4. **Update these instructions** with the actual build commands, test procedures, and development workflow once established

5. **Always validate functionality manually** by running the application and testing the core need bars feature

## Technology Decision Pending
Since no code exists yet, these instructions cover multiple potential technology stacks. Once development begins, update this file to focus on the chosen technology and remove irrelevant sections.