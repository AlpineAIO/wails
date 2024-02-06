package commands

import (
	"github.com/AlpineAIO/wails/v3/internal/doctor"
)

type DoctorOptions struct{}

func Doctor(_ *DoctorOptions) error {
	return doctor.Run()
}
