import { JetBrains_Mono } from 'next/font/google'
import { CodeBlock } from '../ui/code-block'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export function Furigana() {
  return (
    <div className="pb-16">
      <h1 className={`${jetbrainsMono.className} text-3xl font-bold text-gray-900 dark:text-gray-100`}>Furigana</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        The Furigana API allows you to add reading aids to Japanese text. In the end, many will probably aim at learning
        to read without them, but there are some reasons why one might want to use furigana:
      </p>
      <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
        <li>The learning process can be very frustrating if one doesn't know the reading of a lot of common kanji or they have just started.</li>
        <li>A person may need to be able to read Japanese for practical purposes without aiming at reading kanji without aids in the long term.</li>
        <li>Accessibility or low vision issues (subtle differences of some kanji may be more difficult to identify).</li>
        <li>Probably other reasons I haven't thought of.</li>
      </ul>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>API Endpoint</h2>
      <CodeBlock>
        {`POST api.sielotech.com/furigana`}
      </CodeBlock>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Authentication</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        All SieloTech APIs require authentication. Please refer to the <a href="/api/authentication" className="text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">Authentication page</a> for details on how to authenticate your requests.
      </p>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Request Parameters</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        The API accepts a JSON body with the following parameters:
      </p>
      
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">text</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The Japanese text for which to generate furigana</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">mode</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">enum</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">No</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Output format: "list" (default) or "dictionary"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Example Request</h2>
      <CodeBlock>
        {`POST api.sielotech.com/furigana

headers: {
  "Authorization": "8d9745db-98ba-4279-86ac-025b865ae656",
  "Content-Type": "application/json"
}
body: {
  "text": "日本語の文章",
  "mode": "list"
}`}
      </CodeBlock>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Response Formats</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        The API supports two output formats controlled by the <code className="inline bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">mode</code> parameter:
      </p>

      <h3 className={`${jetbrainsMono.className} text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8`}>List Mode (Default)</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Returns an object with a "text" property containing a list of words with their readings. For words containing kanji, a two-element array is provided with the original word and its reading.  
      </p>
      <CodeBlock>
        {`{
  "text": [
    ["日本語", "にほんご"],
    ["の"],
    ["文章", "ぶんしょう"]
  ]
}`}
      </CodeBlock>

      <h3 className={`${jetbrainsMono.className} text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8`}>Dictionary Mode</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Returns an object with a "text" array containing all words and a "furigana" object mapping words to their readings.
        Only the words containing kanji are included in the "furigana" dictionary.
      </p>
      <CodeBlock>
        {`{
  "text": ["日本語", "の", "文章"],
  "furigana": {
    "日本語": "にほんご",
    "文章": "ぶんしょう"
  }
}`}
      </CodeBlock>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Error Handling</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        For information on how errors are handled across all SieloTech APIs, including status codes and error formats,
        please refer to the <a href="/api/errors" className="text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">Error Handling page</a>.
      </p>
    </div>
  )
}
