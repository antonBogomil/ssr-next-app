export function getUpdateTime(update) {
    const date = Date.now();
    const diff = date - new Date(update);
    return new Date(diff).getHours();
}
