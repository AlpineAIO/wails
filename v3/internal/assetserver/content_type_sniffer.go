package assetserver

import (
	"net/http"
)

type ContentTypeSniffer struct {
	Rw          http.ResponseWriter
	status      int
	wroteHeader bool
}

func (rw ContentTypeSniffer) Header() http.Header {
	return rw.Rw.Header()
}

func (rw *ContentTypeSniffer) Write(buf []byte) (int, error) {
	rw.writeHeader(buf)
	return rw.Rw.Write(buf)
}

func (rw *ContentTypeSniffer) WriteHeader(code int) {
	if rw.wroteHeader {
		return
	}
	rw.status = code
	rw.Rw.WriteHeader(code)
	rw.wroteHeader = true
}

func (rw *ContentTypeSniffer) writeHeader(b []byte) {
	if rw.wroteHeader {
		return
	}

	m := rw.Rw.Header()
	if _, hasType := m[HeaderContentType]; !hasType {
		m.Set(HeaderContentType, http.DetectContentType(b))
	}

	rw.WriteHeader(http.StatusOK)
}
