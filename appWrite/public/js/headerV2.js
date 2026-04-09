import { renderHeader } from './menu.js';
import { initProfileMenu } from './profileMenu.js';
import { logout } from './appwriteUtils.js';

export function createHeader() {
    const headerSection = document.getElementById('headerSection');
    if (!headerSection) {
        console.error('headerSection element not found');
        return;
    }

    // Main header structure using template literal (much cleaner)
    headerSection.innerHTML = `
        <header class="bg-white shadow-sm border-b border-gray-100">
            <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <!-- Logo -->
                <a href="/" class="flex items-center gap-3 group">
                <div class="w-9 h-9 bg-gradient-to-br from-[#74ebd5] to-[#ACB6E5] rounded-2xl
                    flex items-center justify-center text-white font-bold text-2xl
                    shadow-inner transition-transform group-hover:scale-105">
                    W
                </div>
                <span class="font-semibold text-2xl tracking-tight text-gray-800 group-hover:text-gray-900">
                    Wolf&Owl Hub
                </span>
                </a>

                <!-- Navigation -->
                <nav id="header-nav" class="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                <!-- You can populate this dynamically if needed -->
                </nav>

                <!-- Right side -->
                <div class="flex items-center gap-4">

                    <!-- Search -->
                    <div class="relative hidden sm:block">
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search users…"
                            class="bg-gray-100 border border-transparent focus:border-gray-300 w-72 pl-10 py-2.5 rounded-3xl text-sm focus:outline-none">
                        <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>

                    <!-- Notifications -->
                    <button id="notificationsBtn"
                            class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-colors relative">
                        <i class="fas fa-bell text-xl"></i>
                        <span id="notificationCount"
                            class="absolute top-2 right-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                            3
                        </span>
                    </button>

                    <!-- Profile -->
                    <div id="profileWrapper" class="relative">
                        <div id="profileToggle" class="flex items-center gap-3 cursor-pointer select-none">
                            <div class="w-9 h-9 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                                <img src="./img/wolf.jpg"
                                alt="Profile Picture"
                                class="w-full h-full object-cover">
                            </div>
                            <div class="hidden md:block">
                                <p id="profileName" class="text-sm font-semibold text-gray-800 leading-none">
                                Username
                                </p>
                            </div>
                        </div>
                    
                        <!-- Profile Dropdown Menu -->
                        <div id="profileMenu" class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 border border-gray-200 hidden">
                            <a href="./profile.html" 
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Profile
                            </a>
                            <button id="logoutBtn" 
                                class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;

    // Initialize functionality after DOM is inserted
    renderHeader();
    initProfileMenu();
    logout();
}
