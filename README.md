# Divyansh Singh — Personal Portfolio

A responsive, single-page portfolio website for Divyansh Singh, an Integrated M.Tech AI student at VIT Bhopal University.

## Features

- Dark-first visual design with blue and purple gradients
- Responsive navigation with a mobile menu
- Smooth scrolling and active section highlighting
- Dark/light theme toggle with `localStorage` persistence
- About, skills, selected projects, and contact sections
- CSS-only project illustrations with no image or framework dependencies
- Safe resume button that does not point to a made-up file
- Semantic HTML, accessible labels, responsive layout, and hover states

## Skills shown

C++, Java, JavaScript, HTML, CSS, SQL, Python, and Machine Learning.

## Run locally

No installation or build step is required:

1. Open `index.html` directly in a modern browser.
2. Or serve the folder with any simple static server if you prefer:

   ```text
   python -m http.server
   ```

3. Visit `http://localhost:8000`.

The site uses Google Fonts when online and falls back to system fonts if the font request is unavailable.

## Personalize

- Replace the GitHub and LinkedIn URLs in `index.html` with your exact profile URLs.
- Replace the email address in the contact section.
- When you have a real resume PDF, add it to this folder as `resume.pdf` and change the resume button to an anchor with `href="resume.pdf"` and the `download` attribute.
- Update project descriptions or add project URLs as the projects become public.

## Files

- `index.html` — semantic page structure and content
- `style.css` — theme, layout, responsive styles, and illustrations
- `script.js` — theme persistence, navigation behavior, active links, and resume guidance
