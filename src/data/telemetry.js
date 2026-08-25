export const shelter = {
  name: 'Backyard shelter', location: 'Home · North garden', lastUpdated: 'Today, 2:42 PM',
  temperature: 78, humidity: 56, waterLevel: 72, temperatureRange: '60–80°F',
  liveCamera: 'Prototype only', status: 'Needs attention'
};

export const devices = [
  { name: 'Environment sensor', detail: 'Updated 2 min ago', status: 'online' },
  { name: 'Water-level monitor', detail: 'Updated 3 min ago', status: 'online' },
  { name: 'Reservoir monitor', detail: 'No signal for 18 min', status: 'offline' },
  { name: 'Camera link', detail: 'Simulated preview unavailable', status: 'standby' }
];

export const alerts = [
  { severity: 'critical', title: 'Reservoir monitor offline', detail: 'No heartbeat has been received for 18 minutes. Check the device before relying on its readings.', time: '2:24 PM' },
  { severity: 'warning', title: 'Warm afternoon conditions', detail: 'Shelter temperature is 78°F and trending upward. Recheck conditions if outdoor heat increases.', time: '2:18 PM' },
  { severity: 'info', title: 'Water reservoir is sufficient', detail: 'Estimated level is 72%. This is simulated monitoring data, not a dispensing control.', time: '2:12 PM' }
];

export function deviceStatusLabel(status) { return status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : 'Standby'; }
export function statusTone(status) { return status === 'online' ? 'good' : status === 'offline' ? 'critical' : 'neutral'; }
