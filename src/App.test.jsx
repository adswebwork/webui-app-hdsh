import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { deviceStatusLabel, statusTone } from './data/telemetry.js';

describe('HDSH dashboard', () => {
  it('shows the monitoring-only safety boundary and active device alert', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /good afternoon, andre/i })).toBeInTheDocument();
    expect(screen.getByText(/monitoring only/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /reservoir monitor offline/i })).toBeInTheDocument();
    expect(screen.getByText(/no signal for 18 min/i)).toBeInTheDocument();
  });
  it('maps device status to clear labels and visual tones', () => {
    expect(deviceStatusLabel('online')).toBe('Online');
    expect(deviceStatusLabel('offline')).toBe('Offline');
    expect(statusTone('offline')).toBe('critical');
  });
});
