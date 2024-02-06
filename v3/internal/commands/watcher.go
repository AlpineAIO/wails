package commands

import (
	"github.com/AlpineAIO/wails/v3/internal/signal"
	"github.com/atterpac/refresh/engine"
	"os"
)

type WatcherOptions struct {
	Config string `description:"The config file including path" default:"."`
}

func Watcher(options *WatcherOptions) error {
	stopChan := make(chan struct{})
	watcherEngine, err := engine.NewEngineFromTOML(options.Config)
	if err != nil {
		return err
	}
	signalHandler := signal.NewSignalHandler(func() {
		stopChan <- struct{}{}
	})
	signalHandler.ExitMessage = func(sig os.Signal) string {
		return ""
	}
	signalHandler.Start()
	err = watcherEngine.Start()
	if err != nil {
		return err
	}
	<-stopChan
	return nil
}
