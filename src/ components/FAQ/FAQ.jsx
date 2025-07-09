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
  {
    question: 'Можно ли посмотреть исходный код?',
    answer: 'Да, исходный код доступен на GitHub — ссылка находится в разделе "Контакты".',
  },
  {
    question: 'Проект адаптирован под мобильные устройства?',
    answer: 'Да, сайт полностью адаптивен и корректно отображается на смартфонах и планшетах.',
  },
  {
    question: 'Как часто обновляется сайт?',
    answer: 'Проект обновляется по мере появления новых идей или проектов.',
  },
  {
    question: 'Кем вы работаете?',
    answer: 'Я веб-разработчик, специализируюсь на фронтенде и бэкенде.',
  },
  {
    question: 'Можно ли использовать ваш шаблон?',
    answer: 'Да, но желательно указать автора и не использовать в коммерческих целях без разрешения.',
  },
  {
    question: 'Где вы учились?',
    answer: 'Самообучение, онлайн-курсы и практика на реальных проектах.',
  },
  {
    question: 'На каких языках программирования вы работаете?',
    answer: 'JavaScript (React), Python (Django/FastAPI), немного C++ и SQL.',
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="faq-compact">
        {mockFaq.map((item, index) => (
            <div key={index} className={`faq-block ${openIndex === index ? "open" : ""}`}>
              <button onClick={() => toggle(index)} className="faq-question">
                  <span className="arrow" style={{transform: openIndex === index ? "rotate(90deg)" : "rotate(0deg)"}}>
                    ▶
                  </span>
                {item.question}
              </button>
              <div className="faq-answer-wrapper">
                {openIndex === index && (
                    <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            </div>
        ))}
      </div>
  );
};

export default FAQ;
