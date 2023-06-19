import * as tools from './tools';
import { Page404 } from './pages/Page404';
import { PageDeals } from './pages/PageDeals';
import { PageOffice } from './pages/PageOffice';
import { PageSupport } from './pages/PageSupport';
import { PageSurface } from './pages/PageSurface';
import { PageWindows } from './pages/PageWindows';
import { PageXbox } from './pages/PageXbox';

const pageNames = ['Office', 'Windows', 'Surface', 'Xbox', 'Deals', 'Support'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'office':
			return PageOffice();
		case 'windows':
			return PageWindows();
		case 'surface':
			return PageSurface();
		case 'xbox':
			return PageXbox();
		case 'deals':
			return PageDeals();
		case 'support':
			return PageSupport();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul>
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}
