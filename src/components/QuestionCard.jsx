import React from "react";

const QuestionCard = ({
  question,
  currentIndex,
  total,
  selectedAnswer,
  onSelect,
  onPrev,
  onFinish,
}) => {
  const options = [
    { label: "Never", value: 0 },
    { label: "Mild", value: 1 },
    { label: "Moderate", value: 2 },
    { label: "Heavy", value: 3 },
    { label: "Severe", value: 4 },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">
      <div className="text-sm text-gray-500 mb-2 text-right">
        Question {currentIndex + 1} / {total}
      </div>

      <h2 className="text-xl font-semibold mb-6 text-center">
        {question}
      </h2>

      {/* Horizontal options */}
      <div className="flex justify-between items-center gap-3 mb-8">
      {options.map((opt) => (
  <button
    key={opt.value}
    onClick={() => onSelect(opt.value)}
    className={`flex-1 py-3 text-sm rounded-lg border font-medium transform transition-all duration-300
      ${
        selectedAnswer === opt.value
          ? "bg-blue-600 text-white border-blue-700 shadow-lg shadow-blue-400/40"
          : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/30 hover:-translate-y-1 active:scale-95"
      }`}
  >
    {opt.label}
  </button>
))}

      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
        >
          Previous
        </button>

        <button
          onClick={onFinish}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Show Result
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
