package main

import (
	"fmt"
	"net/http"
	"html/template"
	"encoding/json"
)

func main() {
	fmt.Println("The Server runs with http://localhost:8080/")
	http.Handle("/source/", http.StripPrefix("/source/", http.FileServer(http.Dir("source/"))))
	http.HandleFunc("/", Handler)
	http.HandleFunc("/json", JsonHandler)
	http.ListenAndServe(":8080", nil)
}

type Language struct {
	Name     string
	LangType string
}

func Handler(w http.ResponseWriter, r *http.Request) {

	tmpl := template.Must(template.ParseFiles("./view/index.html"))
	tmpl.Execute(w, nil)
}

func JsonHandler(w http.ResponseWriter, r *http.Request) {

	l := Language{Name : "Go", LangType: "Static"}


	// Header() : WriteHeaderによって送信されるheaderのmapを返す
	// func (h Header) Set(key, value string)
	// headerエンティティのkeyに対してvalueを関連付ける
	w.Header().Set("Content-Type", "application/json; charset=utf-8")

	// WriteHeader(int) : ステータスコードと共にHTTPのレスポンスヘッダを送信する
	w.WriteHeader(http.StatusCreated)

	// Encoderは、出力ストリームにJSONオブジェクトを書き込む
	// NewEncoder(w io.Writer) : wに書き込みを行い、新しいEncoderを返す
	// Encode() : 引数のJSONエンコーディングをWriterに書き込む
	json.NewEncoder(w).Encode(l)

	//fmt.Fprintf(w, bl)

}