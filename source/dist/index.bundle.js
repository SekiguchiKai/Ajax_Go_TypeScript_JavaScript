/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const id = 'click-here';
// idで指定して、elemntを取得
const e = document.getElementById(id);
// イベントリスナー登録
// クリックされたら、コールバック関数発動
e.addEventListener('click', () => {
    // 生のjavaScriptでAjaxを行うためには、XMLHttpRequestを使用する

    // XMLHttpRequestインスタンスの生成
    const httpRequest = new XMLHttpRequest();

    // openメソッド : リクエストを初期化する
    // 第1引数で、GETかPOSTのリクエストメソッドを指定
    // 第2引数で、"リクエスト先のURL"
    // 第3引数で、同期か非同期かの選択（非同期の場合は、true）
    httpRequest.open("GET", "/json", true)

    // readyStateプロパティ : XMLHttpRequestオブジェクト(HTTPリクエスト)のサーバとの通信の状態
    // この値がサーバとの通信状態によって変化する
    // readyStateプロパティの値が変化するたびにonreadystatechangeイベントが発生する
    // このonreadystatechangeイベントが発生したら、readyStateプロパティをチェックすれば、現在の通信状態を知ることができる

    console.log(httpRequest.readyState);

    // XMLHttpRequestオブジェクト(HTTPリクエスト)のonreadystatechangeイベントが発生したら、=で与えた関数が発動する
    httpRequest.onreadystatechange = () => {

        console.log("onreadystatechange");
        console.log(httpRequest.readyState);

        // 通信が完了したならば
        if (httpRequest.readyState === 4) {
            // jsonをtextデータとして受け取る
            const jsonText = httpRequest.responseText


            console.log("200");
            console.log(jsonText);

            // textデータとして受け取ったjsonをパース
            const json = JSON.parse(jsonText);

            console.log('コールバックが呼ばれた')

            console.log(json)

            // 通信が完了（受信）したら、行う処理を記載
            e.innerHTML = `
            <p>名前: ${json["Name"]}</p>
            <p>型　: ${json["LangType"]}</p>
            `
        }
    }
    // sendメソッド : openで作成したHTTPリクエストをサーバへ送信する
    // POSTの場合は、送信するデータを引数で与える
    // GETの場合は、nullを引数で与える
    httpRequest.send(null);

    window.alert('非同期');

})




/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzMxNjY1OGMwMmViMWFhZmYyMzUiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQyxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzMxNjY1OGMwMmViMWFhZmYyMzUiLCJjb25zdCBpZCA9ICdjbGljay1oZXJlJztcbi8vIGlk44Gn5oyH5a6a44GX44Gm44CBZWxlbW5044KS5Y+W5b6XXG5jb25zdCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O855m76YyyXG4vLyDjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jgonjgIHjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDnmbrli5VcbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8g55Sf44GuamF2YVNjcmlwdOOBp0FqYXjjgpLooYzjgYbjgZ/jgoHjgavjga/jgIFYTUxIdHRwUmVxdWVzdOOCkuS9v+eUqOOBmeOCi1xuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3TjgqTjg7Pjgrnjgr/jg7Pjgrnjga7nlJ/miJBcbiAgICBjb25zdCBodHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gb3BlbuODoeOCveODg+ODiSA6IOODquOCr+OCqOOCueODiOOCkuWIneacn+WMluOBmeOCi1xuICAgIC8vIOesrDHlvJXmlbDjgafjgIFHRVTjgYtQT1NU44Gu44Oq44Kv44Ko44K544OI44Oh44K944OD44OJ44KS5oyH5a6aXG4gICAgLy8g56ysMuW8leaVsOOBp+OAgVwi44Oq44Kv44Ko44K544OI5YWI44GuVVJMXCJcbiAgICAvLyDnrKwz5byV5pWw44Gn44CB5ZCM5pyf44GL6Z2e5ZCM5pyf44GL44Gu6YG45oqe77yI6Z2e5ZCM5pyf44Gu5aC05ZCI44Gv44CBdHJ1Ze+8iVxuICAgIGh0dHBSZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCIvanNvblwiLCB0cnVlKVxuXG4gICAgLy8gcmVhZHlTdGF0ZeODl+ODreODkeODhuOCoyA6IFhNTEh0dHBSZXF1ZXN044Kq44OW44K444Kn44Kv44OIKEhUVFDjg6rjgq/jgqjjgrnjg4gp44Gu44K144O844OQ44Go44Gu6YCa5L+h44Gu54q25oWLXG4gICAgLy8g44GT44Gu5YCk44GM44K144O844OQ44Go44Gu6YCa5L+h54q25oWL44Gr44KI44Gj44Gm5aSJ5YyW44GZ44KLXG4gICAgLy8gcmVhZHlTdGF0ZeODl+ODreODkeODhuOCo+OBruWApOOBjOWkieWMluOBmeOCi+OBn+OBs+OBq29ucmVhZHlzdGF0ZWNoYW5nZeOCpOODmeODs+ODiOOBjOeZuueUn+OBmeOCi1xuICAgIC8vIOOBk+OBrm9ucmVhZHlzdGF0ZWNoYW5nZeOCpOODmeODs+ODiOOBjOeZuueUn+OBl+OBn+OCieOAgXJlYWR5U3RhdGXjg5fjg63jg5Hjg4bjgqPjgpLjg4Hjgqfjg4Pjgq/jgZnjgozjgbDjgIHnj77lnKjjga7pgJrkv6HnirbmhYvjgpLnn6XjgovjgZPjgajjgYzjgafjgY3jgotcblxuICAgIGNvbnNvbGUubG9nKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUpO1xuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3Tjgqrjg5bjgrjjgqfjgq/jg4goSFRUUOODquOCr+OCqOOCueODiCnjga5vbnJlYWR5c3RhdGVjaGFuZ2XjgqTjg5njg7Pjg4jjgYznmbrnlJ/jgZfjgZ/jgonjgIE944Gn5LiO44GI44Gf6Zai5pWw44GM55m65YuV44GZ44KLXG4gICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25yZWFkeXN0YXRlY2hhbmdlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhodHRwUmVxdWVzdC5yZWFkeVN0YXRlKTtcblxuICAgICAgICAvLyDpgJrkv6HjgYzlrozkuobjgZfjgZ/jgarjgonjgbBcbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIC8vIGpzb27jgpJ0ZXh044OH44O844K/44Go44GX44Gm5Y+X44GR5Y+W44KLXG4gICAgICAgICAgICBjb25zdCBqc29uVGV4dCA9IGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dFxuXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAwXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvblRleHQpO1xuXG4gICAgICAgICAgICAvLyB0ZXh044OH44O844K/44Go44GX44Gm5Y+X44GR5Y+W44Gj44GfanNvbuOCkuODkeODvOOCuVxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoanNvblRleHQpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn44Kz44O844Or44OQ44OD44Kv44GM5ZG844Gw44KM44GfJylcblxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbilcblxuICAgICAgICAgICAgLy8g6YCa5L+h44GM5a6M5LqG77yI5Y+X5L+h77yJ44GX44Gf44KJ44CB6KGM44GG5Yem55CG44KS6KiY6LyJXG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxwPuWQjeWJjTogJHtqc29uW1wiTmFtZVwiXX08L3A+XG4gICAgICAgICAgICA8cD7lnovjgIA6ICR7anNvbltcIkxhbmdUeXBlXCJdfTwvcD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZW5k44Oh44K944OD44OJIDogb3BlbuOBp+S9nOaIkOOBl+OBn0hUVFDjg6rjgq/jgqjjgrnjg4jjgpLjgrXjg7zjg5DjgbjpgIHkv6HjgZnjgotcbiAgICAvLyBQT1NU44Gu5aC05ZCI44Gv44CB6YCB5L+h44GZ44KL44OH44O844K/44KS5byV5pWw44Gn5LiO44GI44KLXG4gICAgLy8gR0VU44Gu5aC05ZCI44Gv44CBbnVsbOOCkuW8leaVsOOBp+S4juOBiOOCi1xuICAgIGh0dHBSZXF1ZXN0LnNlbmQobnVsbCk7XG5cbiAgICB3aW5kb3cuYWxlcnQoJ+mdnuWQjOacnycpO1xuXG59KVxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==