import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export function Errors() {
  return (
    <div className="pb-16">
      <h1 className={`${jetbrainsMono.className} text-3xl font-bold text-gray-900 dark:text-gray-100`}>Error Handling</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        All SieloTech APIs use standard HTTP status codes to indicate the success or failure of requests.
        This page provides information about how to handle errors when using our APIs.
      </p>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>HTTP Status Codes</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        The API returns appropriate HTTP status codes for various error conditions. Common status codes include:
      </p>
      
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">200 OK</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The request was successful</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">401 Unauthorized</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Invalid or missing API key</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">403 Forbidden</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The API key doesn't have permission to perform the request</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">404 Not Found</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The requested resource doesn't exist</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">422 Unprocessable Entity</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Validation error on request data</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">429 Too Many Requests</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Rate limit exceeded</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">500 Internal Server Error</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">An error occurred on our server</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={`${jetbrainsMono.className} text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8`}>FastAPI Validation Errors</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Since our API is built with FastAPI, validation errors return in FastAPI's standard format. These typically occur with a 422 Unprocessable Entity status code when request validation fails:
      </p>
      <pre className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-x-auto">
        <code className={`${jetbrainsMono.className} text-sm text-gray-800 dark:text-gray-200`}>
        {`{
    "detail": [
        {
            "type": "missing",
            "loc": [
                "body",
                "text"
            ],
            "msg": "Field required",
            "input": {
                "tsext": "日本語の車は大好きです",
                "mode": "dictionary"
            }
        }
    ]
}`}
        </code>
      </pre>
      
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        In the example above, the request failed because the required <code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>text</code> field is missing, but there was a typo in the input (<code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>tsext</code> instead of <code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>text</code>). The validation error provides details about:
      </p>
      <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
        <li><code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>type</code>: The type of error (missing, value_error, etc.)</li>
        <li><code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>loc</code>: The location of the error (body, query, path) followed by the specific field</li>
        <li><code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>msg</code>: A human-readable error message</li>
        <li><code className={`${jetbrainsMono.className} text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded`}>input</code>: The actual input that was received</li>
      </ul>

      <h2 className={`${jetbrainsMono.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12`}>Best Practices for Error Handling</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        When working with SieloTech APIs, follow these best practices for handling errors:
      </p>
      <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
        <li>Always check the HTTP status code before processing the response</li>
        <li>Implement appropriate retry logic for 429 and 5xx errors</li>
        <li>Log detailed error information for troubleshooting</li>
        <li>Display user-friendly error messages in your application</li>
      </ul>
    </div>
  )
}
