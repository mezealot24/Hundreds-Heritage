import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-16 mt-24">
			<h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-4">
						1. Information We Collect
					</h2>
					<p>
						We collect personal information that you voluntarily provide to us,
						including when you:
					</p>
					<ul className="list-disc ml-6 mt-2">
						<li>Place an order on our website</li>
						<li>Create an account</li>
						<li>Subscribe to our newsletter</li>
						<li>Contact us via forms or support channels</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">
						2. How We Use Your Information
					</h2>
					<p>We use your information to:</p>
					<ul className="list-disc ml-6 mt-2">
						<li>Process and fulfill orders</li>
						<li>
							Send newsletters and promotional materials (with your consent)
						</li>
						<li>Enhance website functionality and user experience</li>
						<li>Comply with legal and regulatory requirements</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">
						3. Sharing and Disclosure
					</h2>
					<p>
						We do not sell or rent your personal information to third parties.
						However, we may share it with:
					</p>
					<ul className="list-disc ml-6 mt-2">
						<li>Trusted service providers who help us operate our business</li>
						<li>Government or legal authorities if required by law</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
					<p>
						We use appropriate technical and organizational measures to protect
						your personal data from unauthorized access, disclosure, alteration,
						or destruction.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
					<p>You have the right to:</p>
					<ul className="list-disc ml-6 mt-2">
						<li>Access the personal information we hold about you</li>
						<li>Correct or update any inaccurate data</li>
						<li>Request deletion of your personal data</li>
						<li>Withdraw consent to marketing communications at any time</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">6. Cookies Policy</h2>
					<p>
						Currently, our website does not use cookies to collect or store
						personal information. If we introduce cookie-based features (such as
						user preferences, analytics, or shopping functionality) in the
						future, we will update this policy and notify users accordingly.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
					<p>
						If you have any questions or concerns about this Privacy Policy,
						please contact us at:
					</p>
					<p className="mt-2">Email: hundredsheritage.th@gmail.com</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">
						8. Changes to This Policy
					</h2>
					<p>
						We may update this Privacy Policy periodically. Any changes will be
						posted on this page with the updated effective date. Please review
						this page regularly to stay informed.
					</p>
				</section>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
