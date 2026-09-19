# 💍 Dr. Vijay Aggarwal & Dr. Sunita Aggarwal — 46th Marriage Anniversary Website

An elegant, classic, responsive website celebrating **46 Sapphire Years of Togetherness** (1980 – 2026) for **Dr. Vijay Aggarwal (Pediatrician)** & **Dr. Sunita Aggarwal (Gynaecologist)** from Narwana, Haryana.

Designed for **100% free hosting** on **GitHub Pages**, **Netlify**, or **Vercel** with zero build tools or server setup.

---

## 🌟 Highlights & Features

- 📱 **Mobile & App Responsive**: Tested across small phones (320px+), tablets, laptops, and desktop screens.
- 🎨 **Classic Royal Aesthetic**: Elegant cream, gold, and deep crimson palette with Google Fonts (`Playfair Display`, `Cormorant Garamond`, `Great Vibes`).
- ✨ **Smooth Animations**: Floating rose petals/sparkles canvas, smooth scroll reveal observers, and rotating vinyl ambient music player.
- 🎓 **Personalized Medical Couple Story**: Highlighting their GMC Patiala college days, love marriage in 1980, and decades of medical service in Narwana.
- 💖 **Interactive Wish Wall**: Visitors, friends, and family can post blessings saved persistently in local storage.
- 📸 **Photo Gallery Ready**: Includes handsome placeholder artwork and simple instructions to upload real photos.

---

## 🚀 How to Host FREE on GitHub Pages (Step-by-Step)

### Option A: Using GitHub Website (No Git Command Line Needed)

1. **Log in to GitHub**: Go to [GitHub.com](https://github.com) and log in (or create a free account if you don't have one).
2. **Create a New Repository**:
   - Click the **`+`** icon at top right -> select **New repository**.
   - Name your repository (e.g., `marriageanniversary` or `vijay-sunita-anniversary`).
   - Choose **Public** -> click **Create repository**.
3. **Upload Website Files**:
   - On your new repository page, click **uploading an existing file**.
   - Drag and drop all files from this folder (`index.html`, `styles.css`, `script.js`, `README.md`, and any `images` folder).
   - Click **Commit changes**.
4. **Enable GitHub Pages**:
   - Go to your repository's **Settings** tab (top navigation).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment -> Branch**, select **`main`** (or `master`) branch and **`/ (root)`** folder.
   - Click **Save**.
5. **🎉 Your Website is Live!**:
   - Within 30 seconds, GitHub will give you your free web link:
     `https://<your-github-username>.github.io/<repository-name>/`
   - You can share this link with family, friends, and patients on WhatsApp or social media!

---

### Option B: Using Git Command Line

```bash
# 1. Initialize git in this directory
git init
git add .
git commit -m "Initial commit for 46th anniversary website"

# 2. Link your remote repository and push
git remote add origin https://github.com/<your-github-username>/marriageanniversary.git
git branch -M main
git push -u origin main
```
Then turn on Pages in GitHub Repository -> Settings -> Pages.

---

## 🖼️ How to Upload Real Photos to the Gallery

1. Create a folder named `images` inside this project directory.
2. Add your photos, e.g.:
   - `images/photo1.jpg` (Patiala College days)
   - `images/photo2.jpg` (Wedding Day)
   - `images/photo3.jpg` (Narwana Medical Practice)
   - `images/photo4.jpg` (46th Anniversary Celebration)
3. In `index.html`, replace the placeholder art lines inside `<div class="gallery-img-wrapper">`:
   ```html
   <!-- Replace the placeholder div with: -->
   <img src="images/photo1.jpg" alt="Patiala Medical College Days" style="width:100%; height:100%; object-fit:cover;">
   ```
4. Commit and push the changes to GitHub. Your live site will automatically update!

---

## 🎵 Ambient Music Synthesizer

The website includes a built-in classical ambient music synthesizer using the Web Audio API. Clicking the **"Play Music"** button on the top right plays a relaxing, romantic melody with zero external dependencies or broken MP3 links!

---

## 💌 Tech Stack
- **HTML5** (Semantic structure)
- **CSS3** (Flexbox, CSS Grid, Custom Properties, Keyframe Animations)
- **Vanilla JavaScript** (ES6, Canvas API, IntersectionObserver API, Web Audio API, LocalStorage)

Designed with love for **Dr. Vijay Aggarwal & Dr. Sunita Aggarwal** on their **46th Marriage Anniversary**! 🌹
