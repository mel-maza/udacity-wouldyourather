
export const RECEIVE_THEME = 'RECEIVE_THEME';
export const CHANGE_THEME = 'CHANGE_THEME';

export function receiveTheme(theme) {
    return {
        type: RECEIVE_THEME,
        theme
    }
};

export function changeTheme(toUnicorn) {
    return {
        type: CHANGE_THEME,
        toUnicorn
    }
}