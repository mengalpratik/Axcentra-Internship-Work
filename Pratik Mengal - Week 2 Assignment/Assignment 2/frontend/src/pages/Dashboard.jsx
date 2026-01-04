import "./Dashboard.css";
import { useEffect, useState } from "react";

const LOG_POOL = [
  "Initializing secure shell...",
  "Establishing encrypted tunnel...",
  "JWT signature verified",
  "Firewall rule bypassed",
  "Scanning open ports...",
  "SSH handshake successful",
  "Suspicious packet intercepted",
  "Privilege escalation detected",
  "Injecting payload into memory",
  "Database access granted",
  "Credentials decrypted",
  "Data exfiltration in progress",
  "Connection rerouted via proxy",
  "Covering tracks...",
  "System integrity compromised",
  "Zero-day exploit triggered",
  "Root access obtained",
  "Kernel memory patched",
  "Outbound traffic masked",
  "Darknet relay active",
  "Intrusion detected ⚠",
  "Countermeasures deployed",
  "Threat isolated",
  "Heartbeat stable",
];

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog =
        LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];

      setLogs(prev => {
        const updated = [...prev, `> ${randomLog}`];
        return updated.length > 60 ? updated.slice(1) : updated;
      });

      // Random critical alert
      if (Math.random() > 0.92) {
        setAlert("⚠ INTRUSION ATTEMPT DETECTED");
        setTimeout(() => setAlert(""), 3000);
      }
    }, 350 + Math.random() * 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>Secure Ops Dashboard</h1>
        <span className="status online">● LIVE</span>
      </header>

      {alert && <div className="alert">{alert}</div>}

      <div className="dash-grid">
        {/* TERMINAL */}
        <div className="terminal">
          {logs.map((log, i) => (
            <p key={i}>{log}</p>
          ))}
        </div>

        {/* ECG + STATS */}
        <div className="graph">
          <div className="stats">
            <div>
              <span>CPU</span>
              <strong>{40 + Math.floor(Math.random() * 20)}%</strong>
            </div>
            <div>
              <span>Memory</span>
              <strong>{60 + Math.floor(Math.random() * 15)}%</strong>
            </div>
            <div>
              <span>Threats</span>
              <strong>{Math.floor(Math.random() * 5)}</strong>
            </div>
          </div>

          <svg className="ecg" viewBox="0 0 600 120" preserveAspectRatio="none">
            <path
              d="
                M0 60 
                L40 60 
                L50 40 
                L60 80 
                L70 60 
                L120 60 
                L130 30 
                L140 90 
                L150 60 
                L200 60 
                L210 45 
                L220 75 
                L230 60 
                L600 60
              "
              className="ecg-line"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
