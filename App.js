import React, { useState } from 'react';

export default function NursingReview() {
  const [feedback, setFeedback] = useState("");
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ borderBottom: '2px solid #004d40', marginBottom: '20px' }}>
        <h1 style={{ color: '#004d40' }}>Nursing Lecture Review</h1>
        <p>Welcome, students. Please review the notes below and leave your feedback.</p>
      </header>

      <section style={{ background: '#e0f2f1', padding: '15px', borderRadius: '8px' }}>
        <h3>Today's Key Topics</h3>
        <ul>
          <li><strong>Patient Assessment:</strong> ABCs (Airway, Breathing, Circulation)</li>
          <li><strong>Pharmacology:</strong> Dosage calculations and safety protocols</li>
          <li><strong>Clinical Ethics:</strong> HIPAA and patient confidentiality</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h3>Student Feedback</h3>
        <textarea 
          placeholder="Enter your comments here..." 
          style={{ width: '100%', height: '100px', padding: '10px' }}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        <button 
          onClick={() => alert("Thank you for your feedback!")}
          style={{ marginTop: '10px', padding: '10px 20px', background: '#004d40', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Submit Feedback
        </button>
      </section>
    </div>
  );
}
