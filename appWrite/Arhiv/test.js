
export function createHeader() {

    const header = document.createElement('header');
    const outerContainer = document.createElement('div');
    const logolink = document.createElement('a');
    const logoContainer = document.createElement('div');
    const logoText = document.createElement('span');
    const nav = document.createElement('nav');
    // Right Side
    const rightSide = document.createElement('div');
    // Search
    const searchContainer = document.createElement('div');
    const searchInput = document.createElement('input');
    const searchIcon = document.createElement('i');
    // Notification
    const notificationBtn = document.createElement('button');
    const notificationIcon = document.createElement('i');
    const notificationBadge = document.createElement('span');
    // Mini Profile with Dropdown
    const profileWrapper = document.createElement('div');
    const profileToggle = document.createElement('div');
    const avatarContainer = document.createElement('div');
    const avatarImg = document.createElement('img');
    const profileName = document.createElement('p');

        header.classList.add('bg-white', 'shadow-sm', 'border-b', 'border-gray-100');
        outerContainer.classList.add('max-w-6xl', 'mx-auto', 'px-6', 'py-4', 'flex', 'items-center', 'justify-between');
        logolink.classList.add('flex', 'items-center', 'gap-3');
        logolink.href = '/';
        logoContainer.classList.add('w-9', 'h-9', 'bg-gradient-to-br', 'from-[#74ebd5]', 'to-[#ACB6E5]', 
        'rounded-2xl', 'flex', 'items-center', 'justify-center', 'text-white', 'font-bold', 'text-2xl', 'shadow-inner');
        logoContainer.textContent = 'W';
        logoText.classList.add('font-semibold', 'text-2xl', 'tracking-tight', 'text-gray-800');
        logoText.textContent = 'Wolf&Owl Hub';
        nav.classList.add('hidden', 'md:flex', 'items-center', 'gap-8', 'text-gray-600', 'font-medium');
        nav.id = 'header-nav';
        rightSide.classList.add('flex', 'items-center', 'gap-4');

        // Search
        searchContainer.classList.add('relative', 'hidden', 'sm:block');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search users...';
        searchInput.classList.add('bg-gray-100', 'border', 'border-transparent', 'focus:border-gray-300', 
                                'w-72', 'pl-10', 'py-2.5', 'rounded-3xl', 'text-sm', 'focus:outline-none');
        searchIcon.classList.add('fas', 'fa-search', 'absolute', 'left-4', 'top-1/2', '-translate-y-1/2', 'text-gray-400');

        // Notification
        notificationBtn.classList.add('w-10', 'h-10', 'flex', 'items-center', 'justify-center', 
                                    'text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100', 
                                    'rounded-2xl', 'transition-colors', 'relative');
        notificationIcon.classList.add('fas', 'fa-bell', 'text-xl');
        notificationBadge.classList.add('absolute', 'top-2', 'right-2', 'w-4', 'h-4', 'bg-red-500', 
                                        'text-white', 'text-[10px]', 'font-bold', 'flex', 'items-center', 
                                        'justify-center', 'rounded-full');
        notificationBadge.textContent = '3';

        // Mini Profile
        profileWrapper.classList.add('relative');
        profileToggle.classList.add('flex', 'items-center', 'gap-3', 'cursor-pointer', 'select-none');
        avatarContainer.classList.add('w-9', 'h-9', 'rounded-2xl', 'overflow-hidden', 'border-2', 'border-white', 'shadow-sm');
        avatarImg.src = '/appWrite/public/img/wolf.jpg';
        avatarImg.alt = 'Avatar';
        avatarImg.classList.add('w-full', 'h-full', 'object-cover');

        profileName.classList.add('hidden', 'md:block', 'text-sm', 'font-semibold', 'text-gray-800', 'leading-none');
        profileName.id = 'profileName';
        profileName.textContent = 'Username';

        document.body.prepend(header); // вставляем хедер в самое начало body
        header.appendChild(outerContainer);
        outerContainer.appendChild(logolink);
        logolink.appendChild(logoContainer);
        logolink.appendChild(logoText); 
        outerContainer.appendChild(nav);         // навигация
        // Загружаем и запускаем меню из Appwrite
        import('./menu.js').then(m => m.renderHeader());
        outerContainer.appendChild(rightSide);   // правая часть (поиск, уведомления, профиль)
        
        rightSide.appendChild(searchContainer);
        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(searchIcon);

        rightSide.appendChild(notificationBtn);
        notificationBtn.appendChild(notificationIcon);
        notificationBtn.appendChild(notificationBadge);

        rightSide.appendChild(profileWrapper);
        profileWrapper.appendChild(profileToggle);
        profileToggle.appendChild(avatarContainer);
        avatarContainer.appendChild(avatarImg);
        profileToggle.appendChild(profileName);
    }

        