'use client';

import { useState, useEffect } from 'react';

export default function ClientOnlyDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []); // The empty dependency array ensures this runs only once

  // Render a placeholder or nothing on the server and initial client render
  if (date === null) {
    return '...';
  }

  return <>{date}</>;
}
