// Mengambil konfigurasi dari backend PHP
async function getConfig() {
    try {
        const response = await fetch('get_config.php');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Gagal mengambil konfigurasi:', error);
        return { TELEGRAM_TOKEN: '', TELEGRAM_CHAT_ID: '' };
    }
}

// Simpan data yang diambil
getConfig().then(config => {
    window.TELEGRAM_TOKEN = config.TELEGRAM_TOKEN;
    window.TELEGRAM_CHAT_ID = config.TELEGRAM_CHAT_ID;
});
