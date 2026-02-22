export async function buttons() {
    const formUrl = "https://script.google.com/macros/s/AKfycby8VFoblNNsBlkHWTjAvXeiCMb8So6A_BiwL4vaU8WciEd2Mt4QCIuJwIwuqTRbOdi9Kw/exec?page=";
   
    const response = await fetch('testButtons.json');
    const data = await response.json();
    const tests = data.tests;

    for (let i = 0; i < tests.length; i++) {
        document.getElementById(tests[i]).addEventListener('click', async () => {
           window.location.href = formUrl + tests[i];
        });
    }
}