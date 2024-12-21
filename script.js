function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.transform === 'translateX(0%)') {
        sidebar.style.transform = 'translateX(100%)';
    } else {
        sidebar.style.transform = 'translateX(0%)';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("الصفحة جاهزة مع تصميم عصري وأيقونات مميزة!");
    // يمكن إضافة تأثيرات تفاعلية مستقبلية هنا.
});

