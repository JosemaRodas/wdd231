document.addEventListener('DOMContentLoaded', () => {
  // Hover Effect for Menu Items
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.backgroundColor = '#333';
      });
      button.addEventListener('mouseout', () => {
          button.style.backgroundColor = 'black';
      });
  });

  // Course List and Filter
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

  // Display all courses by default
  displayCourses('todos');

  // Filter Courses
  const filterButtons = document.querySelectorAll('.nav-button');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.dataset.filter;
          displayCourses(filter);
      });
  });
});
