import pages from './pages';

export const routes = {
    index: { path: '/', name: 'Home', component: pages.IndexPage },
    results: { path: '/results', name: 'Results', component: pages.ResultPage },
    info: { path: '/info/:question_id', name: 'Info', component: pages.InfoPage },
    notFound: { path: '*', name: 'Not Found', component: pages.NotFoundPage },
};

const apiBaseUrl = 'http://api.stackexchange.com/2.2';

export const api = {
    search: `${apiBaseUrl}/search/advanced`,
    answers: `${apiBaseUrl}/questions/:question_id/answers`,
    questions: `${apiBaseUrl}/questions/:question_id`
};


