import Image from 'next/image';

export const SocialButtons = ({ action }) => {
	function statusChangeCallback(response) {
		// Called with the results from FB.getLoginStatus().
		console.log('statusChangeCallback');
		console.log(response); // The current login status of the person.
		if (response.status === 'connected') {
			// Logged into your webpage and Facebook.
			testAPI();
		} else {
			// Not logged into your webpage or we are unable to tell.
			console.log('error');
		}
	}

	function checkLoginState() {
		// Called when a person is finished with the Login Button.
		FB.getLoginStatus(function (response) {
			// See the onlogin handler
			statusChangeCallback(response);
		});
	}

	window.fbAsyncInit = function () {
		FB.init({
			appId: '1273805316692082',
			cookie: true, // Enable cookies to allow the server to access the session.
			xfbml: true, // Parse social plugins on this webpage.
			version: '1.00', // Use this Graph API version for this call.
		});

		FB.getLoginStatus(function (response) {
			// Called after the JS SDK has been initialized.
			statusChangeCallback(response); // Returns the login status.
		});
	};

	function testAPI() {
		// Testing Graph API after login.  See statusChangeCallback() for when this call is made.
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function (response) {
			console.log('Successful login for: ' + response.name);
			document.getElementById('status').innerHTML =
				'Thanks for logging in, ' + response.name + '!';
		});
	}

	return (
		<div>
			<div className="flex py-1 items-center w-full max-w-[512px]">
				<span className="flex-grow border-t border-gray-dark"></span>
				<span className="flex-shrink mx-4 text-gray-400">o</span>
				<span className="flex-grow border-t border-gray-dark"></span>
			</div>
			<button className="relative button w-full max-w-[512px] border border-gray-dark mt-2 text-black ">
				<div className="w-max absolute">
					<Image src={require('../../public/assets/iconGoogle.png')} alt="googleIcon" />
				</div>
				<span>{action} con Google</span>
			</button>
			<button
				className="relative button w-full max-w-[512px] bg-facebook mt-2 text-white"
				onClick={checkLoginState}
			>
				<div className="w-max absolute">
					<Image
						src={require('../../public/assets/iconFacebook.png')}
						alt="facebookIcon"
					/>
				</div>
				<span>{action} con Facebook</span>
			</button>
		</div>
	);
};
