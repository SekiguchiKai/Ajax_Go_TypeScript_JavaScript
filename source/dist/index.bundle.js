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

        // 通信が完了したならば
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            // jsonをtextデータとして受け取る
            const jsonText = httpRequest.responseText

            // textデータとして受け取ったjsonをパース
            const json = JSON.parse(jsonText);

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

    // 非同期のテスト
    // 非同期で通信しているので、HTMLの<p>が変化するよりもこちらの方が先に呼び出される
    window.alert('非同期');

})




/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTc3Y2VlZTAxNzU4MTcxMGVkYWUiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzdjZWVlMDE3NTgxNzEwZWRhZSIsImNvbnN0IGlkID0gJ2NsaWNrLWhlcmUnO1xuLy8gaWTjgafmjIflrprjgZfjgabjgIFlbGVtbnTjgpLlj5blvpdcbmNvbnN0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4vLyDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7znmbvpjLJcbi8vIOOCr+ODquODg+OCr+OBleOCjOOBn+OCieOAgeOCs+ODvOODq+ODkOODg+OCr+mWouaVsOeZuuWLlVxuZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyDnlJ/jga5qYXZhU2NyaXB044GnQWpheOOCkuihjOOBhuOBn+OCgeOBq+OBr+OAgVhNTEh0dHBSZXF1ZXN044KS5L2/55So44GZ44KLXG5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdOOCpOODs+OCueOCv+ODs+OCueOBrueUn+aIkFxuICAgIGNvbnN0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBvcGVu44Oh44K944OD44OJIDog44Oq44Kv44Ko44K544OI44KS5Yid5pyf5YyW44GZ44KLXG4gICAgLy8g56ysMeW8leaVsOOBp+OAgUdFVOOBi1BPU1Tjga7jg6rjgq/jgqjjgrnjg4jjg6Hjgr3jg4Pjg4njgpLmjIflrppcbiAgICAvLyDnrKwy5byV5pWw44Gn44CBXCLjg6rjgq/jgqjjgrnjg4jlhYjjga5VUkxcIlxuICAgIC8vIOesrDPlvJXmlbDjgafjgIHlkIzmnJ/jgYvpnZ7lkIzmnJ/jgYvjga7pgbjmip7vvIjpnZ7lkIzmnJ/jga7loLTlkIjjga/jgIF0cnVl77yJXG4gICAgaHR0cFJlcXVlc3Qub3BlbihcIkdFVFwiLCBcIi9qc29uXCIsIHRydWUpXG5cbiAgICAvLyByZWFkeVN0YXRl44OX44Ot44OR44OG44KjIDogWE1MSHR0cFJlcXVlc3Tjgqrjg5bjgrjjgqfjgq/jg4goSFRUUOODquOCr+OCqOOCueODiCnjga7jgrXjg7zjg5Djgajjga7pgJrkv6Hjga7nirbmhYtcbiAgICAvLyDjgZPjga7lgKTjgYzjgrXjg7zjg5Djgajjga7pgJrkv6HnirbmhYvjgavjgojjgaPjgablpInljJbjgZnjgotcbiAgICAvLyByZWFkeVN0YXRl44OX44Ot44OR44OG44Kj44Gu5YCk44GM5aSJ5YyW44GZ44KL44Gf44Gz44Grb25yZWFkeXN0YXRlY2hhbmdl44Kk44OZ44Oz44OI44GM55m655Sf44GZ44KLXG4gICAgLy8g44GT44Gub25yZWFkeXN0YXRlY2hhbmdl44Kk44OZ44Oz44OI44GM55m655Sf44GX44Gf44KJ44CBcmVhZHlTdGF0ZeODl+ODreODkeODhuOCo+OCkuODgeOCp+ODg+OCr+OBmeOCjOOBsOOAgeePvuWcqOOBrumAmuS/oeeKtuaFi+OCkuefpeOCi+OBk+OBqOOBjOOBp+OBjeOCi1xuXG4gICAgY29uc29sZS5sb2coaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSk7XG5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdOOCquODluOCuOOCp+OCr+ODiChIVFRQ44Oq44Kv44Ko44K544OIKeOBrm9ucmVhZHlzdGF0ZWNoYW5nZeOCpOODmeODs+ODiOOBjOeZuueUn+OBl+OBn+OCieOAgT3jgafkuI7jgYjjgZ/plqLmlbDjgYznmbrli5XjgZnjgotcbiAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8g6YCa5L+h44GM5a6M5LqG44GX44Gf44Gq44KJ44GwXG4gICAgICAgIGlmIChodHRwUmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICYmIGh0dHBSZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAvLyBqc29u44KSdGV4dOODh+ODvOOCv+OBqOOBl+OBpuWPl+OBkeWPluOCi1xuICAgICAgICAgICAgY29uc3QganNvblRleHQgPSBodHRwUmVxdWVzdC5yZXNwb25zZVRleHRcblxuICAgICAgICAgICAgLy8gdGV4dOODh+ODvOOCv+OBqOOBl+OBpuWPl+OBkeWPluOBo+OBn2pzb27jgpLjg5Hjg7zjgrlcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGpzb25UZXh0KTtcblxuICAgICAgICAgICAgLy8g6YCa5L+h44GM5a6M5LqG77yI5Y+X5L+h77yJ44GX44Gf44KJ44CB6KGM44GG5Yem55CG44KS6KiY6LyJXG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxwPuWQjeWJjTogJHtqc29uW1wiTmFtZVwiXX08L3A+XG4gICAgICAgICAgICA8cD7lnovjgIA6ICR7anNvbltcIkxhbmdUeXBlXCJdfTwvcD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZW5k44Oh44K944OD44OJIDogb3BlbuOBp+S9nOaIkOOBl+OBn0hUVFDjg6rjgq/jgqjjgrnjg4jjgpLjgrXjg7zjg5DjgbjpgIHkv6HjgZnjgotcbiAgICAvLyBQT1NU44Gu5aC05ZCI44Gv44CB6YCB5L+h44GZ44KL44OH44O844K/44KS5byV5pWw44Gn5LiO44GI44KLXG4gICAgLy8gR0VU44Gu5aC05ZCI44Gv44CBbnVsbOOCkuW8leaVsOOBp+S4juOBiOOCi1xuICAgIGh0dHBSZXF1ZXN0LnNlbmQobnVsbCk7XG5cbiAgICAvLyDpnZ7lkIzmnJ/jga7jg4bjgrnjg4hcbiAgICAvLyDpnZ7lkIzmnJ/jgafpgJrkv6HjgZfjgabjgYTjgovjga7jgafjgIFIVE1M44GuPHA+44GM5aSJ5YyW44GZ44KL44KI44KK44KC44GT44Gh44KJ44Gu5pa544GM5YWI44Gr5ZG844Gz5Ye644GV44KM44KLXG4gICAgd2luZG93LmFsZXJ0KCfpnZ7lkIzmnJ8nKTtcblxufSlcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=