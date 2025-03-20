
//Sticked Gallery
    document.addEventListener("DOMContentLoaded", function () {
        const gallery = document.querySelector(".product-gallery");
        const details = document.querySelector(".product-hero__details");

        if (!gallery || !details) return; 

        function handleScroll() {
            const detailsRect = details.getBoundingClientRect();
            const galleryHeight = gallery.offsetHeight;
            const viewportHeight = window.innerHeight;

            const detailsTop = detailsRect.top;
            const detailsBottom = detailsRect.bottom - viewportHeight; 

            if (detailsTop < 0 && detailsBottom > 0) {
                gallery.style.transform = `translateY(${ -detailsTop }px)`;
            } else if (detailsBottom <= 0) {
                gallery.style.transform = `translateY(${ detailsRect.height - galleryHeight }px)`;
            } else {
                gallery.style.transform = "none";
            }
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
    });

//Gallery
    function changeImage(imageSrc, thumbnail) {
        document.getElementById('mainImage').src = imageSrc;
        document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('active'));
        thumbnail.classList.add('active');
    }
    
        function zoomImage(event) {
        let image = document.getElementById('mainImage');
        let rect = image.getBoundingClientRect();
        let x = ((event.clientX - rect.left) / rect.width) * 100;
        let y = ((event.clientY - rect.top) / rect.height) * 100;

        
        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = `scale(2)`;
    }

    function resetZoom() {
        let image = document.getElementById('mainImage');
        image.style.transform = 'scale(1)';
        image.style.transformOrigin = 'center center';
    }


 //Accordion   
    document.querySelectorAll('.collapsible-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
      const toggles = document.querySelectorAll(".toggle");
      
      toggles.forEach(toggle => {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          
          const inner = this.nextElementSibling;
          
          if (inner.classList.contains("show")) {
            inner.classList.remove("show");
            inner.style.maxHeight = null;
          } else {
            document.querySelectorAll(".accordion .inner").forEach(el => {
              el.classList.remove("show");
              el.style.maxHeight = null;
            });
            
            inner.classList.add("show");
            inner.style.maxHeight = inner.scrollHeight + "px";
          }
        });
      });
    });

