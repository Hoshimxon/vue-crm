import localizeFilter from '@/filters/localize.filter'
export default {
    'logout': localizeFilter('LoggedOut'),
    'login': localizeFilter('LoginStarted'),
    'auth/user-not-found': localizeFilter('UserNotExists'),
    'auth/wrong-password': localizeFilter('WrongPass'),
    'auth/email-already-in-use': localizeFilter('EmailExists')
}