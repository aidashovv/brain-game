import React, { useState, useEffect } from 'react';
import { parsedTasks } from '../parser/parseTasks';
import { generateQuestions } from '../questions/generate';


const questions = generateQuestions(parsedTasks);
const getAutoAnswer = () => "дурак ты блин";


export default function FlashQuiz() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const handleNext = () => {
    setShowAnswer(false);
    setUserAnswer('');
    setCurrent((prev) => (prev + 1) % questions.length);
  };

  const handleFlip = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (showAnswer) {
          handleNext();
        } else {
          handleFlip();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAnswer]);

  const currentQuestion = questions[current];

  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <div
          style={{
            ...styles.card,
            transform: showAnswer ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          <div style={{ ...styles.side, ...styles.front }}>
            <h3 style={styles.title}>Вопрос</h3>
            <p style={styles.question}>{currentQuestion.question}</p>
            <input
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              style={styles.input}
              placeholder="Ваш ответ..."
              disabled={showAnswer}
            />
            <button style={styles.button} onClick={handleFlip}>Показать ответ</button>
          </div>
          <div style={{ ...styles.side, ...styles.back }}>
            <h3 style={styles.title}>Ответ</h3>
            <p style={styles.answer}>{getAutoAnswer()}</p>
            <div style={styles.userBlock}>
              <span style={styles.userLabel}>Ваш ответ:</span>
              <span style={styles.userAnswer}>{userAnswer || '—'}</span>
            </div>
            <button style={styles.button} onClick={handleNext}>Следующая карточка</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 18, color: '#888', fontWeight: 500, letterSpacing: '1px' }}>
        {current + 1} из {questions.length}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 400,
    height: 400,
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f6fa',
    borderRadius: 24,
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.08)',
    position: 'relative'
  },
  cardContainer: {
    width: '100%',
    height: '80%',
    perspective: 1000,
    margin: '0 auto'
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.5s',
    transformStyle: 'preserve-3d'
  },
  side: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  front: {
    background: '#fff',
    zIndex: 2
  },
  back: {
    background: '#fff',
    transform: 'rotateY(180deg)',
    zIndex: 1
  },
  title: {
    color: '#222',
    marginBottom: 12
  },
  question: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24
  },
  answer: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
    wordBreak: 'break-word',
    maxWidth: '90%'
  },
  input: {
    width: '90%',
    padding: 10,
    margin: '12px 0',
    fontSize: 16,
    borderRadius: 8,
    border: '1px solid #ccc',
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
  },
  button: {
    padding: '10px 28px',
    fontSize: 18,
    background: 'linear-gradient(90deg, #60a5fa, #2563eb)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    fontWeight: 600,
    boxShadow: '0 4px 16px 0 rgba(96,165,250,0.18)',
    transition: 'background 0.2s, box-shadow 0.2s',
    marginTop: 8
  },
  userBlock: {
    margin: '16px 0',
    textAlign: 'center',
    width: '100%'
  },
  userLabel: {
    color: '#333',
    fontWeight: 500,
    marginRight: 8
  },
  userAnswer: {
    color: '#222',
    fontWeight: 600,
    wordBreak: 'break-word',
    maxWidth: '90%',
    display: 'inline-block',
    textAlign: 'center'
  }
};