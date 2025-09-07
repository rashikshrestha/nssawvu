function populateGallery(images_dir, num_images) {
    const galleryDiv = document.getElementById('gallery');
    for (let i = 1; i <= num_images; i++) {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4';
        const img = document.createElement('img');
        img.src = `${images_dir}/${i}.jpg`;
        img.className = 'img-fluid rounded';
        img.alt = `Gallery ${i}`;
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            document.getElementById('modalImage').src = img.src;
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        });
        col.appendChild(img);
        galleryDiv.appendChild(col);
    }
}
