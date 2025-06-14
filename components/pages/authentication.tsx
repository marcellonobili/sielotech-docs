import { JetBrains_Mono } from 'next/font/google'
import { CodeBlock } from '../ui/code-block'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export function Authentication() {
  return (
    <div className="pb-16">
      <h1 className={`${jetbrainsMono.className} text-3xl font-bold text-gray-900 dark:text-gray-100`}>Authentication</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        To use the SieloTech API, you need to authenticate your requests. You need an API key for authentication.
      </p>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>API Keys</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        All API endpoints require the API key passed in the Authorization header like so:
      </p>
      <CodeBlock>
        {`Authorization: YOUR_API_KEY`}
      </CodeBlock>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        I'm finishing to build the dashboard to create and manage personal API keys. For now, the following Beta API key is available for free:
      </p>
      <CodeBlock>
        {`8d9745db-98ba-4279-86ac-025b865ae656`}
      </CodeBlock>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        You can use it to test the API freely. Please be aware that this key is shared by everyone and rate limited, it must not be used for
        production environments.
      </p>
      
      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Getting Started</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Here's how to get started with authentication (skip the first 3 steps if you're using the Beta API key):
      </p>
      <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
        <li>Sign up for a SieloTech account on the SieloTech dashboard (Not yet available)</li>
        <li>Navigate to the API section in your dashboard (Not yet available)</li>
        <li>Generate a new API key (Not yet available)</li>
        <li>Include this key in the header of your API requests</li>
      </ul>
      
      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Security Best Practices</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Keep your API keys secure and follow these best practices:
      </p>
      <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
        <li>Never expose your API key in client-side code</li>
        <li>Use environment variables to store your API keys</li>
      </ul>
    </div>
  )
}

