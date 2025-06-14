export function Privacy() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Privacy Policy</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Last updated: June 14, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Introduction</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        This Privacy Policy explains how SieloTech API ("we," "our," or "us") handles data when you use our API services. 
        We are committed to protecting your privacy and being transparent about our data practices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Data Collection</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        <strong>No Intentional Data Collection:</strong> We do not intentionally collect, store, or log any personal data from users of our API services. 
        This includes, but is not limited to:
      </p>
      <ul className="list-disc mt-2 ml-4 text-gray-600 dark:text-gray-300">
        <li className="pl-2"><div className="ml-2">IP addresses</div></li>
        <li className="pl-2"><div className="ml-2">User input data</div></li>
        <li className="pl-2"><div className="ml-2">Location data</div></li>
        <li className="pl-2"><div className="ml-2">Device information</div></li>
        <li className="pl-2"><div className="ml-2">Usage patterns</div></li>
        <li className="pl-2"><div className="ml-2">Cookies or similar tracking technologies</div></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Infrastructure and Hosting</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Our services are hosted on Google Cloud Run in the European Union (The Netherlands). While we do not collect data ourselves, 
        you should be aware of the following:
      </p>
      <ul className="list-disc mt-2 ml-4 text-gray-600 dark:text-gray-300">
        <li className="pl-2"><div className="ml-2"><strong>Automatic Platform Logging:</strong> Google Cloud Run may automatically collect certain technical data as part of its standard operation, including temporary logs of requests. These logs are subject to Google Cloud's data retention policies and are not used by us to identify individuals.</div></li>
        <li className="pl-2"><div className="ml-2"><strong>Infrastructure Security:</strong> We rely on Google Cloud's security infrastructure to maintain the integrity and availability of our services.</div></li>
      </ul>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        For more information about Google Cloud's data practices, you can refer to the <a href="https://cloud.google.com/terms/cloud-privacy-notice" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300" target="_blank" rel="noopener noreferrer">Google Cloud Privacy Notice</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Legal Basis and GDPR Compliance</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        As we do not intentionally collect personal data, most GDPR provisions related to data processing do not apply to our operations. 
        However, we recognize that the automatic technical logs maintained by our infrastructure provider could potentially contain information 
        that might be considered personal data under certain interpretations of applicable law.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        The legal basis for any incidental processing that might occur through our infrastructure provider's automated systems is our legitimate interest 
        in providing our services securely and efficiently.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Your Rights</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Given that we do not collect or maintain personal data, we generally cannot identify you or your information in our systems. 
        Therefore, we cannot directly respond to data subject access requests. However, if you have any concerns about your privacy in relation to our services, 
        please contact us using the information below.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Changes to This Privacy Policy</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
        We encourage you to review this policy periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Contact Us</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        If you have any questions about this Privacy Policy or our data practices, please contact 
        us at: <a href="mailto:marcellonobili@pm.me" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">marcellonobili@pm.me</a>
      </p>
    </div>
  )
}

