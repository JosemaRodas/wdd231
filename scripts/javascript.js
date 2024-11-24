document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.backgroundColor = '#333';
      });
      button.addEventListener('mouseout', () => {
          button.style.backgroundColor = 'black';
      });
  });

  const courses = document.querySelectorAll('.course-button');

  const displayCourses = (filter) => {
      courses.forEach(course => {
          if (filter === 'todos' || course.dataset.category === filter) {
              course.style.display = 'block';
          } else {
              course.style.display = 'none';
          }
      });
  };

  displayCourses('todos');

  const filterButtons = document.querySelectorAll('.nav-button');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.dataset.filter;
          displayCourses(filter);
      });
  });
});
