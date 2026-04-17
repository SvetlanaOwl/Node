export function createFooter() {
  const footerSection = document.getElementById('footerSection');
  if (!footerSection) {
    console.error('footerSection element not found');
    return;
  }
  footerSection.innerHTML = `
    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-100 mt-auto dark:bg-gray-800 dark:border-gray-700"> 
        <div class="max-w-6xl mx-auto px-6 py-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Column 1: Brand -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 bg-gradient-to-br from-[#74ebd5] to-[#ACB6E5] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    W
                    </div>
                    <span class="font-semibold text-xl text-gray-800 dark:text-slate-500">Wolf&Owl Hub</span>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed">
                    Connect, share, and grow with people who matter.
                </p>
            </div>
            <!-- Column 2: Quick Links -->
            <div>
                <h3 class="font-semibold text-gray-800 mb-4 dark:text-slate-400">Platform</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Home</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Explore Profiles</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Community</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Trending</a></li>
                </ul>
            </div>
            <!-- Column 3: Support -->
            <div>
                <h3 class="font-semibold text-gray-800 mb-4 dark:text-slate-400">Support</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Help Center</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Safety Tips</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Contact Us</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Feedback</a></li>
                </ul>
            </div>
            <!-- Column 4: Legal + Social -->
            <div>
                <h3 class="font-semibold text-gray-800 mb-4 dark:text-slate-400">Company</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">About Us</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Careers</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-gray-900 transition-colors dark:hover:text-gray-400">Terms of Service</a></li>
                </ul>
            <!-- Social Icons -->
            <div class="flex gap-4 mt-6">
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-gray-400"><i class="fab fa-twitter text-xl"></i></a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-gray-400"><i class="fab fa-instagram text-xl"></i></a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-gray-400"><i class="fab fa-linkedin text-xl"></i></a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-gray-400"><i class="fab fa-github text-xl"></i></a>
            </div>
            </div>
            <!-- Bottom Bar -->
            <div class="border-t border-gray-100 mt-10 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                © 2026 Wolf&Owl Hub. All rights reserved. Made with ❤️ for a better connected world.
            </div>
        </div>
    </footer>
    `;
}