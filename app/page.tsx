'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/events');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button 
        onClick={handleClick}
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
      >
        Events
      </Button>
    </div>
  );
}