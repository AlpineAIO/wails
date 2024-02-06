package main

import (
	"log"
	"math/rand"
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
		time.Sleep(2 * time.Second)
		app.NewWebviewWindow().
			SetTitle("WebviewWindow "+strconv.Itoa(rand.Intn(1000))).
			SetRelativePosition(rand.Intn(1000), rand.Intn(800)).
			SetURL("https://wails.io").
			Show()
	}()
	err := app.Run()

	if err != nil {
		log.Fatal(err)
	}
}
