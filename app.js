var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var router = express.Router()
var index = require('./routes/index')
var api = require('./routes/api')
var signup = require('./routes/signup')
var signup_process = require('./routes/signup_process')
var login = require('./routes/login')
var login_process = require('./routes/login_process')
var home = require('./routes/home')
var upload_process = require('./routes/upload_process')
var email_verification = require('./routes/email_verification')
var influencers = require('./routes/influencers')
var up_process = require('./routes/upload_loading')
var download = require('./routes/download')
var RedisStore = require('connect-redis')(session)

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));
app.use(cookieParser('ifu438ujfsoifj30cmsdijfi4'))
app.use(session({secret: "ifu438ujfsoifj30cmsdijfi4", resave: true, saveUninitialized: true, cookie : {maxAge: 60000}}));

app.use('/', index)
app.use('/signup', signup)
app.use('/signup_process', signup_process)
app.use('/login', login)
app.use('/login_process', login_process)
app.use('/home/', home)
app.use('/upload_process', upload_process)
app.use('/api', api)
app.use('/email_verification', email_verification)
app.use('/influencers', influencers)
app.use('/process', up_process)
app.use('/download', download)
//src
app.use('/src', express.static('views'))

app.use('/build', express.static('build'))
app.use('/assets', express.static('assets'))
app.use('/js', express.static('assets/js'))
app.use('/css', express.static('assets/css'))
app.use('/images', express.static('assets/images'))
app.use('/videos', express.static('assets/videos'))
app.use('/mail', express.static('assets/mail'))
app.use('/fonts', express.static('assets/fonts'))
app.use('/pdf', express.static('assets/pdf'))
app.use('/pages', express.static('pages'))
app.use('/web-app', express.static('assets/web-app'))
app.use('/images', express.static('assets/web-app/images'))

app.listen(port)
console.log('Magic happens on port ' + port);