import { renderHeader } from './menu.js';
import { initProfileMenu } from './profileMenu.js';
import { logout } from './appwriteUtils.js';

export function createHeader() {
    // Объявления всех элементов, необходимых для создания шапки с некоторыми значениями по умолчанию
    const headerSection = document.getElementById('headerSection'); // Предполагается, что у вас есть <headerSection> в вашем HTML, иначе добавляйте в body
    const header = document.createElement('header');
    const outerContainer = document.createElement('div');
    const logoLink = document.createElement('a');
    const logoContainer = document.createElement('div');
    const logoText = document.createElement('span');
    const nav = document.createElement('nav');
    nav.id = 'header-nav';
    
    const rightSideContainer = document.createElement('div'); // Контейнер для элементов правой стороны (например, профиль пользователя, уведомления)
    
    const searchDiv = document.createElement('div');   // Контейнер для поисковой строки
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search users...';
    const searchIcon = document.createElement('i');   // Вы можете заменить это на реальный элемент иконки или изображение
    
    const notificationsButton = document.createElement('button');   // Кнопка уведомлений
    const notificationsIcon = document.createElement('i');   // Вы можете заменить это на реальный элемент иконки или изображение
    const notificationsNumber = document.createElement('span');   // Бейдж с количеством уведомлений
    notificationsNumber.textContent = '3';   // Пример количества уведомлений

    const profileWrapper = document.createElement('div');  // Контейнер для фото профиля и имени пользователя
    profileWrapper.id = 'profileWrapper';
    const profileToggle = document.createElement('div');   // Кнопка для открытия выпадающего меню профиля
    profileToggle.id = 'profileToggle';
    const imgDiv = document.createElement('div');  // Плейсхолдер для изображения профиля
    const profileImg = document.createElement('img');  // Элемент изображения профиля
    profileImg.src = '/appWrite/public/img/wolf.jpg';  // Плейсхолдер источника изображения, замените на реальный URL изображения профиля пользователя
    profileImg.alt = 'Profile Picture';
    const userNameDiv = document.createElement('div');   // Контейнер для имени пользователя
    const userNameP = document.createElement('p');  // Элемент с именем пользователя
    
    const status = document.createElement('span');
    status.id = 'status';
    const userEmail = document.createElement('span');
    userEmail.id = 'userEmail';
    
    const profileMenuDiv = document.createElement('div');   // Выпадающее меню для опций профиля
    profileMenuDiv.id = 'profileMenu';
    const profileLink = document.createElement('a');  // Ссылка на страницу профиля
    profileLink.href = './appWrite/public/profile.html';
    profileLink.textContent = 'Profile';
    const logoutButton = document.createElement('button');  // Кнопка выхода из системы
    logoutButton.id = 'logoutBtn';
    logoutButton.textContent = 'Logout';

    // Adding Tailwind CSS classes to the elements for styling    // Добавление классов Tailwind CSS для стилизации элементов
    header.classList.add('bg-white', 'shadow-sm', 'border-b', 'border-gray-100');
    outerContainer.classList.add('max-w-6xl', 'mx-auto', 'px-6', 'py-4', 'flex', 'items-center', 'justify-between');
    logoLink.classList.add('flex', 'items-center', 'gap-3', 'group');
    logoLink.href = '/';
    logoContainer.classList.add('w-9', 'h-9', 'bg-gradient-to-br', 'from-[#74ebd5]', 'to-[#ACB6E5]', 'rounded-2xl', 
        'flex', 'items-center', 'justify-center', 'text-white', 'font-bold', 'text-2xl', 'shadow-inner', 
        'transition-transform', 'group-hover:scale-105');
    logoText.classList.add('font-semibold', 'text-2xl', 'tracking-tight', 'text-gray-800', 'group-hover:text-gray-900');
    nav.classList.add('hidden', 'md:flex', 'items-center', 'gap-8', 'text-gray-600', 'font-medium');
    rightSideContainer.classList.add('flex', 'items-center', 'gap-4');
    searchDiv.classList.add('relative', 'hidden', 'sm:block');
    searchInput.classList.add('bg-gray-100', 'border', 'border-transparent', 'focus:border-gray-300', 
        'w-72', 'pl-10', 'py-2.5', 'rounded-3xl', 'text-sm', 'focus:outline-none');
    searchIcon.classList.add('fas', 'fa-search', 'absolute', 'left-4', 'top-1/2', '-translate-y-1/2', 'text-gray-400');
    notificationsButton.classList.add('w-10', 'h-10', 'flex', 'items-center', 'justify-center', 
        'text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100', 'rounded-2xl', 'transition-colors', 'relative');   
    notificationsIcon.classList.add('fas', 'fa-bell', 'text-xl');
    notificationsNumber.classList.add('absolute', 'top-2', 'right-2', 'w-4', 'h-4', 'bg-red-500', 'text-white', 'text-[10px]', 'font-bold', 
        'flex', 'items-center', 'justify-center', 'rounded-full');  
    profileWrapper.classList.add('relative');
    profileToggle.classList.add('flex', 'items-center', 'gap-3', 'cursor-pointer', 'select-none');
    imgDiv.classList.add('w-9', 'h-9', 'rounded-2xl', 'overflow-hidden', 'border-2', 'border-white', 'shadow-sm');
    profileImg.classList.add('w-full', 'h-full', 'object-cover');
    userNameDiv.classList.add('hidden', 'md:flex', 'flex-col', 'items-start', 'ml-2');
    userNameP.classList.add('text-sm', 'font-semibold', 'text-gray-800', 'leading-none');
    userNameP.id = 'profileName';
    userNameP.textContent = 'Username';  // Пример имени пользователя, замените на реальное

    profileMenuDiv.classList.add('absolute', 'right-0', 'mt-2', 'w-40', 'bg-white', 'shadow-lg', 'rounded-lg', 'py-2', 'border', 'border-gray-200');
    logoutButton.classList.add('w-full', 'text-left', 'block', 'px-4', 'py-2', 'text-sm', 'text-gray-700', 'hover:bg-gray-100');

    // Appending the elements to build the header structure  // Добавление элементов для построения структуры шапки
    headerSection.appendChild(header);
    header.appendChild(outerContainer);
    outerContainer.appendChild(logoLink);
    logoLink.appendChild(logoContainer);
    logoContainer.textContent = 'W';
    logoLink.appendChild(logoText);
    logoText.textContent = 'Wolf&Owl Hub';
    outerContainer.appendChild(nav);
    outerContainer.appendChild(rightSideContainer);
    rightSideContainer.appendChild(searchDiv);
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchIcon);

    rightSideContainer.appendChild(notificationsButton);
    notificationsButton.appendChild(notificationsIcon);
    notificationsButton.appendChild(notificationsNumber);

    rightSideContainer.appendChild(profileWrapper);
    profileWrapper.appendChild(profileToggle);
    profileToggle.appendChild(imgDiv);
    imgDiv.appendChild(profileImg);
    profileToggle.appendChild(userNameDiv);
    userNameDiv.appendChild(userNameP);
    userNameDiv.appendChild(status);
    userNameDiv.appendChild(userEmail);
    profileWrapper.appendChild(profileMenuDiv);
    profileMenuDiv.appendChild(profileLink);
    profileMenuDiv.appendChild(logoutButton);

    renderHeader();
    initProfileMenu();
    logout();
}