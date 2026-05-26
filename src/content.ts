(
  () => {
        const 
          hidden_attr = "data-faceless-hidden";
        const 
          face_pattern = /\/(face|dynamicheadcostume)\/webp\//i;
      let scan_timer = 0;
    function image_urls
      (image: HTMLImageElement): string[] {
      return [
        image.currentSrc,
        image.src,
        image.srcset,
        image.dataset.src,
        image.dataset.original,
        image.getAttribute("data-src"),
        image.getAttribute("data-original")
      ].filter((url): 
          url is string => Boolean(url));
    }
      function is_face_image(image: HTMLImageElement): boolean {
        return image_urls(image).some((url) => face_pattern.test(url));
      }
      function deal_tile(element: Element): HTMLElement | null {
        return element.closest<HTMLElement>(".mix_item, [data-ref='item']");
    }
      function hide_faces(): void {
        for (const image of document.querySelectorAll<HTMLImageElement>("img")) {
          if (!is_face_image(image)) continue;
          const tile = deal_tile(image);
          if (tile) tile.setAttribute(hidden_attr, "true");
        }
    } 
  const 
    observer = new MutationObserver(() => {
      clearTimeout(scan_timer);
      scan_timer = window.setTimeout(hide_faces, 100);
  });
      hide_faces();
      observer.observe(document.documentElement, 
      { childList: true, subtree: true });
    })
();
