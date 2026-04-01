# 🚀 Jaydeep Portfolio — Customization Guide

## 📁 File Structure
```
portfolio/
├── index.html     ← All sections & content (edit this)
├── style.css      ← All colors, layout, fonts (edit this)
├── script.js      ← Animations & interactions
├── your-photo.png ← YOUR photo (replace this)
├── hacker.png     ← Hacker illustration (optional)
├── project1.png   ← Your project screenshot 1
├── project2.png   ← Your project screenshot 2
├── project3.png   ← Your project screenshot 3
└── resume.pdf     ← Your resume file
```

---

## ✏️ HOW TO CUSTOMIZE

### 1. YOUR NAME
In `index.html`, search for `Jaydeep` and replace with your name (appears in navbar + footer).

---

### 2. YOUR PHOTO
- Name your photo file `your-photo.png` and place it in the same folder.
- Or change the `src` in the hero section:
  ```html
  <img src="your-photo.png" alt="Jaydeep" class="hero-photo" />
  ```

---

### 3. HERO TEXT
Find this in `index.html` and update:
```html
<h1>Hi, I'm a <span class="purple">web designer</span> and<br>
<span class="purple">front-end developer</span></h1>
<p>I'm currently into dsa, frontend Dev, backend Dev</p>
```

---

### 4. PROJECTS
Each project card looks like this — just duplicate/edit:
```html
<div class="project-card">
  <div class="project-preview">
    <img src="project1.png" alt="My Project" />
    <div class="project-preview-placeholder"><span>Preview Text</span></div>
  </div>
  <div class="project-tags">React  NodeJs  MongoDB</div>
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Short description of what it does.</p>
    <a href="https://your-live-link.com" class="btn-outline-sm">Live &lt;—&gt;</a>
  </div>
</div>
```
- Put your screenshot as `project1.png`, `project2.png`, etc.
- If screenshot file doesn't exist, a placeholder text shows instead.

---

### 5. SKILLS
Add/remove skill cards in `index.html`:
```html
<div class="skill-card">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/TECHNAME/TECHNAME-original.svg" alt="Tech"/>
  <span>techname</span>
</div>
```
Find icon URLs at: https://devicon.dev

---

### 6. ABOUT ME TEXT
Find the `#about` section and update the paragraphs with your own bio.

---

### 7. CONTACT DETAILS
```html
<div class="contact-item">
  <i class="fa-brands fa-discord"></i>
  <span>YOUR_DISCORD</span>
</div>
<div class="contact-item">
  <i class="fa-regular fa-envelope"></i>
  <span>YOUR@EMAIL.COM</span>
</div>
```

---

### 8. SOCIAL LINKS
Update the `href` attributes in the sidebar and footer:
```html
<a href="https://github.com/YOURUSERNAME" target="_blank">
```

---

### 9. COLORS
In `style.css`, change these variables at the top:
```css
:root {
  --bg:     #0d0d0d;   /* Background */
  --purple: #c778dd;   /* Accent color */
  --white:  #ffffff;   /* Text */
  --gray:   #abb2bf;   /* Subtle text */
  --border: #2a2a2a;   /* Borders/lines */
}
```

---

### 10. RESUME DOWNLOAD
Place your resume PDF as `resume.pdf` in the same folder.
The About section already has: `<a href="resume.pdf" download>Resume ↓</a>`

---

## 🌐 DEPLOYING FOR FREE
- **GitHub Pages**: Push to GitHub repo → Settings → Pages → Deploy from main branch
- **Netlify**: Drag and drop your portfolio folder at netlify.com/drop
- **Vercel**: Connect GitHub repo at vercel.com

---

## ✅ CHECKLIST BEFORE GOING LIVE
- [ ] Replace `your-photo.png` with your actual photo
- [ ] Update your name everywhere
- [ ] Add your real project screenshots
- [ ] Update project links to live URLs
- [ ] Update Discord username and email
- [ ] Update GitHub/social links in sidebar + footer
- [ ] Add your `resume.pdf`
- [ ] Update About Me text with your real bio