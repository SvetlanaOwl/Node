export async function loadTests() {
    const res = await fetch("/tests");
    return await res.json();
}