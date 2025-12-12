'use client';

import { useState } from 'react';

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ScheduleTableProps {
  title: string;
  schedules: {
    label: string;
    schedule: ScheduleItem[];
  }[];
}

export function ScheduleTable({ title, schedules }: ScheduleTableProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSchedule = schedules[activeIndex]?.schedule || [];

  return (
    <div className="h-full">
      <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-6">
        {title}
      </h2>
      
      {/* タブ切り替えボタン */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {schedules.map((schedule, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeIndex === index
                ? 'bg-primary text-white shadow-japanese'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {schedule.label}
          </button>
        ))}
      </div>

      {/* スケジュール表 */}
      <div className="rounded-2xl border border-subtle bg-card shadow-japanese overflow-hidden">
        <div className="divide-y divide-subtle">
          {activeSchedule.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide">{item.time}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base text-muted leading-relaxed">{item.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

