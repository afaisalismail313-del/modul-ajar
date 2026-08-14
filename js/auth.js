// js/auth.js
const AUTH_KEY = 'maCurrentUser_v1';

const Auth = {
    // Simpan sesi user (dipanggil setelah login sukses)
    setUser(user) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    },

    // Ambil user yang sedang login
    getUser() {
        try { return JSON.parse(localStorage.getItem(AUTH_KEY)); }
        catch { return null; }
    },

    // Logout: hapus sesi lalu redirect ke login
    logout() {
        localStorage.removeItem(AUTH_KEY);
        window.location.href = 'login.html';
    },

    // Guard: jika belum login, lempar ke login.html
    // Pass ?next=... agar setelah login bisa balik ke halaman ini
    requireLogin() {
        if (!this.getUser()) {
            const next = encodeURIComponent(window.location.pathname.replace(/^\//, ''));
            window.location.href = 'login.html?next=' + next;
        }
    },

    // Proses login (dipanggil dari login.html)
    tryLogin(username, password) {
        // Admin bawaan
        if (username === 'admin' && password === 'admin2025')
            return { role: 'admin', username };

        // Guru bawaan
        if (username === 'guru' && password === 'madrasah2025')
            return { role: 'guru', username, nama: 'Guru Bawaan', nip: '' };

        // Guru dari database akun
        const AKUNKEY = 'maAkunGuru_v1';
        let akun = [];
        try { akun = JSON.parse(localStorage.getItem(AKUNKEY)) || []; } catch {}
        const found = akun.find(a => a.username === username && a.password === password);
        if (found) return { role: 'guru', username, nama: found.nama, nip: found.nip || '' };

        return null; // gagal
    }
};
