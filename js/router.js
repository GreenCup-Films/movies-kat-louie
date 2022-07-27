import Home, {HomeEvents} from "./views/Home.js";
import About, {AboutEvents} from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import addMovieView, {addMovieEvent} from "./views/add-movie.js";
import movieView,{movieEvent} from "./views/movies.js";
/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {
                movies: {
                    url: "https://confirmed-secretive-opal.glitch.me/movies"
                }
            },
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/movies': {
            returnView: movieView,
            state: {
                movies: {
                    url: "https://confirmed-secretive-opal.glitch.me/movies"
                    }},
            uri: '/movies',
            title: 'Movies',
            viewEvent: movieEvent
        },

        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: 'About',
            viewEvent: AboutEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/add-movie': {
            returnView: addMovieView,
            state: {},
            uri: "/add-movie",
            title: 'Add Movie',
            viewEvent: addMovieEvent
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}