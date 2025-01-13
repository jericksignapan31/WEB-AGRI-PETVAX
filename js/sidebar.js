  // Sidebar toggle function
  function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const overlay = document.getElementById("overlay");

    // Toggle sidebar and overlay visibility
    if (sidebar.style.left === "-240px" || !sidebar.style.left) {
        sidebar.style.left = "0";
        overlay.style.display = "block"; // Show overlay
    } else {
        closeSidebar();
    }
}

// Close sidebar when clicking outside
function closeSidebar() {
    document.getElementById("mySidebar").style.left = "-240px";
    document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Close sidebar when clicking on overlay
document.getElementById("overlay").addEventListener("click", closeSidebar);

