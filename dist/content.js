"use strict";
      (() => {
          const 
            face_pattern = /\/(face|dynamicheadcostume)\/webp\//i;
              function hide_faces() {
                document.querySelectorAll("img").forEach(img => {
          const 
            sources = 
              [img.src, img.currentSrc, img.dataset.src, img.dataset.original];
          const 
            is_face = sources.some(url => url && face_pattern.test(url));
                  if (is_face) {
                      const 
                        tile = img.closest
                          (".mix_item, [data-ref='item']");
                      if (tile) {
                          tile.setAttribute
                        ("data-faceless-hidden", "true");
                    }
                }
          });
      }
      hide_faces(); 
    const 
      observer = new MutationObserver(hide_faces);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
  })
();