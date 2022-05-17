import Home from '../pages/Home';
import Charanters from '../pages/Characters';
import Error404 from '../pages/Error404';
import Header from '../templates/Header';

const routes = {
    '/': Home,
    '/:id':Charanters,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;