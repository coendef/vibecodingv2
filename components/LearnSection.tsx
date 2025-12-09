import React, { useState } from 'react';
import { lessons } from '../data/lessons';
import { Lesson } from '../types';

const LearnSection: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<string>(lessons[0].id);

  const activeLesson = lessons.find(l => l.id === activeLessonId) || lessons[0];

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-8rem)]">
      {/* Lesson List */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 overflow-y-auto pr-2">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setActiveLessonId(lesson.id)}
            className={`text-left p-5 rounded-xl border transition-all ${
              activeLessonId === lesson.id
                ? 'bg-white border-emerald-500 ring-1 ring-emerald-500 shadow-md'
                : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-sm'
            }`}
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1 block">
              {lesson.category}
            </span>
            <h3 className={`font-semibold text-lg mb-1 ${activeLessonId === lesson.id ? 'text-slate-900' : 'text-slate-700'}`}>
              {lesson.title}
            </h3>
            <div className="flex items-center text-slate-400 text-xs gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {lesson.readTime} leestijd
            </div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full md:w-2/3 bg-white rounded-xl border border-slate-200 shadow-sm p-8 overflow-y-auto">
        <article className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-emerald-600 hover:prose-a:text-emerald-500">
           {/* Simple renderer for the markdown-like string */}
           {activeLesson.content.split('\n').map((line, index) => {
             if (line.startsWith('# ')) {
               return <h1 key={index} className="text-3xl font-bold mb-6 text-slate-900">{line.replace('# ', '')}</h1>;
             }
             if (line.startsWith('### ')) {
               return <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-slate-800">{line.replace('### ', '')}</h3>;
             }
             if (line.startsWith('*   ')) {
                return (
                  <ul key={index} className="list-disc pl-5 mb-2">
                    <li className="text-slate-700">{line.replace('*   ', '')}</li>
                  </ul>
                );
             }
             if (line.startsWith('1.  ')) {
                return (
                  <div key={index} className="flex gap-2 mb-2">
                    <span className="font-bold text-slate-900 min-w-[20px]">{index}.</span>
                    <span className="text-slate-700">{line.replace(/^\d+\.\s+/, '')}</span>
                  </div>
                );
             }
             if (line.trim() === '') {
               return <br key={index} />;
             }
             return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
           })}
        </article>
      </div>
    </div>
  );
};

export default LearnSection;