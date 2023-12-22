const users = [
    { id: 1, username: 'student1', password: 'student1password', role: 'student' },
    { id: 2, username: 'student2', password: 'student2password', role: 'student' },
    { id: 3, username: 'admin1', password: 'admin1password', role: 'admin' }
  ];
  
  const quizQuestions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctOption: 0
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctOption: 0
    },
    // Add more quiz questions
  ];
  
  module.exports = { users, quizQuestions };
  