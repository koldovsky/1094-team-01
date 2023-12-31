document.addEventListener("partialsLoaded", async () => {
    const response = await fetch('api/exhibitions.json');
    const exhibitions = await response.json();
  
    function displayExhibitions(exhibitions) {
    
      const exhibitionsContainer = document.querySelector(".exhibitions__cards");
      let exhibitionsHtml = '';
      
     
      for (const exhibition of exhibitions) {
        exhibitionsHtml += `
        <div class="exhibitions__card">
            <div class="exhibitions__card-photo">
                <img src="img/img-events/${exhibition.image}" alt="${exhibition.image}">
            </div>
            <div class="exhibitions__card-available italic">
                <p class="bold">${exhibition.availability}</p>
                <p>${exhibition.dateStart} – ${exhibition.dateEnd}</p>
            </div>
            <div>
                <h3>${exhibition.title}</h3>
                <span class="italic">"${exhibition.artist}"</span>
            </div>
            <div class="btns-group">
                <a href="permanent-exhibition.html">Read More</a>
            </div>
        </div>
        `;
      }
      if (exhibitionsContainer) {
        exhibitionsContainer.innerHTML = exhibitionsHtml;
      } else {
        console.error('Елемент з класом .events__cards не знайдений');
      }
  
    };
  
    displayExhibitions(exhibitions);
  });
  
  