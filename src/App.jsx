import './App.css';
import Header from './components/Header';
import CourseList from './components/CourseList';
import Footer from './components/Footer';

const courses = [
  {
    id: 1,
    title: 'English Lecture',
    description: 'Language lessons with the most popular teachers',
    imageUrl: '/images/img1.jpg',
    rate: '4.5',
    tags: ['Languages'],
    start: '2021-08-01T20:46:30.615Z',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Design Strategy',
    description: 'Lesson on planning design concept and proper planning of work',
    imageUrl: '/images/img2.jpg',
    rate: '4',
    tags: ['UI/UX Design', 'Web Design'],
    start: '2023-07-01T20:46:30.615Z',
    status: 'Upcoming',
  },
  {
    id: 3,
    title: 'Business Lecture',
    description:
      'Lectures on how to build your business safely without fear of new projects',
    imageUrl: '/images/img3.jpg',
    rate: '3.9',
    tags: ['Marketing', 'Finance'],
    start: '2023-07-01T20:46:30.615Z',
    status: 'Active',
  },
];

function App() {
  return (
    <div>
      <Header />
      <CourseList courses={courses} />
      <Footer courses={courses} />
    </div>
  );
}

export default App;
