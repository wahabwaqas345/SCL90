import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-center py-4 mt-10 border-t border-gray-700">
      <p className="text-sm mb-1">
          ⚠️ If your results show severe levels, please consult a licensed mental health professional immediately.
      </p>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} SCL-90 Mental Health Assessment. All rights reserved.
      </p>
    </footer>
  );
}
