import { useState } from "react";
import LocationSelect from "../../../Shared/LocationSelect";
import ImageUploader from "../../../ImageUploader/ImageUploader";
import AvailabilityInput from "../../../Availability/AvailabilityInput";
import axios from "axios";

export const AccommodationModifyForm = ({ accommodation }) => {
  const [isUpdate, setisUpdate] = useState(!!accommodation);
  const [id, setid] = useState(accommodation?.id ?? null);
  const [userId, setuserId] = useState(accommodation?.userId ?? null);
  const [Name, setName] = useState(accommodation?.name ?? "");
  const [Desccription, setDesccription] = useState(
    accommodation?.description ?? ""
  );
  const [MinGuest, setMinGuest] = useState(accommodation?.minGuestNum ?? 0);
  const [MaxGuest, setMaxGuest] = useState(accommodation?.maxGuestNum ?? 10);
  const [AutoApprove, setAutoApprove] = useState(
    accommodation?.autoApproveReservation ?? false
  );
  const [Location, setLocation] = useState(accommodation?.location ?? "");
  const [tags, setTags] = useState(accommodation?.tags ?? []);
  const [images, setImages] = useState(accommodation?.images ?? []);
  const [availabilities, setAvailabilities] = useState(
    accommodation?.availabilities ?? []
  );
  const [currentTag, setCurrentTag] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [Page, setPage] = useState(0);

  const addTag = () => {
    if (currentTag.trim() === "") {
      alert("Tag value cannot be blank!");
      return;
    }
    tags.push(currentTag);
    setTags([...tags]);
    setCurrentTag("");
  };

  const removeTag = (tag) => {
    let index = tags.indexOf(tag);
    if (index > -1) {
      tags.splice(index, 1);
    }

    setTags([...tags]);
  };

  const addImage = () => {
    images.push(currentImage);
    setImages([...images]);
    setCurrentImage("");
  };

  const removeImage = (image) => {
    let index = images.indexOf(image);
    if (index > -1) {
      images.splice(index, 1);
    }

    setImages([...images]);
  };

  const nextPage = () => {
    setPage((page) => (page + 1) % 3);
  };

  const previousPage = () => {
    setPage((page) => (page - 1) % 3);
  };

  const isFinite = () => {
    return (
      availabilities.length > 0 &&
      availabilities.every(
        (a) => a.slot.startDate && a.slot.endDate && a.price.basePrice
      )
    );
  };

  const buildDTO = () => {
    const location = {
      name: Location.locationName ?? Location.name,
      fullAddress: Location.locationName ?? Location.name,
      lon: Location.longitude ?? Location.lon,
      lat: Location.latitude ?? Location.lat,
    };

    if (Location.id) location.id = Location.id;

    const accommodation = {
      name: Name,
      description: Desccription,
      minGuestNum: MinGuest,
      maxGuestNum: MaxGuest,
      autoApproveReservation: AutoApprove,
      tags: tags,
      images: images,
      location: location,
      availabilities: availabilities,
    };

    if (id) {
      accommodation.id = id;
      accommodation.userId = userId;
    }

    return accommodation;
  };

  const finish = () => {
    const dto = buildDTO();
    if (window.confirm("Finished setting up all data?")) {
      if (!isUpdate) {
        axios
          .post("http://localhost:8082/api/accommodation", dto)
          .then((res) => {
            if (res.data) window.location.href = "/my-accommodations";
          });
      } else {
        axios
          .put("http://localhost:8082/api/accommodation/update/" + id, dto)
          .then((res) => {
            if (res.data) {
              console.log(res.data);
              //redirect?
              window.location.href = "/my-accommodations";
            }
          });
      }
    } else {
      return null;
    }
  };

  const previousBtn = (
    <button
      className="primary-btn"
      disabled={Page === 0}
      onClick={previousPage}
    >
      Previous
    </button>
  );

  const nextBtn = (
    <button className="primary-btn" disabled={Page === 3} onClick={nextPage}>
      NEXT
    </button>
  );

  const finishBtn = (
    <button className="primary-btn" onClick={finish}>
      FINISH
    </button>
  );

  return (
    <div class="section-top-border">
      {Page === 0 ? (
        <div class="row d-flex  justify-content-center">
          <div class="col-lg-6 col-md-6">
            <div className="d-flex justify-content-between mb-30">
              <h3 class="my-30">Basic information</h3>
              {nextBtn}
            </div>
            <form action="#">
              <div class="mt-10">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  class="single-input"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mt-10">
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  required
                  class="single-textarea"
                  value={Desccription}
                  onChange={(e) => setDesccription(e.target.value)}
                />
              </div>
              {/* <div class="mt-10">
                <label placeholder="Min guests number:">Price</label>
                <input type="number" name="price" required class="single-input" />
              </div> */}
              <div class="mt-10">
                <label placeholder="Min guests number:">
                  Min guests number
                </label>
                <input
                  type="number"
                  name="minGuestNum"
                  required
                  class="single-input"
                  value={MinGuest}
                  onChange={(e) => setMinGuest(e.target.value)}
                />
              </div>
              <div class="mt-10">
                <label placeholder="Max guests number:">
                  Max guests number:{" "}
                </label>
                <input
                  type="number"
                  name="maxGuestNum"
                  required
                  class="single-input"
                  value={MaxGuest}
                  onChange={(e) => setMaxGuest(e.target.value)}
                />
              </div>
              <div class="switch-wrap d-flex mt-10">
                <label>Auto approve reservation</label>
                <div class="primary-switch ml-10">
                  <input
                    type="checkbox"
                    id="default-switch"
                    checked={AutoApprove}
                    onChange={(e) => setAutoApprove(e.target.checked)}
                  />
                  <label for="default-switch"></label>
                </div>
              </div>
              <div class="mt-10">
                <LocationSelect
                  location={Location}
                  setLocation={setLocation}
                ></LocationSelect>
              </div>
            </form>
            <h3 class="mb-30 mt-30">Tags</h3>
            {tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  className="row mt-10 d-flex align-items-center justify-content-between"
                >
                  <h4>{tag}</h4>
                  <button
                    className="primary-btn"
                    onClick={() => removeTag(tag)}
                  >
                    Remove tag
                  </button>
                </div>
              );
            })}
            <div class="row mt-10">
              <input
                type="text"
                name="tag"
                placeholder="Tag name"
                onChange={(e) => setCurrentTag(e.target.value)}
                class="single-input"
                value={currentTag}
              />
              <button className="primary-btn mt-2" onClick={addTag}>
                Add tag
              </button>
            </div>
            <div class="single-element-widget">
              <h3 class="mb-30 mt-30">Images</h3>
              {images.map((img, i) => {
                return (
                  <div
                    key={i}
                    className="row mt-10 d-flex justify-content-between align-items-center"
                  >
                    <img src={img} height={200} />
                    <button
                      className="primary-btn"
                      onClick={() => removeImage(img)}
                    >
                      Remove image
                    </button>
                  </div>
                );
              })}
              <div class="row mt-10">
                <ImageUploader setImages={setImages}></ImageUploader>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {Page === 1 ? (
        <div class="row d-flex  justify-content-center">
          <div class="col-lg-6 col-md-6">
            <div className="d-flex justify-content-between mb-30">
              <h3 class="my-30">Availability information</h3>
              {previousBtn}
              {isFinite() ? finishBtn : nextBtn}
            </div>
            <div class="container mt-5">
              <div class="tab-content mt-3">
                <div id="tab1" class="tab-pane fade show active">
                  <div class="row">
                    <div class="col">
                      <AvailabilityInput
                        availabilities={availabilities}
                        setAvailabilities={setAvailabilities}
                      ></AvailabilityInput>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AccommodationModifyForm;
