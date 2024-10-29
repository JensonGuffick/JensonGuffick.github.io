const tooltip = document.createElement("div");
tooltip.id = "tooltip-box";
document.body.appendChild(tooltip);
document.querySelectorAll('#content').forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        if (item.getAttribute("href")) {
            tooltip.innerText = "Document Found";
            tooltip.className = "tooltip-found";
            tooltip.style.backgroundColor = "#f8c301";
            tooltip.style.color = "#000000";
        } else {
            tooltip.innerText = "No Documents Found";
            tooltip.className = "tooltip-not-found";
            tooltip.style.backgroundColor = "#2c2c2c";
            tooltip.style.color = "#FFFFFF";
        }
        tooltip.style.display = 'block';
    });

    item.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});