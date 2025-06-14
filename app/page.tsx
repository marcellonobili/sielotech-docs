export const dynamic = 'force-static';

export async function generateMetadata() {
  return {
    title: 'Redirecting...',
    other: {
      'http-equiv': {
        'refresh': '0;url=/api/introduction',
      },
    },
  };
}

export default function Home() {
  // Static redirect page
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Redirecting to Documentation...</h2>
        <p className="text-gray-600 dark:text-gray-300">
          If you are not redirected automatically, 
          <a href="/api/introduction" className="ml-1 text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
            click here
          </a>
        </p>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = '/api/introduction';`
          }} />
      </div>
    </div>
  );
}
