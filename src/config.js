import pages from './pages';

export const routes = {
    index: { path: '/', name: 'Search to stackoverflow site', component: pages.IndexPage },
    results: { path: '/results', name: 'Results', component: pages.ResultPage },
    info: { path: '/info', name: 'Info', component: pages.InfoPage },
    notFound: { path: '*', name: 'Not Found', component: pages.NotFoundPage },
};

export const API = {

};
