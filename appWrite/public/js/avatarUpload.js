// public/js/avatarUpload.js
import { client, storage, IDHelper, bucketID, account } from './appwriteClient.js';

export async function uploadAvatar(file) {
    const bucketId = bucketID;
    try {
        const uploaded = await storage.createFile(bucketId, IDHelper.unique(), file); // Загружаем файл в Appwrite
        const url = storage.getFileView(bucketId, uploaded.$id); // Генерируем публичный URL для предпросмотра
        const account = new Appwrite.Account(client); // Вызываем сервис Account для обновления настроек пользователя новым URL аватара
        updateUserPref('avatarUrl', url); // Обновляем настройки пользователя новым URL аватара с помощью вспомогательной функции
        return url;
    } catch (err) {
        console.error("Avatar upload failed:", err);
        throw err;
    }
}

// Вспомогательная функция для обновления настроек пользователя
async function updateUserPref(key, value) { // Получаем текущие настройки пользователя, обновляем указанный ключ и сохраняем обратно в Appwrite
    const user = await account.get(); // Получаем данные текущего пользователя для доступа к существующим настройкам
    const prefs = user.prefs || {}; // Убеждаемся, что у нас есть объект prefs для работы
    prefs[key] = value; // Обновляем конкретный ключ настроек новым значением
    return account.updatePrefs(prefs); // Сохраняем обновлённые настройки обратно в Appwrite
}