# Architecture

## Current prototype

The React/Vite application presents mock telemetry through a static dashboard. `src/data/telemetry.js` is the single source for the simulated condition, device-health, and alert data.

## Intended data flow

```text
Future sensor node -> authenticated event service -> dashboard + owner notifications
```

The dashboard is intentionally disconnected from this future data flow until the monitoring user experience and alert model have been validated.

## Safety boundary

No actuator exists in this architecture. Any future hardware integration must be designed to fail safely with independent physical safeguards and owner alerting; it cannot rely on the dashboard, network, Pi, or a single sensor.
