// app.js

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http');
 
var bodyParser = require('body-parser')
// 익스프레스 객체 생성
var app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});
app.use(express.static('css'));
app.use(express.static('image'));
app.use(express.static('frontawesome'));
app.use(express.static('js'));
app.use(express.static('plugins'))
app.use(express.static('scss'));;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get("/",function(req,res){
  res.sendfile("index.html");
});