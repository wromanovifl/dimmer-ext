// track active-tab focus time, persist per day
let activeTab = null;
let since = Date.now();

function today() {
  return new Date().toISOString().slice(0, 10);
}

async function flush() {
  if (activeTab == null) return;
  const spent = Date.now() - since;
  since = Date.now();
  const key = 't:' + today();
  const data = await chrome.storage.local.get(key);
  const day = data[key] || {};
  day[activeTab] = (day[activeTab] || 0) + spent;
  await chrome.storage.local.set({ [key]: day });
}

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  await flush();
  activeTab = tabId;
  since = Date.now();
});

chrome.tabs.onUpdated.addListener(async (tabId, info) => {
  if (tabId === activeTab && info.status === 'loading') {
    await flush();
  }
});
