export function getUpdateTime(update) {
    const date = Date.now();
    const diff = date - new Date(update);
    return Math.round(new Date(diff)/1000/60/60);
}
