const { User } = require('./database')

const LocalStrategy = require('passport-local').Strategy

const initializingPassport = (passport) => {
    passport.use(new LocalStrategy({
        usernameField : 'email',
        passswordField : 'password',
    }), 
    async (email, password, done) => {
        const user = await User.findOne({username})

        if(!user) return done(null, false)
        if(user.password !== password) return done(null, false)
        return done(null, user)
    })
}

module.exports = initializingPassport