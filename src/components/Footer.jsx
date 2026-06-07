function Footer({ courses }) {
  const completed = courses.filter((c) => c.status === 'Completed').length;
  const percentage = Math.round((completed / courses.length) * 100);

  return (
    <div>
      You have passed <strong>{percentage}%</strong> of your courses.
    </div>
  );
}

export default Footer;