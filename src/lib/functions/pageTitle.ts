// src/lib/pageTitles.ts

export function getPageTitle(pagePath: string): string {
	const isPortuguese = pagePath.startsWith('/pt-BR/');
	if (isPortuguese) {
		if (pagePath === '/pt-BR/') return 'Início | My Menthor';
		if (pagePath.startsWith('/pt-BR/about')) return 'Sobre Nós | My Menthor';
		if (pagePath.startsWith('/pt-BR/products')) return 'Produtos | My Menthor';
		if (pagePath.startsWith('/pt-BR/contact')) return 'Contato | My Menthor';
		if (pagePath.startsWith('/pt-BR/solutions')) return 'Soluções | My Menthor';
		if (pagePath.startsWith('/pt-BR/customers_and_partners'))
			return 'Clientes e Parceiros | My Menthor';
		if (pagePath.startsWith('/pt-BR/resources')) return 'Recursos | My Menthor';
		if (pagePath.startsWith('/pt-BR/company')) return 'Empresa | My Menthor';
		if (pagePath.startsWith('/pt-BR/privacy')) return 'Política de Privacidade | My Menthor';
		if (pagePath.startsWith('/pt-BR/terms')) return 'Termos de Serviço | My Menthor';
		if (pagePath.startsWith('/pt-BR/cookies')) return 'Cookies | My Menthor';
	} else {
		if (pagePath === '/') return 'Home | My Menthor';
		if (pagePath.startsWith('/about')) return 'About Us | My Menthor';
		if (pagePath.startsWith('/products')) return 'Products | My Menthor';
		if (pagePath.startsWith('/contact')) return 'Contact | My Menthor';
		if (pagePath.startsWith('/solutions')) return 'Solutions | My Menthor';
		if (pagePath.startsWith('/customers_and_partners'))
			return 'Customers and Partners | My Menthor';
		if (pagePath.startsWith('/resources')) return 'Resources | My Menthor';
		if (pagePath.startsWith('/company')) return 'Company | My Menthor';
		if (pagePath.startsWith('/privacy')) return 'Privacy Policy | My Menthor';
		if (pagePath.startsWith('/terms')) return 'Terms of Service | My Menthor';
		if (pagePath.startsWith('/cookies')) return 'Cookies | My Menthor';
	}

	return 'My Menthor';
}
