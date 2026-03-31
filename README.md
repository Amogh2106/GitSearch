# 🔍 GitHub Profile Viewer

A clean, responsive web app to search any GitHub user and view their profile stats, repositories, and activity — built with vanilla HTML, CSS, and JavaScript.

---

## 🚀 Features

- Search any GitHub username instantly
- Display profile info: avatar, bio, followers, following, public repos
- List repositories sorted by stars
- Show languages used per repo
- Loading and error states handled gracefully
- Fully responsive (mobile + desktop)

---

## 🛠️ Tech Stack

- **HTML** — semantic structure
- **CSS** — responsive layout with Flexbox/Grid, no frameworks
- **JavaScript** — fetch API, async/await, DOM manipulation

> No libraries. No build tools. Just vanilla JS.

---

## 📁 Project Structure

```
github-profile-viewer/
├── index.html
├── style.css
└── script.js
```

---

## 🔌 API Used

[GitHub REST API](https://docs.github.com/en/rest) — public, no auth required for basic usage.

| Endpoint | Purpose |
|---|---|
| `GET /users/{username}` | Fetch profile data |
| `GET /users/{username}/repos` | Fetch repositories |

> **Rate limit:** 60 requests/hour unauthenticated. Add a personal access token to raise it to 5000/hour.

---

## ⚙️ How to Run

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/github-profile-viewer.git
   cd github-profile-viewer
   ```

2. Open `index.html` in your browser — no server needed.

---

## 📐 Features Breakdown (Build Order)

| Phase | Feature | Concepts Covered |
|---|---|---|
| 1 | Search bar + button | DOM selection, event listeners |
| 2 | Fetch user profile | `fetch`, `async/await`, JSON parsing |
| 3 | Render profile card | DOM manipulation, template literals |
| 4 | Fetch + render repos | Chained API calls, array methods |
| 5 | Loading & error states | UI state management |
| 6 | Responsive layout | CSS Flexbox/Grid, media queries |

---

## 🧩 Possible Extensions

- [ ] Sort repos by stars / forks / updated date
- [ ] Paginate repositories
- [ ] Add GitHub OAuth token support for higher rate limits
- [ ] Dark/light mode toggle
- [ ] Migrate to React (natural next step)
- [ ] Add a Node.js backend to cache API responses

---

## 📸 Screenshots

> _(Add after building)_

---

## 📄 License

MIT
