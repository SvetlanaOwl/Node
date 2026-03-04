async function run() {
    try {
        const data = await fetchData();
        console.log(data);
    }catch (err){
        console.error(err);
    }
}