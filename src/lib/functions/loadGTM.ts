//@ts-nocheck
export function loadGTM() {
	return new Promise((resolve, reject) => {
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s) as HTMLScriptElement,
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			j.onload = resolve;
			j.onerror = reject;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
	});
}
// Google Analytics script (to be added after GTM loads)
export function loadGA() {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WBDN2LZ11J';
		script.async = true;
		script.onload = () => {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-WBDN2LZ11J');
			resolve();
		};
		script.onerror = reject;
		document.head.appendChild(script);
	});
}
