export const ImagesSection = ({ images }) => {
  return (
    <div className="container">
      <div class="section-top-border">
        <div class="row gallery-item">
          {images.map((image) => {
            return (
              <div class="col-md-4">
                <a href={image} class="img-gal">
                  <div
                    class="single-gallery-image"
                    style={{ background: "url(" + image + ")" }}
                  ></div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
