export const updatePlayer = (key, value) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'PLAY',
                key,
                value
            })
        } catch (error) {

        }
    }
}