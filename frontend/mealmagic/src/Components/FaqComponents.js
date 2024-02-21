import React, { useState } from 'react';

const FaqComponent = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleAnswer = (question) => {
    setIsOpen((prevOpen) => ({ ...prevOpen, [question]: !prevOpen[question] }));
  };

  const faqData = [
    {
      question: 'What is this site for?',
      answer: 'This site allows you to book a chef for various events or occasions.',
    },
    {
      question: 'How do I browse available chefs?',
      answer: 'Navigate to the "Chefs" section to view profiles, specialties, and availability.',
    },
    {
      question: 'How can I book a chef?',
      answer: 'Select your preferred chef, choose a date and time, then click the "Book Now" button on their profile.',
    },
    {
      question: 'Is there a cancellation policy?',
      answer: 'Yes, you can cancel your booking up to 48 hours before the scheduled date for a full refund.',
    },
    {
      question: 'Can I customize the menu with the chef?',
      answer: 'Absolutely! Discuss your preferences with the chef during the booking process.',
    },
    {
      question: 'How do I pay for the chef\'s services?',
      answer: 'We accept secure online payments. You\'ll be prompted to pay once the booking is confirmed.',
    },
    {
      question: 'Can I request a specific cuisine or dietary restrictions?',
      answer: 'Yes, you can specify your preferences and dietary restrictions while booking.',
    },
    {
      question: 'Is there a feedback system for chefs?',
      answer: 'After your event, you can provide feedback and rate the chef based on your experience.',
    },
  ];
  
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="question-container" onClick={() => toggleAnswer(index)}>
            <h3>{faq.question}</h3>
            <span className={`arrow ${isOpen[index] ? 'open' : ''}`}>&#9660;</span>
          </div>
          {isOpen[index] && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
