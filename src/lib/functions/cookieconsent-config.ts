import * as CookieConsent from 'vanilla-cookieconsent';
import { loadGA, loadGTM } from './loadGTM';
// function getUserLanguage() {
// 	if (typeof navigator !== 'undefined') {
// 		return navigator.language || navigator.userLanguage || 'en';
// 	}
// 	const userLang = navigator.language;
// 	return userLang.toLowerCase() === 'pt-BR' ? 'pt-BR' : 'en';
// }

export function createConfig(language: string): CookieConsent.CookieConsentConfig {
	return {
		categories: {
			necessary: {
				enabled: true,
				readOnly: true
			},
			analytics: {
				autoClear: {
					cookies: [
						{
							name: /^_ga/ // regex: match all cookies starting with '_ga'
						},
						{
							name: '_gid' // string: exact cookie name
						}
					]
				},

				// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
				services: {
					ga: {
						label: 'Google Analytics',
						onAccept: () => {
							Promise.all([loadGTM(), loadGA()]);
							// .then(() => {
							// 	console.log('.');
							// })
							// .catch((error) => {
							// 	console.error('Error loading GTM or GA:', error);
							// });
							// .then(() => {
							// 	console.log('GTM loaded and ready');
							// })
							// .catch((error) => {
							// 	console.error('Error loading GTM', error);
							// });
						},
						onReject: () => {
							console.log('rejected');
							return;
						}
					}
					// another: {
					// 	label: 'Another service',
					// 	onAccept: () => {},
					// 	onReject: () => {}
					// }
				}
			},
			ads: {}
		},

		// onFirstConsent: ({ cookie }) => {
		// 	console.log('onFirstConsent fired', cookie);
		// },

		// onConsent: ({ cookie }) => {
		// 	console.log('onConsent fired!', cookie, CookieConsent.getUserPreferences());
		// },

		// onChange: ({ changedCategories, changedServices }) => {
		// 	console.log('onChange fired!', changedCategories, changedServices);
		// },

		// onModalReady: ({ modalName }) => {
		// 	console.log('ready:', modalName);
		// },

		// onModalShow: ({ modalName }) => {
		// 	console.log('visible:', modalName);
		// },

		// onModalHide: ({ modalName }) => {
		// 	console.log('hidden:', modalName);
		// },

		guiOptions: {
			consentModal: {
				layout: 'box inline',
				position: 'bottom left',
				equalWeightButtons: true,
				flipButtons: false
			},
			preferencesModal: {
				layout: 'box',
				equalWeightButtons: true,
				flipButtons: false
			}
		},

		language: {
			default: language,
			translations: {
				en: {
					consentModal: {
						title: 'We use cookies',
						description:
							'We use cookies to enhance your browsing experience, remember your preferences, and provide personalized content.',
						acceptAllBtn: 'Accept all',
						acceptNecessaryBtn: 'Reject all',
						showPreferencesBtn: 'Manage Individual preferences',
						footer: `
            <a href="/terms-of-service" target="_blank">Terms of Service</a>
            <a href="/privacy-policy" target="_blank">Privacy Policy</a>
          `
					},
					preferencesModal: {
						title: 'Manage cookie preferences',
						acceptAllBtn: 'Accept all',
						acceptNecessaryBtn: 'Reject all',
						savePreferencesBtn: 'Accept current selection',
						closeIconLabel: 'Close modal',
						serviceCounterLabel: 'Service|Services',
						sections: [
							{
								title: 'Your Privacy Choices',
								description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
							},
							{
								title: 'Strictly Necessary',
								description:
									'These cookies are essential for the proper functioning of the website and cannot be disabled.',

								//this field will generate a toggle linked to the 'necessary' category
								linkedCategory: 'necessary'
							},
							{
								title: 'Performance and Analytics',
								description:
									'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
								linkedCategory: 'analytics',
								cookieTable: {
									caption: 'Cookie table',
									headers: {
										name: 'Cookie',
										domain: 'Domain',
										desc: 'Description'
									},
									body: [
										{
											name: '_ga',
											domain: 'google-analytics.com',
											desc: 'Used by Google Analytics to distinguish users. This cookie helps track user interactions on your site for analytics purposes.'
										},
										{
											name: '_gid',
											domain: 'google-analytics.com',
											desc: 'Set by Google Analytics to distinguish users. Used to track user interactions for analytics purposes and expires after 24 hours.'
										}
									]
								}
							},
							{
								title: 'Targeting and Advertising',
								description:
									'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
								linkedCategory: 'ads'
							},
							{
								title: 'More information',
								description:
									'For any queries in relation to my policy on cookies and your choices, please <a href="/company#contact" target="_blank"">contact us</a>'
							}
						]
					}
				},
				'pt-BR': {
					consentModal: {
						title: 'Usamos cookies',
						description:
							'Usamos cookies para melhorar sua experiência de navegação, lembrar suas preferências e fornecer conteúdo personalizado.',
						acceptAllBtn: 'Aceitar todos',
						acceptNecessaryBtn: 'Rejeitar todos',
						showPreferencesBtn: 'Gerenciar preferências individuais',
						footer: `
            <a href="/pt-BR/terms-of-service" target="_blank">Termos de Uso</a>
            <a href="/pt-BR/privacy-policy" target="_blank">Política de Privacidade</a>
          `
					},
					preferencesModal: {
						title: 'Gerenciar preferências de cookies',
						acceptAllBtn: 'Aceitar todos',
						acceptNecessaryBtn: 'Rejeitar todos',
						savePreferencesBtn: 'Aceitar seleção atual',
						closeIconLabel: 'Fechar modal',
						serviceCounterLabel: 'Serviço|Serviços',
						sections: [
							{
								title: 'Suas Escolhas de Privacidade',
								description: `Neste painel, você pode expressar algumas preferências relacionadas ao processamento de suas informações pessoais. Você pode revisar e alterar as escolhas expressas a qualquer momento, ressurgindo este painel através do link fornecido. Para negar seu consentimento às atividades específicas de processamento descritas abaixo, mude os interruptores para "desligado" ou use o botão "Rejeitar todos" e confirme que deseja salvar suas escolhas.`
							},
							{
								title: 'Estritamente Necessário',
								description:
									'Esses cookies são essenciais para o funcionamento adequado do site e não podem ser desativados.',

								linkedCategory: 'necessary'
							},
							{
								title: 'Desempenho e Análise',
								description:
									'Esses cookies coletam informações sobre como você usa nosso site. Todos os dados são anonimizados e não podem ser usados para identificá-lo.',
								linkedCategory: 'analytics',
								cookieTable: {
									caption: 'Tabela de cookies',
									headers: {
										name: 'Cookie',
										domain: 'Domínio',
										desc: 'Descrição'
									},
									body: [
										{
											name: '_ga',
											domain: 'google-analytics.com',
											desc: 'Usado pelo Google Analytics para distinguir usuários. Este cookie ajuda a rastrear interações dos usuários em seu site para fins analíticos.'
										},
										{
											name: '_gid',
											domain: 'google-analytics.com',
											desc: 'Definido pelo Google Analytics para distinguir usuários. Usado para rastrear interações dos usuários para fins analíticos e expira após 24 horas.'
										}
									]
								}
							},
							{
								title: 'Publicidade e Alvo',
								description:
									'Esses cookies são usados para tornar as mensagens publicitárias mais relevantes para você e seus interesses. A intenção é exibir anúncios que sejam relevantes e envolventes para o usuário individual e, portanto, mais valiosos para editores e anunciantes de terceiros.',
								linkedCategory: 'ads'
							},
							{
								title: 'Mais informações',
								description:
									'Para qualquer dúvida relacionada à minha política de cookies e suas escolhas, por favor <a href="/pt-BR/company#contact" target="_blank">entre em contato conosco</a>'
							}
						]
					}
				}
			}
		}
	};
}
