import {CHANGE_THEME, RECEIVE_THEME} from "../actions/theme";
import background from "../images/neven-krcmarek-425319-unsplash.jpg";

export default function theme(state = null, action) {
    switch (action.type) {
        case RECEIVE_THEME :
            return action.theme;
        case CHANGE_THEME:
            if (action.toUnicorn) {
                return {
                    ...state,
                    background: {
                        backgroundImage: `url(https://media.giphy.com/media/l4KhURM4azUFqHbOg/giphy.gif)`,
                        backgroundSize: '600px 600px',
                        paddingTop: '80px'
                    }
                }
            };
            return {
                ...state,
                background: {
                    backgroundImage: `url(${background})`,
                    backgroundSize: '1200px 900px',
                    paddingTop: '80px',
                }
            };
        default:
            return state
    }
}