import { ReactNode } from 'react';

interface InfoSectionProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
}

export function InfoSection({ icon, title, content }: InfoSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-gray-900 mb-3">{title}</h3>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
