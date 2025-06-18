import { useState } from 'react';

const mockFaq = [
  {
    question: 'Что это за сайт?',
    answer: 'Это личный проект-портфолио для демонстрации навыков.',
  },
  {
    question: 'Могу ли я связаться с вами?',
    answer: 'Да, вы можете использовать форму обратной связи в разделе "Контакты".',
  },
  {
    question: 'Какие технологии используются?',
    answer: 'React, CSS и другие современные веб-технологии.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-compact">
      <h4>FAQ</h4>
      {mockFaq.map((item, index) => (
        <div key={index} className="faq-line">
          <button onClick={() => toggle(index)} className="faq-compact-question">
            {item.question}
          </button>
          {openIndex === index && <div className="faq-compact-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
