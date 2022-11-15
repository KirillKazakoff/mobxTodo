export function timeoutMock(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), timeout);
    });
}
