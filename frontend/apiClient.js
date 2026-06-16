(function attachApiClient(global) {
  const API_BASE = "/api";

  async function getDailyCases({ userId, mode }) {
    const params = new URLSearchParams({
      userId,
      mode
    });
    const response = await fetch(`${API_BASE}/daily-cases?${params.toString()}`);
    if (!response.ok) {
      throw new Error("Daily case API unavailable");
    }
    return response.json();
  }

  async function recordInteraction(payload) {
    const response = await fetch(`${API_BASE}/interactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error("Interaction API unavailable");
    }
    return response.json();
  }

  async function health() {
    const response = await fetch(`${API_BASE}/health`);
    if (!response.ok) {
      throw new Error("Health API unavailable");
    }
    return response.json();
  }

  global.ICDdleApi = {
    getDailyCases,
    recordInteraction,
    health
  };
})(window);
