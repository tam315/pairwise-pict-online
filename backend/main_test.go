package main

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func performRequest(r http.Handler, method, path string, body io.Reader) *httptest.ResponseRecorder {
	req, _ := http.NewRequest(method, path, body)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	return w
}

func TestReadiness(t *testing.T) {
	router := SetupRouter()

	response := performRequest(router, "GET", "/", nil)

	assert.Equal(t, http.StatusOK, response.Code)
	assert.Equal(t, "ok", response.Body.String())
}

func TestGeneratingCases(t *testing.T) {
	requestBodyStruct := gin.H{
		"factors": "SomeFactor: 1234567,2,3,4",
	}
	requestBody, _ := json.Marshal(requestBodyStruct)

	router := SetupRouter()

	response := performRequest(
		router,
		"POST",
		"/generate_cases",
		bytes.NewReader(requestBody))

	assert.Equal(t, http.StatusOK, response.Code)
	responseBody := response.Body.String()
	assert.True(t, strings.Contains(responseBody, "SomeFactor"))
	assert.True(t, strings.Contains(responseBody, "1234567"))
}
