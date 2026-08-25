# Issue draft: Build the simulated HDSH monitoring dashboard

## Objective

Create a safe, hardware-free vertical slice of the Healthy Dog Smart House monitoring MVP.

## Checklist

- [x] Create the React application baseline and document local setup.
- [x] Define mock telemetry for temperature, humidity, water level, device connectivity, last update, and alert history.
- [x] Build a responsive dashboard that presents current status and active alerts.
- [x] Make alert severity and stale-device status visually distinguishable and accessible.
- [x] Add focused tests for alert/status behavior.
- [x] Run focused tests and the production build (`npm test`, `npm run build`).
- [ ] Publish this checklist as a GitHub issue once the remote is available.

## Safety boundaries

- Monitoring and owner alerts only.
- No unattended mains heating or direct portable-heater control.
- No autonomous food or water dispensing.
- Do not use real credentials, camera URLs, or production-device data.
