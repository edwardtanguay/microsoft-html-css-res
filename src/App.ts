import './styles/main.scss';
import './styles/responsive.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
    <img width="116" src="images/logo.png" alt="" />
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
<footer>
	<label for="pet-select">English (United States)</label>
	<select name="pets" id="pet-select" >Languch
	<option value="english">English</option>
	<option value="deutsch">Deutsch</option>
	</select>
	<a href="#">Sitemap</a>
	<a href="#">Contact Microsoft</a>
	<a href="#">privacy & cookies</a>
	<a href="#">Terms of use</a>
	<a href="#">Trademarks</a>
	<a href="#">Safety & eco</a>
	<a href="#">About our ads</a>
	<a href="#">© Microsoft 2023</a>
</footer>
`;