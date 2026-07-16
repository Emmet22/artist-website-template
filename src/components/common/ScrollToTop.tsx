import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function ScrollToTop() {
    // get the current pathname
    const { pathname } = useLocation();

    /*
        React hook to scroll to the top of a new page.
        The (0, 0) are the x and y coordinates to scroll to.
        The [pathname] is called a "dependency array", which
        tells React to only run this effect when the pathname
        changes, (aka when a new page is loaded).
    */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // return null to ensure component renders nothing
    return null;
}

export default ScrollToTop;