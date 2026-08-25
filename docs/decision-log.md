# Decision Log

## 2026-08-25 - Build a simulated monitoring dashboard first

- Context: HDSH may eventually involve sensors, camera monitoring, and environmental controls.
- Decision: Start with a simulated React dashboard that validates status comprehension and alerts without hardware integration.
- Consequences: The prototype can be shown to prospective users while avoiding unsafe actuator work and premature hardware purchases.
- Revisit when: User feedback confirms the most valuable conditions and alert behaviors.

## 2026-08-25 - No direct portable-heater control

- Context: A Pi relay had been considered for enclosure heating.
- Decision: The project will not implement direct portable-heater control or unattended mains heating.
- Consequences: Future climate-control work requires an independently safeguarded, deliberately reviewed safety architecture.
