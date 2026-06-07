const courseStatus = ['All', 'Completed', 'Upcoming', 'Active'];

function Header() {
  return (
    <div>
      <h1>Course List</h1>
      <div className="course-status">
        {courseStatus.map((s, index) => (
          <div className={index === 0 ? 'active' : ''} key={s}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
