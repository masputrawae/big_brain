// Utility functions
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Offcanvas functionality
const toggleOffcanvas = offcanvasId => {
    $(`#${offcanvasId}`)?.classList.toggle('offcanvas--is-open');
};

// Theme management
const manageTheme = () => {
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        sessionStorage.setItem('theme', theme);
        $$('[data-theme-toggle]').forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.toggle('bi-sun', theme === 'light');
            icon.classList.toggle('bi-moon-stars', theme === 'dark');
        });
    };

    const switchTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    const savedTheme = sessionStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    $$('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', switchTheme));
};

// Collapse functionality
const manageCollapse = () => {
    const toggleIcon = (icon, isCollapsed) => {
        icon?.classList.replace(
            isCollapsed ? "bi-folder2-open" : "bi-folder2",
            isCollapsed ? "bi-folder2" : "bi-folder2-open"
        );
    };

    const toggleFolderCollapse = (folder, isCollapsed) => {
        const sublist = folder.querySelector(".tree__list");
        if (sublist) {
            sublist.classList.toggle("collapsed", isCollapsed);
            sessionStorage.setItem(`collapsed_${folder.id}`, isCollapsed);
            toggleIcon(folder.querySelector(".btn--collapse i"), isCollapsed);
        }
    };

    $$(".btn--collapse").forEach(button => {
        button.addEventListener("click", function () {
            const parentItem = this.closest(".tree__item--folder");
            if (parentItem) {
                const isCollapsed = parentItem.querySelector(".tree__list").classList.toggle("collapsed");
                sessionStorage.setItem(`collapsed_${parentItem.id}`, isCollapsed);
                toggleIcon(this.querySelector("i"), isCollapsed);
            }
        });
    });

    $$(".tree__item--folder").forEach(folder => {
        const isCollapsed = sessionStorage.getItem(`collapsed_${folder.id}`) === "true";
        toggleFolderCollapse(folder, isCollapsed);
    });

    $("#toggleCollapseAll")?.addEventListener("click", () => {
        const allCollapsed = !$$(".tree__item--folder .tree__list.collapsed").length;
        $$(".tree__item--folder").forEach(folder => toggleFolderCollapse(folder, allCollapsed));
        toggleIcon($("#toggleCollapseAll i"), allCollapsed);
    });
};

// Active link highlighting
const highlightActiveLink = () => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    $$(".tree__link").forEach(link => {
        if (link.pathname.replace(/\/$/, "") === currentPath) {
            link.classList.add("tree__link--active");
            link.closest(".tree__item--folder")?.classList.add("tree__item--open");
        }
    });
};

// Initialize all functionality
const init = () => {
    $$('[data-toggle-offcanvas]').forEach(button => {
        button.addEventListener('click', () => toggleOffcanvas(button.getAttribute('data-toggle-offcanvas')));
    });
    manageTheme();
    manageCollapse();
    highlightActiveLink();
};

// Copy data-lang attribute
const updateDataLang = () => {
    $$(".highlight pre code[data-lang]").forEach(code => {
        const highlightDiv = code.closest(".highlight");
        if (highlightDiv && !highlightDiv.hasAttribute("data-lang")) {
            highlightDiv.setAttribute("data-lang", code.getAttribute("data-lang"));
        }
    });
};

// TOC Highlighter
const highlightTOC = () => {
    const tocLinks = $$('.widget__list--toc .widget__link');
    const headings = $$('.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6');
    const offset = 0;
    let activeHeadingId = null;

    // Get the currently active heading with more precise calculation
    const getActiveHeading = () => {
        let closestHeading = null;
        let closestDistance = Infinity;

        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            const distance = Math.abs(rect.top - offset);
            
            if (rect.top <= offset + 20 && distance < closestDistance) {
                closestDistance = distance;
                closestHeading = heading;
            }
        });

        return closestHeading;
    };

    // Update active link in TOC
    const updateActiveLink = () => {
        const activeHeading = getActiveHeading();
        if (!activeHeading || activeHeadingId === activeHeading.id) return;
        
        activeHeadingId = activeHeading.id;
        tocLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1);
            link.classList.toggle('widget__link--active', linkHref === activeHeadingId);
        });
    };

    // Initialize highlight on first load
    updateActiveLink();

    // Handle scroll with optimized debounce
    let isScrolling;
    const handleScroll = () => {
        window.cancelAnimationFrame(isScrolling);
        isScrolling = window.requestAnimationFrame(updateActiveLink);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.cancelAnimationFrame(isScrolling);
    };
};

// Initialize TOC Highlighter
const cleanupHighlightTOC = highlightTOC();


// Search functionality
const initSearch = async () => {
    try {
        const searchUrl = $('#search').getAttribute('data-search-url');
        const store = await (await fetch(searchUrl)).json();

        const idx = lunr(function() {
            this.ref('id')
            this.field('title', { boost: 40 })
            this.field('tags', { boost: 30 })
            this.field('description', { boost: 10 })
            this.field('excerpt', { boost: 10 })
            this.field('category', { boost: 10 })
            this.field('content', { boost: 10 })
            store.forEach(doc => this.add(doc));
        });

        const displayResults = (results, query) => {
            const searchResults = $('#results');
            const resultsLabel = $('#resultsPanel');
            
            if (query) {
                resultsLabel.style.display = 'block';
                searchResults.innerHTML = results.length
                    ? results.map(result => {
                        const item = store.find(doc => doc.id === result.ref);
                        return `
                            <li class="widget__item">
                                <a class="widget__link" href="${item.url}">
                                    <i class="bi bi-folder-symlink"></i>
                                    <span>${item.title}</span>
                                </a>
                            </li>`;
                    }).join('')
                    : '<li class="widget__item">No results found.</li>';
            } else {
                resultsLabel.style.display = 'none';
                searchResults.innerHTML = "";
            }
        };

        const handleSearch = event => {
            event?.preventDefault();
            const query = $('#search-input').value.trim();
            if (query) {
                const results = idx.search(`*${query}* ${query}~1`);
                displayResults(results, query);
            } else {
                $('#resultsPanel').style.display = 'none';
                $('#results').innerHTML = "";
            }
        };

        const debounce = (func, wait = 300) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), wait);
            };
        };

        $('#search-input').addEventListener('input', debounce(() => handleSearch(new Event('submit'))));

        const query = new URLSearchParams(window.location.search).get('query');
        if (query) {
            $('#search-input').setAttribute('value', query);
            setTimeout(() => handleSearch(new Event('submit')), 100);
        } else {
            $('#resultsPanel').style.display = 'none';
        }
    } catch (error) {
        console.error("Gagal memuat data pencarian:", error);
    }
};

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
    init();
    updateDataLang();
    new MutationObserver(updateDataLang).observe(document.body, { childList: true, subtree: true });
    initSearch();
});