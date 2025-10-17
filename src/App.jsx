import React, { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./components/QuestionCard";
import Footer from "./components/Footer";

const factors = [
  { name: "Somatization", start: 0, end: 9 },
  { name: "Obsessive-Compulsive", start: 10, end: 19 },
  { name: "Interpersonal Sensitivity", start: 20, end: 29 },
  { name: "Depression", start: 30, end: 39 },
  { name: "Anxiety", start: 40, end: 49 },
  { name: "Hostility", start: 50, end: 59 },
  { name: "Fear/Avoidance", start: 60, end: 69 },
  { name: "Paranoia", start: 70, end: 79 },
  { name: "Psychotic", start: 80, end: 89 },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(90).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState(null);

  const handleSelect = (value) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const calculateResults = () => {
    const totalScore = answers.reduce((sum, val) => sum + (val || 0), 0);
    const positiveItems = answers.filter((val) => val > 0).length;
    const GSI = (totalScore / 90).toFixed(2);
    const PSDI = positiveItems > 0 ? (totalScore / positiveItems).toFixed(2) : 0;

    const factorResults = factors.map((f) => {
      const subset = answers.slice(f.start, f.end + 1);
      const sum = subset.reduce((a, b) => a + (b || 0), 0);
      const avg = (sum / subset.length).toFixed(2);

      let diagnosis = "Normal";
      if (avg >= 1.5 && avg < 2.0) diagnosis = "Mild abnormality";
      else if (avg >= 2.0 && avg < 3.0) diagnosis = "Moderate abnormality";
      else if (avg >= 3.0) diagnosis = "Severe abnormality";

      return { ...f, score: sum, avg, diagnosis };
    });

    return { totalScore, GSI, PSDI, positiveItems, factorResults };
  };

  const handleFinish = () => {
    const res = calculateResults();
    setResults(res);
    setShowResult(true);
  };

  const rawQuestion = questions[currentIndex];
  const questionText = rawQuestion?.text ?? rawQuestion ?? "No question found";

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-8 mt-6">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide">
          Symptom Checklist (SCL-90)
        </h1>
        <p className="text-sm mt-3 max-w-lg text-gray-600">
          Complete self-assessment questionnaire (can be repeated again for satisfaction).
          Answer based on your actual feelings during the past week (0–4).
        </p>
      </div>

      {/* Question Section */}
      {!showResult && (
        <QuestionCard
          question={questionText}
          currentIndex={currentIndex}
          total={questions.length}
          selectedAnswer={answers[currentIndex]}
          onSelect={handleSelect}
          onPrev={handlePrev}
          onFinish={handleFinish}
        />
      )}

      {/* Result Section */}
      {showResult && results && (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-2xl w-full max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Assessment Results
          </h2>

          {/* Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6 text-gray-700">
            <p className="text-base">
              <strong>Total Score:</strong> {results.totalScore}
            </p>
            <p className="text-base">
              <strong>GSI:</strong> {results.GSI}
            </p>
            <p className="text-base">
              <strong>PST:</strong> {results.positiveItems}
            </p>
            <p className="text-base">
              <strong>PSDI:</strong> {results.PSDI}
            </p>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border text-base md:text-lg text-gray-700">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border p-3">Factor</th>
                  <th className="border p-3">Score</th>
                  <th className="border p-3">Average</th>
                  <th className="border p-3">Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                {results.factorResults.map((f) => (
                  <tr key={f.name} className="hover:bg-blue-50">
                    <td className="border p-3 font-medium">{f.name}</td>
                    <td className="border p-3 text-center">{f.score}</td>
                    <td className="border p-3 text-center">{f.avg}</td>
                    <td className="border p-3 text-center">{f.diagnosis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Explanation Section */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6 shadow-inner max-h-[70vh] overflow-y-auto text-gray-700 leading-relaxed text-sm md:text-base">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Detailed Interpretation
            </h3>
            <p className="mb-3">
              According to national normative results, if any of the following criteria are met, further examination is recommended:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Total score over 160 (over 250 = serious, needs medical check).</li>
              <li>Positive items over 43.</li>
              <li>Any factor score exceeds 2 points.</li>
            </ul>

            <p className="mb-3 font-semibold text-blue-700">Factor meanings:</p>
            <p className="text-sm md:text-base whitespace-pre-line">
              1. Somatization – Reflects physical discomfort such as headaches or fatigue.{"\n"}
              2. Obsessive-Compulsive – Uncontrollable repetitive thoughts or actions.{"\n"}
              3. Interpersonal Sensitivity – Feelings of inferiority and social discomfort.{"\n"}
              4. Depression – Sadness, loss of interest, pessimism, and lack of energy.{"\n"}
              5. Anxiety – Restlessness, nervousness, and physical tension.{"\n"}
              6. Hostility – Irritability, aggression, and anger responses.{"\n"}
              7. Fear/Avoidance – Social or situational phobias.{"\n"}
              8. Paranoia – Suspiciousness, delusions, and projection thinking.{"\n"}
              9. Psychotic – Disconnection from reality, hallucinations, or incoherent thoughts.{"\n"}
              10. Others – Sleep or appetite disturbances (reference only).{"\n"}
            </p>

            <p className="mt-4 font-semibold text-blue-700">
              ⚠️ National Norm Warning:
            </p>
            <p>
              If any of the above indicators exceed normal range, seek evaluation from a mental health professional.
              Persistent symptoms, suicidal thoughts, or severe distress require immediate attention.
            </p>

            <p className="mt-4 text-sm italic text-gray-600">
              This information is for screening purposes only and does not replace clinical diagnosis.
            </p>
          </div>
        </div>
      )}
      {showResult && (
        <>
        
          <Footer />  {/* 👈 show footer only when results are displayed */}
        </>
      )}

    </div>
  );
};

export default App;
