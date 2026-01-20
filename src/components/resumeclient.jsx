"use client";
import { useState } from "react";
import { analyzeResume, chatWithAI } from "../../actions/student/airesume"; 
import styles from "../css/resume.module.css"; // 1. Importing as a Module


export default function ResumeInterface() {
  const [feedback, setFeedback] = useState(null);
  const [resumeText, setResumeText] = useState(""); 
  const [loading, setLoading] = useState(false);

  // Chat State
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  async function handleUpload(formData) {
    setLoading(true);
    const result = await analyzeResume(null, formData);
    
    if (result.success) {
      setFeedback(result.feedback);
      setResumeText(result.resumeText); 
    } else {
      alert("Error analyzing resume");
    }
    setLoading(false);
  }

  async function handleSendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]); 
    setInput("");
    setChatLoading(true);

    const aiResponseText = await chatWithAI(input, resumeText, messages);

    const aiMsg = { role: "ai", text: aiResponseText };
    setMessages((prev) => [...prev, aiMsg]); 
    setChatLoading(false);
  }

  return (
    <div className={styles['resume-container']}>
      
      {/* SECTION 1: UPLOAD */}
      <div className={styles['upload-card']}>
        <h1>AI Resume Screener</h1>
        <form action={handleUpload}>
          <div className={styles['file-input-wrapper']}>
            <input 
              type="file" 
              name="resume" 
              accept=".pdf" 
              required 
              className={styles['file-input']}
            />
          </div>
          <button type="submit" className={styles['submit-btn']} disabled={loading}>
            {loading ? "Analyzing..." : "Check Score"}
          </button>
        </form>
      </div>

      {/* SECTION 2: RESULTS */}
      {feedback && (
        <div className={styles['result-section']}>
          {/* We use dangerouslySetInnerHTML to render the HTML returned by the AI */}
          <div 
            className={styles['review-card']} 
            dangerouslySetInnerHTML={{ __html: feedback }} 
          />

          {/* SECTION 3: LIVE CHAT */}
          <div className={styles['chat-section']}>
            <h2 className={styles['chat-title']}>💬 Live Resume Chat</h2>
            <p className={styles['chat-subtitle']}>Ask me how to improve specific parts!</p>

            <div className={styles['chat-box']}>
                {messages.map((msg, index) => (
                    <div 
                    key={index} 
                    className={`
                        ${styles['message-bubble']} 
                        ${msg.role === "user" ? styles['user-msg'] : styles['ai-msg']}
                    `}
                    >
                    <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.text}
                    </div>
                ))}

                {/* NEW: Show this bubble only while waiting for AI */}
                {chatLoading && (
                    <div className={`${styles['message-bubble']} ${styles['ai-msg']} ${styles['loading-bubble']}`}>
                    <div className={styles['typing-indicator']}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                )}
                
                {messages.length === 0 && !chatLoading && (
                    <p className={styles['empty-chat']}>Start the conversation...</p>
                )}
            </div>

            <form onSubmit={handleSendMessage} className={styles['chat-input-area']}>
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: How do I rewrite the summary?"
                className={styles['chat-input']}
                disabled={chatLoading}
              />
              <button 
                type="submit" 
                disabled={chatLoading}
                className={styles['send-btn']}
              >
                {chatLoading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}