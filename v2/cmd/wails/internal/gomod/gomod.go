package gomod

import (
	"fmt"
	"os"

	"github.com/AlpineAIO/wails/v2/internal/colour"
	"github.com/AlpineAIO/wails/v2/internal/fs"
	"github.com/AlpineAIO/wails/v2/internal/gomod"
	"github.com/AlpineAIO/wails/v2/internal/goversion"
	"github.com/AlpineAIO/wails/v2/pkg/clilogger"
)

func SyncGoMod(logger *clilogger.CLILogger, updateWailsVersion bool) error {
	cwd, err := os.Getwd()
	if err != nil {
		return err
	}
	gomodFilename := fs.FindFileInParents(cwd, "go.mod")
	if gomodFilename == "" {
		return fmt.Errorf("no go.mod file found")
	}
	gomodData, err := os.ReadFile(gomodFilename)
	if err != nil {
		return err
	}

	gomodData, updated, err := gomod.SyncGoVersion(gomodData, goversion.MinRequirement)
	if err != nil {
		return err
	} else if updated {
		LogGreen("Updated go.mod to use Go '%s'", goversion.MinRequirement)
	}

	if updated {
		return os.WriteFile(gomodFilename, gomodData, 0o755)
	}

	return nil
}

func LogGreen(message string, args ...interface{}) {
	text := fmt.Sprintf(message, args...)
	println(colour.Green(text))
}
