

# Interview Dashboard Web App

This is a **React + Tailwind + DaisyUI** web application designed as part of a **Skillvi skill test**.
The application features a **glassmorphism-themed dashboard** for managing candidate interviews, including candidate profiles, interview schedules, and company feedback.

---

## 🖥️ Demo 

* Demo Link: [Demo Link](https://skillvi-test.netlify.app/)
  



## ⚙️ Features

* Display a **list of candidates** with name, role, experience, and rating.
* **Interactive candidate cards**: Clicking a candidate shows their interview schedule.
* **Interview Schedule Section**: Displays date, time, and interviewer.
* **Company Feedback Section**: Shows ratings and short notes.
* **Search functionality**: Filter candidates by name.
* Fully **responsive design** for desktop and mobile.
* **Glassmorphism UI** with modern hover effects.
* Modern iconography using **Lucide React** icons.
* Default display shows the **first candidate’s interview schedule**.

---

## 🚀 Installation & Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/tusherbhakta/Skillvi-Task
cd Skillvi-Task
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Assumptions Made

* Candidate data and interview schedules are **hardcoded** for demonstration purposes.
* Feedback section is **static**, no backend integration.
* Default candidate selected is the **first in the list**.
* Background image is **locally stored**, replaceable with any URL or asset.

---

## ✨ Extra Features Implemented

* **Interactive candidate selection** updates interview schedule dynamically.
* **Glassmorphism cards** for a modern UI feel.
* **Lucide icons** for ratings, calendar, clock, and user.
* **Responsive search bar** and filtering.
* **Hover effects** on cards for better UX.
* Font integration using **Monument Extended**.

---

## 📂 Project Structure

```
/src
  /assets        # Images and background
  /components    # CandidateCard, InterviewSchedule, FeedbackCard
  /pages         # Dashboard
  main.jsx
tailwind.config.js
package.json
```

---

## 📸 Components

* Glassmorphism Dashboard
* Candidate Cards with Rating
* Interview Schedule Section
* Feedback Cards



---

## 🛠️ Technologies Used

* React 18
* TailwindCSS + DaisyUI
* Lucide React icons
* Vite for development and build
* Monument Extended font
* Glassmorphism UI


