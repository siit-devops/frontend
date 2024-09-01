import { useState } from "react";
import AccommodationPatternInput from "../../../Shared/AccommodationPatternInput";
import AccommodationRangeInput from "../../../Shared/AccommodationRangeInput";
import UpdateAccommodationRange from "../../../Shared/UpdateAccommodationRange";
import UpdateAccommodationPattern from "../../../Shared/UpdateAccommodationPattern";
import UpdateAccommodationPriceRange from "../../../Shared/UpdateAccommodationPriceRange";
import UpdateAccommodationPricePattern from "../../../Shared/UpdateAccommodationPricePattern";
import PriceRangeInput from "../../../Shared/PriceRangeInput";
import PricePatternInput from "../../../Shared/PricePatternInput";
import LocationSelect from "../../../Shared/LocationSelect";
import ImageUploader from "../../../ImageUploader/ImageUploader";
import axios from "axios";

export const AccommodationModifyForm = ({ accommodation }) => {

  const [isUpdate, setisUpdate] = useState(!!accommodation)
  const [id, setid] = useState(accommodation?.id ?? null)
  const [availabilityId, setavailabilityId] = useState(accommodation?.availability?.id ?? null)
  const [userId, setuserId] = useState(accommodation?.userId ?? null)
  const [Name, setName] = useState(accommodation?.name ?? "")
  const [Desccription, setDesccription] = useState(accommodation?.description ?? "")
  const [MinGuest, setMinGuest] = useState(accommodation?.minGuestNum ?? 0)
  const [MaxGuest, setMaxGuest] = useState(accommodation?.maxGuestNum ?? 10)
  const [AutoApprove, setAutoApprove] = useState(accommodation?.autoApproveReservation ?? false)
  const [Location, setLocation] = useState(accommodation?.location ?? "")
  const [tags, setTags] = useState(accommodation?.tags ?? []);
  const [images, setImages] = useState(accommodation?.images ?? []);
  const [AvailabilityRanges, setAvailabilityRanges] = useState(accommodation?.availability?.allRangePeriods ?? [])
  const [AvailabilityPattern, setAvailabilityPattern] = useState(accommodation?.availability?.allPatternPeriods[0] ?? { dayOfWeek: [] })
  const [Price, setPrice] = useState(accommodation?.availability?.price ?? { basePrice: 10, byPerson: false, priceRules: [] })
  const [currentTag, setCurrentTag] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [Page, setPage] = useState(0)

  const addTag = () => {
    if (currentTag.trim() === "") {
      alert("Tag value cannot be blank!")
      return
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
    setPage(page => (page + 1) % 3)
  }

  const buildDTO = () => {
    const location = {
      name: Location.locationName ?? Location.name,
      fullAddress: Location.locationName ?? Location.name,
      lon: Location.longitude ?? Location.lon,
      lat: Location.latitude ?? Location.lat,
    }


    const availability = {
      allRangePeriods: AvailabilityRanges,
      allPatternPeriods: [AvailabilityPattern],
      price: Price
    }

    if (Location.id)
      location.id = Location.id
    if (availabilityId)
      availability.id = availabilityId

    const accommodation = {
      name: Name,
      description: Desccription,
      minGuestNum: MinGuest,
      maxGuestNum: MaxGuest,
      autoApproveReservation: AutoApprove,
      tags: tags,
      images: images,
      location: location,
      availability: availability,
    }

    if (id) {
      accommodation.id = id;
      accommodation.userId = userId;
    }

    return accommodation;
  }

  const finish = () => {
    const dto = buildDTO();
    if (window.confirm("Finished setting up all data?")) {
      if (!isUpdate) {
        axios.post("http://localhost:8082/api/accommodation", dto).then(res => {
          if (res.data)
            window.location.href = '/my-accommodations'
        })
      } else {
        axios.put("http://localhost:8082/api/accommodation", dto).then(res => {
          if (res.data) {
            console.log(res.data)
            //redirect?
            window.location.href = '/my-accommodations'
          }
        })
      }
    } else {
      return null;
    }

  }

  const nextBtn = <button className="primary-btn" disabled={Page === 3} onClick={nextPage}>NEXT</button>
  const finishBtn = <button className={!!Price.basePrice && !!Name ? "finish-btn" : "finish-btn disabled"} disabled={Page === 3} onClick={finish}>FINISH</button>

  return (
    <div class="section-top-border">
      {Page === 0 ?
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
                  onChange={e => setName(e.target.value)}
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
                  onChange={e => setDesccription(e.target.value)}
                />
              </div>
              {/* <div class="mt-10">
                <label placeholder="Min guests number:">Price</label>
                <input type="number" name="price" required class="single-input" />
              </div> */}
              <div class="mt-10">
                <label placeholder="Min guests number:">Min guests number</label>
                <input
                  type="number"
                  name="minGuestNum"
                  required
                  class="single-input"
                  value={MinGuest}
                  onChange={e => setMinGuest(e.target.value)}
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
                  onChange={e => setMaxGuest(e.target.value)}
                />
              </div>
              <div class="switch-wrap d-flex mt-10">
                <label>Auto approve reservation</label>
                <div class="primary-switch ml-10">
                  <input type="checkbox" id="default-switch"
                    onChange={e => setAutoApprove(e.target.checked)} />
                  <label for="default-switch"></label>
                </div>
              </div>
              <div class="mt-10">
                <LocationSelect location={Location} setLocation={setLocation}></LocationSelect>
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
                  <button className="primary-btn" onClick={() => removeTag(tag)}>
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
        </div> : <></>
      }
      {Page === 1 ?
        <div class="row d-flex  justify-content-center">
          <div class="col-lg-6 col-md-6">
            <div className="d-flex justify-content-between mb-30">
              <h3 class="my-30">Availability information</h3>
              {nextBtn}
            </div>
            <div class="container mt-5">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#tab1">Range Availability</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#tab2">Pattern Availability</a>
                </li>
              </ul>

              <div class="tab-content mt-3">
                <div id="tab1" class="tab-pane fade show active">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        {isUpdate ?
                          <UpdateAccommodationRange AvailabilityRanges={AvailabilityRanges} setAvailabilityRanges={setAvailabilityRanges}></UpdateAccommodationRange>
                          :
                          <AccommodationRangeInput AvailabilityRanges={AvailabilityRanges} setAvailabilityRanges={setAvailabilityRanges} ></AccommodationRangeInput>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" class="tab-pane fade">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <AccommodationPatternInput AvailabilityPattern={AvailabilityPattern} setAvailabilityPattern={setAvailabilityPattern} ></AccommodationPatternInput>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div> : <></>}
      {Page === 2 ?
        <div class="row d-flex  justify-content-center">
          <div class="col-lg-6 col-md-6">
            <div className="d-flex justify-content-between mb-30">
              <h3 class="my-30">Pricing information</h3>
              <div>
                {nextBtn}
                &nbsp;
                {finishBtn}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div class="px-10">
                <input type="text" class="form-control" placeholder="Daily Price" value={Price.basePrice}
                  onChange={e => setPrice(old => {
                    return { ...old, basePrice: e.target.value }
                  })} />
              </div>
            </div>
            <div class="switch-wrap d-flex mt-10 px-10">
              <label>Display Price By Guest {`(`}Total is default {`)`}</label>
              <div class="primary-switch ml-10">
                <input type="checkbox" id="default-switch" checked={Price.byPerson}
                  onChange={e => setPrice(old => {
                    return { ...old, byPerson: e.target.checked }
                  })} />
                <label for="default-switch"></label>
              </div>
            </div>
            <div class="container mt-5">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#tab1">Period Price Rules</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#tab2">Pattern Price Rules</a>
                </li>
              </ul>
              <div class="tab-content mt-3">
                <div id="tab1" class="tab-pane fade show active">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        {isUpdate ?
                          <UpdateAccommodationPriceRange price={Price} setPrice={setPrice}></UpdateAccommodationPriceRange>
                          :
                          <PriceRangeInput price={Price} setPrice={setPrice}></PriceRangeInput>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" class="tab-pane fade">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        {isUpdate ?
                          <UpdateAccommodationPricePattern price={Price} setPrice={setPrice}></UpdateAccommodationPricePattern>
                          :
                          <PricePatternInput price={Price} setPrice={setPrice}></PricePatternInput>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div> : <></>}
    </div>
  );
};

export default AccommodationModifyForm;
