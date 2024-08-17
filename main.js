if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js')
		.then(registration => {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		})
		.catch(error => {
			console.log('ServiceWorker registration failed: ', error);
		});
}
document.addEventListener('DOMContentLoaded', () => {
	fetch('/api/data')
		.then(response => response.json())
		.then(data => {
			const content = document.getElementById('content');
			content.textContent = data.message;
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
});
