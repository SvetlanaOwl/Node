import { databases, query, account, MDBID, MTID } from "./appwriteClient.js";

export async function loadMenu() {
    const result = await databases.listDocuments(
        MDBID,
        MTID,
        [
            query.equal("visible", true),
            query.orderAsc("order")
        ]
    );
    console.log("Menu items loaded:", result.documents);
}