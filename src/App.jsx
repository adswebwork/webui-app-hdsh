import { alerts, devices, deviceStatusLabel, shelter, statusTone } from './data/telemetry.js';

function MetricCard({ label, value, detail, tone = 'default' }) {
  return <article className={`metric-card metric-card--${tone}`}><p className="eyebrow">{label}</p><strong>{value}</strong><span>{detail}</span></article>;
}

function App() {
  const urgentAlerts = alerts.filter((alert) => alert.severity !== 'info').length;
  return <main className="app-shell">
    <header className="topbar"><div className="brand" aria-label="Healthy Dog Smart House"><span className="brand-mark" aria-hidden="true">H</span><span>HDSH <small>Healthy Dog Smart House</small></span></div><button className="profile-button" type="button" aria-label="Open account menu">AS</button></header>
    <section className="hero" aria-labelledby="dashboard-title"><div><p className="eyebrow eyebrow--light">SHELTER MONITOR · PROTOTYPE</p><h1 id="dashboard-title">Good afternoon, Andre.</h1><p>Here is the latest simulated status for {shelter.name.toLowerCase()}.</p></div><aside className="safety-note"><span aria-hidden="true">○</span><div><strong>Monitoring only</strong><br />This dashboard does not control hardware or replace regular care.</div></aside></section>
    <section className="summary" aria-label="Shelter summary"><div><p className="eyebrow">{shelter.name}</p><h2>{shelter.status}</h2><p>{shelter.location} · Last update {shelter.lastUpdated}</p></div><div className="attention-count" aria-label={`${urgentAlerts} active alerts`}><strong>{urgentAlerts}</strong><span>active alerts</span></div></section>
    <section className="metrics" aria-label="Current shelter conditions"><MetricCard label="Temperature" value={`${shelter.temperature}°F`} detail={`Comfort target ${shelter.temperatureRange}`} tone="warm" /><MetricCard label="Humidity" value={`${shelter.humidity}%`} detail="Within selected prototype range" tone="cool" /><MetricCard label="Water level" value={`${shelter.waterLevel}%`} detail="Manual water access remains required" tone="water" /></section>
    <section className="dashboard-grid"><section className="panel" aria-labelledby="alerts-title"><div className="panel-heading"><div><p className="eyebrow">PRIORITY QUEUE</p><h2 id="alerts-title">Attention needed</h2></div><span className="status-chip status-chip--critical">{urgentAlerts} open</span></div><div className="alerts-list">{alerts.map((alert) => <article className={`alert alert--${alert.severity}`} key={alert.title}><span className="alert-icon" aria-hidden="true">{alert.severity === 'info' ? 'i' : '!'}</span><div><h3>{alert.title}</h3><p>{alert.detail}</p></div><time>{alert.time}</time></article>)}</div></section>
    <section className="panel" aria-labelledby="devices-title"><div className="panel-heading"><div><p className="eyebrow">HEALTH CHECK</p><h2 id="devices-title">Devices & signals</h2></div><span className="muted">Simulated</span></div><ul className="device-list">{devices.map((device) => <li key={device.name}><span className={`device-dot device-dot--${statusTone(device.status)}`} aria-hidden="true" /><div><strong>{device.name}</strong><span>{device.detail}</span></div><span className={`status-chip status-chip--${statusTone(device.status)}`}>{deviceStatusLabel(device.status)}</span></li>)}</ul><div className="camera-preview"><span className="camera-icon" aria-hidden="true">⌁</span><div><strong>Camera preview</strong><p>{shelter.liveCamera}. Keep real streams authenticated and private.</p></div></div></section></section>
    <footer>HDSH prototype · Conditions shown are mock data for product validation.</footer>
  </main>;
}

export default App;
