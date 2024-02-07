package main

import (
	"log"
	"math/rand"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"strconv"
	"time"

	"github.com/AlpineAIO/wails/v3/pkg/application"
	"github.com/AlpineAIO/wails/v3/pkg/events"
)

func main() {
	app := application.New(application.Options{
		Name:        "WebviewWindow Demo",
		Description: "A demo of the WebviewWindow API",
		Assets:      application.AlphaAssets,
		Mac: application.MacOptions{
			ApplicationShouldTerminateAfterLastWindowClosed: false,
		},
	})

	app.On(events.Mac.ApplicationDidFinishLaunching, func(event *application.Event) {
		log.Println("ApplicationDidFinishLaunching")
	})

	app.NewWebviewWindowWithOptions(application.WebviewWindowOptions{
		BackgroundColour: application.NewRGB(33, 37, 41),
		Mac: application.MacWindow{
			DisableShadow: true,
		},
	})

	go func() {
		u, _ := url.Parse("http://localhost:8888")
		jar, _ := cookiejar.New(nil)
		client := &http.Client{
			CheckRedirect: func(req *http.Request, via []*http.Request) error {
				return http.ErrUseLastResponse
			}, Transport: &http.Transport{
				Proxy: http.ProxyURL(u),
			},
			Jar: jar,
		}
		_ = client
		time.Sleep(2 * time.Second)
		window := app.NewWebviewWindow().
			SetTitle("WebviewWindow "+strconv.Itoa(rand.Intn(1000))).
			SetRelativePosition(rand.Intn(1000), rand.Intn(800)).
			SetHTTPClient(client).
			AddScript(`console.log("test")`).SetURL("https://google.com").
			Show()

		_ = window
	}()
	err := app.Run()

	if err != nil {
		log.Fatal(err)
	}
}
