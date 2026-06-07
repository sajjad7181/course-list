# Course List App

A React app that displays a list of courses with their status, rating, tags, and start date.  
It dynamically calculates the completion percentage shown in the footer.

---

## Features

- Render a list of courses using reusable components
- Display course status with color-coded badges (Completed, Active, Upcoming)
- Show tags, rating, and formatted start date for each course
- Dynamically calculate and display the percentage of completed courses
- Filter tabs in the header (All, Completed, Upcoming, Active)

---

## Key Learning Points

- **Component-based architecture** — breaking UI into small, reusable pieces (`CourseCard`, `CourseCardBody`, `CourseCardFooter`)
- **Props** — passing data from parent to child components
- **Lifting state up** — keeping course data in `App.jsx` and sharing it with `CourseList` and `Footer`
- **Array methods** — using `.map()` to render lists and `.filter()` to calculate completed courses
- **Conditional class names** — applying different badge styles based on course status
- **Date formatting** — using `toLocaleDateString()` to display human-readable dates

---

## React Tip: Conditional className

Instead of a long ternary inline in JSX, extract it to a variable for cleaner code:

```jsx
// messy
<span className={`badge ${course.status === 'Completed' ? 'badge--primary' : course.status === 'Upcoming' ? 'badge--danger' : 'badge--secondary'}`}>

// cleaner
const statusClass =
  course.status === 'Completed' ? 'badge--primary' :
  course.status === 'Upcoming'  ? 'badge--danger'  :
  'badge--secondary';

<span className={`badge ${statusClass}`}>
```

---

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
