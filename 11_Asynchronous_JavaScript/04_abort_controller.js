//* ============================================================
//* ABORTCONTROLLER — CANCELLING ASYNC WORK
//* ============================================================

//* AbortController provides a standard signal that APIs can listen to
//* so ongoing work can be cancelled when supported.

async function loadData(url) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

//* Teaching note: cancellation is different from merely ignoring a
//* Promise result. Cancellation can allow the underlying operation to
//* stop when the API supports AbortSignal.