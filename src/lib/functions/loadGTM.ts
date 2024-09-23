export function loadGTM() {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.type = 'text/partytown';
		script.innerHTML = `
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
        `;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
}

export function loadGA() {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.type = 'text/partytown';
		script.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WBDN2LZ11J');
        `;
		script.onload = () => {
			const gaScript = document.createElement('script');
			gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-WBDN2LZ11J';
			gaScript.async = true;
			gaScript.type = 'text/partytown';
			gaScript.onload = resolve;
			gaScript.onerror = reject;
			document.head.appendChild(gaScript);
		};
		script.onerror = reject;
		document.head.appendChild(script);
	});
}

// //@ts-nocheck
// export function loadGTM() {
// 	return new Promise((resolve, reject) => {
// 		(function (w, d, s, l, i) {
// 			w[l] = w[l] || [];
// 			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
// 			var f = d.getElementsByTagName(s)[0],
// 				j = d.createElement(s) as HTMLScriptElement,
// 				dl = l != 'dataLayer' ? '&l=' + l : '';
// 			j.async = true;
// 			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
// 			j.onload = resolve;
// 			j.onerror = reject;
// 			f.parentNode.insertBefore(j, f);
// 		})(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
// 	});
// }
// // Google Analytics script (to be added after GTM loads)
// export function loadGA() {
// 	return new Promise((resolve, reject) => {
// 		const script = document.createElement('script');
// 		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WBDN2LZ11J';
// 		script.async = true;
// 		script.onload = () => {
// 			window.dataLayer = window.dataLayer || [];
// 			function gtag() {
// 				dataLayer.push(arguments);
// 			}
// 			gtag('js', new Date());
// 			gtag('config', 'G-WBDN2LZ11J');
// 			resolve();
// 		};
// 		script.onerror = reject;
// 		document.head.appendChild(script);
// 	});
// }
