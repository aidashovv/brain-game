function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export function generateQuestions(parsedTasks) {
  const questions = [];

  parsedTasks.forEach(({ task, keywords }) => {
    keywords.forEach(keyword => {
      questions.push({
        question: `Где используется «${keyword}»?`,
        type: 'keyword',
        context: task
      });
      questions.push({
        question: `Для чего нужен «${keyword}»?`,
        type: 'keyword',
        context: task
      });
      questions.push({
        question: `Опиши технологию «${keyword}».`,
        type: 'keyword',
        context: task
      });
    });
  });

  return shuffle([...questions]);
}