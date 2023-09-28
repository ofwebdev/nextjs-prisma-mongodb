export { default } from 'next-auth/middleware';

export const config = {
    // * + ? read the documentation
    matcher: ['/user/:id*']
}