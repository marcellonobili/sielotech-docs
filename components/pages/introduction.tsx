export function Introduction() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Introduction</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Thank you for checking out the <a href="https://sielotech.com" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">SieloTech</a> API documentation ❤️<br/><br/>
        This API allows you to access the endpoints that I've built and
        the ones to come in a centralized way. It now contains just the <a href="/api/furigana" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">Furigana endpoint</a>, but I'm working on others.<br/><br/>
        Usually I build an API for one of my products first and after I'm satisfied with it, I make it available
        for other developers.<br/><br/>
        As usual, for any problem, question or suggestion, you can contact me directly at <a href="mailto:marcellonobili@pm.me" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">marcellonobili@pm.me</a>.
      </p>
    </div>
  )
}

